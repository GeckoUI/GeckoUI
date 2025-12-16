<p align="center">
  <img src="https://github.com/geckoui/geckoui/raw/develop/GeckoUI.png" alt="Gecko UI" width="120" />
</p>

<h1 align="center">Gecko UI</h1>

<p align="center">
  The only thing our Gecko 🦎 eats is bugs! 🐛<br />
</p>

📚 **Documentation**: [Gecko](https://gecko.productionbug.com)

## Installation

```bash
npm install @geckoui/geckoui
# or
pnpm add @geckoui/geckoui
# or
yarn add @geckoui/geckoui
```

## Install react-hook-form for form components

```bash
npm install react-hook-form

# or
pnpm add react-hook-form

# or
yarn add react-hook-form
```

## Quick Start

### 1. Import Styles

Import the component styles in your app:

```tsx
import "@geckoui/geckoui/styles.css";
```

> If you use `tailwindcss`, make sure to import the css inside `layer` directive to correctly override the styles:

```css title="src/global.css"
@import "tailwindcss";

@layer components {
  @import "@geckoui/geckoui/styles.css";
}
```

### 2. Use Components

```tsx
import { Alert, Button, Input } from "@geckoui/geckoui";

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Click me
      </Button>

      <Input placeholder="Enter your name" />

      <Alert variant="success" title="Operation completed successfully!" />
    </div>
  );
}
```

## Theming

GeckoUI uses a powerful CSS variable-based theming system that automatically adapts all components when you change the theme class.

### Applying Themes

Simply add a theme class to your root element:

```tsx
// Light theme (default)
<div className="light">
  <App />
</div>

// Dark theme
<div className="dark">
  <App />
</div>

// Custom theme
<div className="neon">
  <App />
</div>
```

### Built-in Themes

- **Light** (default) - Clean, bright interface
- **Dark** - Easy on the eyes

### Creating Custom Themes

Create a CSS file with your theme:

```css
/* my-theme.css */
.my-theme {
  /* Override any other CSS variables as needed */
}
```

Import it and use it:

```tsx
import "./my-theme.css";

<div className="my-theme">
  <App />
</div>;
```

## Advanced Usage

### Custom Styling with BEM

All components use BEM (Block Element Modifier) naming for easy customization:

```css
/* Target specific component parts */
.GeckoUIButton--contained-primary {
  /* Your custom styles */
}

.GeckoUIInput__input {
  /* Style the inner input element */
}
```

## TypeScript

All components are fully typed. Import types as needed:

```tsx
import type { ButtonProps, InputProps } from "@geckoui/geckoui";
```

## License

This project is licensed under the MIT License.

## Support

For issues and feature requests, please visit our [@geckoui/geckoui](https://github.com/geckoui/geckoui).
