#
 # @Author: @Guojufeng
 # @Date: 2020-11-03 22:26:56
 # @LastEditors: @Guojufeng
 # @LastEditTime: 2020-11-03 23:03:22
 # @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/build/release.sh
#
#!/usr/bin/env sh
set -e

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
  git push origin main
  git push origin refs/tags/v$VERSION
  git checkout dev
  git rebase main
  git push origin dev

  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi





