#!/usr/bin/env bash

cd "$(dirname "$0")/.."
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v16
. .env
. .env.local

host=$HOST_DOMAIN
name=$HOST_PATH
project=$HOST_PROJECT

node -v
npm -v

npm i
#npm start
echo $HOST_PASS | sudo -S systemctl restart ${META_SERVICE}

echo "current name: $name"
