#!/bin/bash
# Build script for CloudPanel deployment
# This script loads Node.js and builds the Vite React app

set -e  # Exit on error

echo "Starting build process..."

# Try to load nvm (Node Version Manager)
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    echo "Loading nvm..."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm use 22 || nvm use default
elif [ -d "/opt/cloudpanel/node/22" ]; then
    echo "Using CloudPanel Node.js installation..."
    export PATH="/opt/cloudpanel/node/22/bin:$PATH"
elif [ -d "/usr/local/bin" ] && [ -f "/usr/local/bin/node" ]; then
    echo "Using system Node.js..."
    export PATH="/usr/local/bin:$PATH"
fi

# Verify Node.js is available
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js not found!"
    echo "Trying to find Node.js installation..."
    find /opt -name "node" -type f 2>/dev/null | head -5
    find /usr -name "node" -type f 2>/dev/null | head -5
    exit 1
fi

echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building application..."
npm run build

# Verify build output
if [ ! -d "dist" ]; then
    echo "ERROR: dist folder not created!"
    exit 1
fi

echo "Build completed successfully!"
echo "Build output is in the 'dist' directory"
ls -lh dist/ | head -10

