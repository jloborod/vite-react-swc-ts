# React + TypeScript + Vite + Vitest + React Testing Library

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Testing suite

[Vitest](https://github.com/vitejs/vite) and [React Testing Library](https://github.com/testing-library/react-testing-library) are set up for testing.

## Fast Refresh

This repo uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) with [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
