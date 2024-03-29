#!/usr/bin/env bash

cd "$(dirname "$0")/.."
. $HOME/.bashrc
. .env
. .env.local

host=$HOST_DOMAIN
name=$HOST_PATH
project=$HOST_PROJECT

echo "current name: $name"

cd $HOME/www/${name}/${project}
nvm install v18
node -v
npm -v
npm i

sudo /etc/init.d/nginx reload
sudo systemctl daemon-reload
sudo systemctl restart ${META_SERVICE}
