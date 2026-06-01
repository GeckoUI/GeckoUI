import type { ReactNode } from "react";

import type { DialogOptions } from "../Dialog/Dialog.types";
import type { DrawerProps } from "../Drawer/Drawer.types";

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

let idCounter = 0;
let entries: OverlayEntry[] = [];
const listeners = new Set<() => void>();
const dismissFns = new Map<string, () => void>();

function notify() {
  listeners.forEach((l) => l());
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

  pushDialog(options: DialogOptions): string {
    const id = String(++idCounter);
    entries = [...entries, { id, type: "dialog", options }];
    notify();
    return id;
  },

  pushDrawer(node: ReactNode, options: Omit<DrawerProps, "open" | "children">): string {
    const id = String(++idCounter);
    entries = [...entries, { id, type: "drawer", node, options }];
    notify();
    return id;
  },

  remove(id: string): void {
    entries = entries.filter((e) => e.id !== id);
    dismissFns.delete(id);
    notify();
  },

  registerDismiss(id: string, fn: () => void): () => void {
    dismissFns.set(id, fn);
    return () => {
      dismissFns.delete(id);
    };
  },

  dismiss(id?: string): void {
    if (id !== undefined) {
      dismissFns.get(id)?.();
    } else {
      const topId = entries[entries.length - 1]?.id;
      if (topId) dismissFns.get(topId)?.();
    }
  }
};
