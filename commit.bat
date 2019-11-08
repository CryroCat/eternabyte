#!/bin/sh
cd /d/wamp/www/projectName
git checkout dev
git add .
git commit --allow-empty -am "made changes"
git push
echo Press Enter...
read