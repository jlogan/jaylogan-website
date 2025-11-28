# Buddy.works Pipeline Setup Guide

## Current Issue
The `dist` folder is built in Buddy.works' workspace but needs to be transferred to your server.

## Important: What to Transfer

### ✅ DO Transfer:
- **`dist/` folder** - This contains all the built, production-ready files (HTML, CSS, JS, images)
- Only the `dist` folder is needed on the server for a static React/Vite app

### ❌ DON'T Transfer:
- **`node_modules/`** - Not needed! This is only used during the build process. The built files in `dist` already contain everything bundled.
- **Source files** (`src/`, `package.json`, etc.) - Not needed if you're building in Buddy.works
- **`.git/`** - Not needed for production
- **Development config files** - Not needed for production

**Why?** When Vite builds your app, it bundles all dependencies from `node_modules` into optimized static files in the `dist` folder. The server only needs to serve these static files - it doesn't need Node.js or `node_modules` at all!

## Recommended Pipeline Setup

### Step 1: Transfer Source Files (Optional - only if building on server)
- **Action Type:** Transfer files
- **Source:** Repository files (exclude `node_modules`, `dist`)
- **Target:** `/home/jaylogan/htdocs/jaylogan.com`

### Step 2: Build Application
- **Action Type:** Node.js
- **Node.js Version:** 22
- **Commands:**
  ```bash
  npm install
  npm run build
  ```
- **Working Directory:** Repository root

### Step 3: Transfer dist Folder to Server ⭐
- **Action Type:** Transfer files
- **Source:** `dist/**` (all files in dist folder)
- **Target:** `/home/jaylogan/htdocs/jaylogan.com/dist`
- **Options:**
  - Enable "Delete files that don't exist in source" (optional, keeps it clean)
  - Set permissions: `755` for directories, `644` for files

### Step 4: Set Permissions (Optional SSH action)
- **Action Type:** SSH
- **Commands:**
  ```bash
  cd /home/jaylogan/htdocs/jaylogan.com
  chmod -R 755 dist
  ```

## Alternative: Build on Server

If you prefer to build on the server:

### Step 1: Transfer Source Files
- **Action Type:** Transfer files
- **Source:** All repository files (exclude `node_modules`, `.git`)
- **Target:** `/home/jaylogan/htdocs/jaylogan.com`
- **Note:** `node_modules` will be created on the server during `npm install`, but it's only needed for building, not for serving the site

### Step 2: Build on Server
- **Action Type:** SSH
- **Commands:**
  ```bash
  cd /home/jaylogan/htdocs/jaylogan.com
  
  # Load Node.js (adjust path based on your server setup)
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm use 22 || export PATH="/opt/cloudpanel/node/22/bin:$PATH"
  
  # Build
  npm install
  npm run build
  
  # Verify
  ls -la dist/
  
  # Optional: Clean up node_modules to save space (not needed for serving)
  # rm -rf node_modules
  ```

## CloudPanel Configuration

Make sure CloudPanel is configured as:
- **Site Type:** Static (or PHP)
- **Document Root:** `/home/jaylogan/htdocs/jaylogan.com/dist`

This ensures CloudPanel serves the built files from the `dist` directory.

