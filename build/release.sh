#!/usr/bin/env sh
set -e

# login npm
echo "🐒请输入你的NPM用户名、密码和邮箱来登录NPM账号～"
echo    
npm login

# generate version
console.log($1)
VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  if [[ -z $SKIP_TESTS ]]; then
    npm run lint
    # npm run test:ui
  fi

  # build
  VERSION=$VERSION npm run dist

  # commit
  git add -A
  git commit -m "build: build $VERSION"
  # generate release note
  npm run release:note
  # tag version
  npm version "$VERSION" --message "build: release $VERSION"

  # publish
  git push origin refs/tags/v"$VERSION"
  git push
  if [[ -z $RELEASE_TAG ]]; then
    npm publish
  else
    npm publish --tag "$RELEASE_TAG"
  fi
fi
