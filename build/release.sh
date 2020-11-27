#!/usr/bin/env sh
set -e
# login npm
echo "🐒请输入你的NPM用户名、密码和邮箱来登录NPM账号～"
echo    
npm login

# git main
git checkout main
git merge dev

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run dist

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push axe-ui main
  git push axe-ui refs/tags/v$VERSION
  git checkout dev
  git rebase main
  git push axe-ui dev

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
