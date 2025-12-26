import autoprefixer from "autoprefixer";
import { sassPlugin } from "esbuild-sass-plugin";
import { globSync } from "glob";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import { defineConfig } from "tsup";

const external = [
  "react",
  "react-dom",
  "react-hook-form",
  "tailwind-merge",
  "mime",
  "class-variance-authority",
  "class-variance-authority/types",
  "@floating-ui/react",
  "sonner",
  "next-themes",
  "@headlessui/react",
  "react-textarea-autosize",
  "prop-types",
  "tailwind-merge"
];

const watchFiles = ["./src/**/*.scss"].flatMap((pattern) => {
  return globSync(pattern, { ignore: "node_modules/**" });
});

export default defineConfig((options) => {
  return {
    entry: [
      "src/index.ts",
      ...(options.watch ? watchFiles.filter((f) => f !== "src/imports.scss") : ["src/styles.scss"])
    ],
    outDir: "dist",
    external,
    format: ["cjs", "esm"],
    dts: {
      entry: "src/index.ts",
      output: "dist/index.d.ts"
    },
    clean: !options.watch,
    platform: "browser",
    esbuildPlugins: [
      sassPlugin({
        sourceMap: false,
        async transform(source) {
          const { css } = await postcss([autoprefixer, tailwindcss()]).process(source, {
            from: undefined
          });

          return {
            loader: "css",
            contents: css
          };
        }
      })
    ]
  };
});
