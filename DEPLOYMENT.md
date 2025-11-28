# Deployment Guide for CloudPanel

## Overview
This is a static React application built with Vite. After building, the production files are in the `dist` directory and should be served as static files, not as a Node.js application.

## SSH Commands for Buddy.works Deployment

Add these commands to your Buddy.works SSH action **after** the file transfer:

### Step 1: Navigate to your site directory
```bash
cd /home/[your-username]/sites/[your-site-name]/htdocs
# OR wherever CloudPanel stores your site files
```

### Step 2: Load Node.js environment
CloudPanel typically uses nvm. Try one of these approaches:

**Option A: Source nvm (most common)**
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 22
```

**Option B: Use full path to Node.js**
```bash
# Find Node.js location first
which node
# Or try:
/usr/local/bin/node --version
# Or CloudPanel's specific path:
/opt/cloudpanel/node/[version]/bin/node --version
```

**Option C: Use CloudPanel's Node.js directly**
```bash
# CloudPanel often installs Node at:
/opt/cloudpanel/node/22/bin/node --version
/opt/cloudpanel/node/22/bin/npm --version
```

### Step 3: Install dependencies and build
Once Node.js is accessible, run:

```bash
# Install dependencies
npm install

# Build the application (creates dist folder)
npm run build
```

### Step 4: Verify build output
```bash
# Check that dist folder was created
ls -la dist/

# Should see index.html and assets folder
```

## CloudPanel Configuration

### Important: Change Site Type to Static

The 500 error is likely because CloudPanel is configured as a **Node.js application** (port 3000), but this is actually a **static site**.

1. In CloudPanel, go to your site settings
2. Change the site type from "Node.js" to **"Static"** or **"PHP"** (PHP mode can serve static files)
3. Set the **Document Root** to point to the `dist` directory:
   - Example: `/home/[username]/sites/[site-name]/htdocs/dist`
4. Save the changes

### Alternative: Keep as Node.js but serve static files

If you must keep it as Node.js, you could create a simple Express server, but this is unnecessary overhead for a static site.

## Complete Buddy.works SSH Command Sequence

Here's a complete command sequence you can use in Buddy.works:

```bash
# Navigate to site directory (adjust path as needed)
cd /home/[your-username]/sites/[your-site-name]/htdocs || exit 1

# Load Node.js environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || {
    # Fallback: try CloudPanel's Node.js path
    export PATH="/opt/cloudpanel/node/22/bin:$PATH"
}

# Verify Node.js is available
node --version || exit 1
npm --version || exit 1

# Install dependencies
npm install || exit 1

# Build the application
npm run build || exit 1

# Verify dist folder exists
if [ ! -d "dist" ]; then
    echo "ERROR: dist folder not created!"
    exit 1
fi

echo "Build completed successfully!"
```

## Troubleshooting

### If npm/node still not found:
1. **Check Node.js installation location:**
   ```bash
   find /opt -name "node" -type f 2>/dev/null
   find /usr -name "node" -type f 2>/dev/null
   find /home -name "node" -type f 2>/dev/null
   ```

2. **Check nvm installation:**
   ```bash
   ls -la ~/.nvm
   cat ~/.bashrc | grep nvm
   ```

3. **Manually set PATH:**
   ```bash
   # Add to your SSH command before npm install
   export PATH="/path/to/node/bin:$PATH"
   ```

### If 500 error persists:
1. Check CloudPanel error logs (usually in `/home/[username]/logs/`)
2. Verify the `dist` folder exists and has correct permissions
3. Ensure CloudPanel Document Root points to `dist` folder
4. Check file permissions: `chmod -R 755 dist`

## Recommended Setup

For a Vite React app, the best approach is:
1. **Build on the server** (using the commands above)
2. **Configure CloudPanel as a Static site** pointing to the `dist` directory
3. **Or use Nginx directly** to serve the `dist` folder

This avoids running Node.js unnecessarily for a static site.

