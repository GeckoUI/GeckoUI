---
"@geckoui/geckoui": major
---

Replace `GeckoUIPortal` with `GeckoUIProvider` — a context-aware, stackable overlay system.

## Breaking change

`<GeckoUIPortal />` (self-closing, placed once at the root) is removed. Replace it with
`<GeckoUIProvider>` wrapping your app's component tree:

**Before:**

```tsx
// app/layout.tsx
import { GeckoUIPortal } from "@geckoui/geckoui";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GeckoUIPortal />
      </body>
    </html>
  );
}
```

**After:**

```tsx
// app/layout.tsx
import { GeckoUIProvider } from "@geckoui/geckoui";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GeckoUIProvider>{children}</GeckoUIProvider>
      </body>
    </html>
  );
}
```

Place `GeckoUIProvider` **below** your own context providers so that overlay content
opened via `Dialog.show()` / `Drawer.show()` can read those contexts.

## What changed

- `Dialog.show()` / `Drawer.show()` now push onto a shared overlay stack instead of
  mounting a detached `createRoot`. This means:
  - React context (e.g. `AuthContext`, `ThemeContext`) flows into overlay content.
  - Multiple dialogs/drawers can be open simultaneously; they stack visually.
  - `show()` returns an `id` string. Pass it to `dismiss(id)` to close a specific overlay;
    call `dismiss()` with no argument to close the topmost overlay.
- Per-overlay Esc and click-outside only act on the **topmost** entry.
- `ConfirmDialog` works unchanged — it wraps `Dialog`.
- Toast (`sonner`) is now hosted inside `GeckoUIProvider` and works identically.
- `GeckoUIPortalProps` is removed; pass toast options as `<GeckoUIProvider toastOptions={...}>`.
