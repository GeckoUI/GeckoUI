import next from "@next/eslint-plugin-next";

const eslintConfig = [
  next.configs.recommended,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", ".source/**", "next-env.d.ts"]
  }
];

export default eslintConfig;
