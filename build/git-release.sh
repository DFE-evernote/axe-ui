#!/usr/bin/env sh
npm run lint # 先校验

git checkout dev

if test -n "$(git status --porcelain)"; then
  echo '工作树有修改。请先提交或隐藏更改.' >&2;
  exit 128;
fi

if ! git fetch --quiet 2>/dev/null; then
  echo '在fetch你的分支时出现了问题。运行' git fetch '查看更多信息……' >&2;
  exit 128;
fi

if test "0" != "$(git rev-list --count --left-only @'{u}'...HEAD)"; then
  echo '远程代码有改动，请pull修改.' >&2;
  exit 128;
fi

echo '没有冲突.' >&2;
