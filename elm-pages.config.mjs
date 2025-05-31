import { defineConfig } from "vite";

export default {
  vite: defineConfig({}),
  headTagsTemplate(context) {
    return `
<link rel="stylesheet" href="/style.css" />
<link rel="icon" href="/media/logo.svg">
<link rel="mask-icon" href="/media/logo.svg" color="#000000">
<link rel="apple-touch-icon" href="logo-180.png">
<meta name="generator" content="elm-pages v${context.cliVersion}" />
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f172a" />
`;
  },
  preloadTagForFile(file) {
    return !file.endsWith(".css");
  },
};
