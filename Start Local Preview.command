#!/bin/zsh

set -e

PROJECT_DIRECTORY="${0:A:h}"
CODEX_PNPM="/Users/jli337/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/pnpm"
CODEX_NODE="/Users/jli337/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"

cd "$PROJECT_DIRECTORY"

echo ""
echo "Jiajin Academic Website"
echo "========================"
echo ""

if command -v node >/dev/null 2>&1; then
  NODE_RUNNER="$(command -v node)"
elif [[ -x "$CODEX_NODE" ]]; then
  NODE_RUNNER="$CODEX_NODE"
else
  echo "没有找到网站预览工具。请在 Codex 中告诉我，我会帮你修复。"
  read -k 1 "?按任意键关闭窗口..."
  exit 1
fi

if command -v pnpm >/dev/null 2>&1; then
  PACKAGE_RUNNER="pnpm"
elif command -v npm >/dev/null 2>&1; then
  PACKAGE_RUNNER="npm"
elif [[ -x "$CODEX_PNPM" ]]; then
  PACKAGE_RUNNER="$CODEX_PNPM"
else
  echo "没有找到网站预览工具。请在 Codex 中告诉我，我会帮你修复。"
  read -k 1 "?按任意键关闭窗口..."
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "第一次启动，正在准备本地预览（只需要一次）..."
  "$PACKAGE_RUNNER" install
fi

echo "预览地址：http://localhost:3005"
echo "保存 Markdown 后网页会自动更新。"
echo "结束预览：按 Control + C"
echo ""

(sleep 2; open "http://localhost:3005") &
WRANGLER_LOG_PATH="$PROJECT_DIRECTORY/.wrangler/wrangler.log" \
  "$NODE_RUNNER" node_modules/vinext/dist/cli.js dev --port 3005
