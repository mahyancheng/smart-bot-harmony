#!/bin/bash
cd "$(dirname "$0")/.."
exec /Users/leadzap/.nvm/versions/node/v24.15.0/bin/node node_modules/.bin/vite --port 5182 --strictPort --host 127.0.0.1
