import type { ReactNode } from "react";

import type { DialogOptions } from "../Dialog/Dialog.types";
import type { DrawerProps } from "../Drawer/Drawer.types";

export type OverlayType = "dialog" | "drawer";

export interface DialogEntry {
  id: string;
  type: "dialog";
  options: DialogOptions;
}

export interface DrawerEntry {
  id: string;
  type: "drawer";
  node: ReactNode;
  options: Omit<DrawerProps, "open" | "children">;
}

export type OverlayEntry = DialogEntry | DrawerEntry;

export const OVERLAY_ANIMATION_DURATION = 300;

const BASE_Z_INDEX: Record<OverlayType, number> = {
  drawer: 1000,
  dialog: 2000
};

let idCounter = 0;
let hostIdCounter = 0;
let entries: OverlayEntry[] = [];
let hosts: number[] = [];
let activeHost: number | null = null;

const listeners = new Set<() => void>();
const dismissFns = new Map<string, () => void>();
const closingIds = new Set<string>();

function notify() {
  listeners.forEach((listener) => listener());
}

function warnWhenNoHost() {
  if (hosts.length > 0) return;

  console.error(
    "[GeckoUI] No <GeckoUIProvider> is mounted, so the overlay cannot be rendered. " +
      "Wrap your app with <GeckoUIProvider> — see https://geckoui.dev/docs/gecko-ui-provider"
  );
}

function isOpen(entry: OverlayEntry) {
  return !closingIds.has(entry.id);
}

export function getZIndex(entry: OverlayEntry, index: number): number {
  return BASE_Z_INDEX[entry.type] + index;
}

export const overlayStore = {
  subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  getSnapshot(): OverlayEntry[] {
    return entries;
  },

  getActiveHost(): number | null {
    return activeHost;
  },

  createHostId(): number {
    return ++hostIdCounter;
  },

  registerHost(hostId: number): () => void {
    hosts = [...hosts, hostId];
    activeHost = hosts[0];

    if (hosts.length > 1) {
      console.error(
        "[GeckoUI] More than one <GeckoUIProvider> is mounted. Overlays are rendered by the " +
          "first one only. Mount a single provider at the root of your app."
      );
    }

    notify();

    return () => {
      hosts = hosts.filter((id) => id !== hostId);
      activeHost = hosts[0] ?? null;
      notify();
    };
  },

  /**
   * The overlay that should own Esc and click-outside. Dialogs always sit above drawers,
   * so a dialog wins over any open drawer regardless of which was opened last.
   */
  getTopId(type?: OverlayType): string | undefined {
    const candidates = entries.filter(
      (entry) => isOpen(entry) && (type === undefined || entry.type === type)
    );

    if (candidates.length === 0) return undefined;

    return candidates.reduce((top, entry) =>
      BASE_Z_INDEX[entry.type] >= BASE_Z_INDEX[top.type] ? entry : top
    ).id;
  },

  pushDialog(options: DialogOptions): string {
    const id = String(++idCounter);
    entries = [...entries, { id, type: "dialog", options }];
    warnWhenNoHost();
    notify();
    return id;
  },

  pushDrawer(node: ReactNode, options: Omit<DrawerProps, "open" | "children">): string {
    const id = String(++idCounter);
    entries = [...entries, { id, type: "drawer", node, options }];
    warnWhenNoHost();
    notify();
    return id;
  },

  /**
   * Marks an entry as closing so it stops counting as the topmost overlay while its
   * exit animation plays. The entry underneath takes over Esc and click-outside right away.
   */
  markClosing(id: string): void {
    if (closingIds.has(id)) return;

    closingIds.add(id);
    notify();
  },

  remove(id: string): void {
    entries = entries.filter((entry) => entry.id !== id);
    closingIds.delete(id);
    dismissFns.delete(id);
    notify();
  },

  registerDismiss(id: string, fn: () => void): () => void {
    dismissFns.set(id, fn);
    return () => {
      dismissFns.delete(id);
    };
  },

  dismiss(type?: OverlayType, id?: string): void {
    const targetId = id ?? overlayStore.getTopId(type);
    if (targetId) dismissFns.get(targetId)?.();
  }
};
