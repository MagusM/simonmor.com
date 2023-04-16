#!/bin/sh

# Install dependencies
npm install

# Build the application
npm run build

# Delte old public_html folder
# rm -rf public_html

# Move the build files to the public directory
mv build/* public_html/

# Restart the server
pm2 restart server.js
