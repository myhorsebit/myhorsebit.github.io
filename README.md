# 内定小马 - 官方网站

极简科技感的产品官网，基于 Vite + React + TypeScript 构建。

## 产品简介

**内定小马**是一款通过截图帮助用户 AI 答题、搜索题库的 Web Test 助手。

- 主文案：AI 时代 Web Test 助手
- 副文案：加群无料使用内定小马🥳
- 支持 Apple Silicon 下载，Intel/Windows 敬请期待

## 本地开发

```bash
npm install
npm run dev
```

## 一键部署到 GitHub Pages

> 已配置好 `homepage` 和 `vite.config.ts`，无需手动更改。

```bash
npm run deploy
```

部署后访问：https://myhorsebit.github.io/blog-official/

## 注意事项

- 如需更换仓库名或自定义域名，请同步修改 `package.json` 的 `homepage` 和 `vite.config.ts` 的 `base` 字段。
- 若用作主页面仓库（myhorsebit.github.io），`base` 应为 `/`。
