#!/bin/bash
set -e

echo "[1/3] 安装依赖..."
npm install

echo "[2/3] 构建项目..."
npm run build

echo "[3/3] 部署到 GitHub Pages..."
npm run deploy

echo "✅ 部署完成！请访问：https://myhorsebit.github.io/" 