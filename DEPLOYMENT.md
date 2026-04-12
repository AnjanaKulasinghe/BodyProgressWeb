# 🚀 Quick Deployment Guide

## Fastest Way: GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `bodyprogress-web` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README (we already have files)

### Step 2: Deploy to GitHub

**Option A: Using the Deploy Script (Recommended)**
```bash
cd /Users/anjanakulasinghe/Documents/Development/KoungaGames/BodyProgressWeb
chmod +x deploy.sh
./deploy.sh
```

**Option B: Manual Git Commands**
```bash
cd /Users/anjanakulasinghe/Documents/Development/KoungaGames/BodyProgressWeb

# Initialize and commit
git init
git add .
git commit -m "Initial commit: Body Progress website"
git branch -M main

# Add your GitHub repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/bodyprogress-web.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

🎉 Your site will be live at: `https://YOUR_USERNAME.github.io/bodyprogress-web/`

## Setting Up Custom Domain

### Recommended: Subdomain Approach
Use: `bodyprogress.koungasolutions.co.nz`

#### DNS Configuration (at your domain registrar)

Add this CNAME record:
```
Type:  CNAME
Host:  bodyprogress
Value: YOUR_USERNAME.github.io
TTL:   3600 (or Auto)
```

#### GitHub Pages Configuration

1. In GitHub repository settings > Pages
2. Under "Custom domain", enter: `bodyprogress.koungasolutions.co.nz`
3. Click **Save**
4. Wait 24-48 hours for DNS propagation
5. Once propagated, check "Enforce HTTPS"

The CNAME file is already set up with this domain!

### Alternative: Different Subdomain Options

If you prefer a different URL structure, here are options:

**Option 1:** `app.koungasolutions.co.nz`
- Update CNAME file: `app.koungasolutions.co.nz`
- DNS: `CNAME app → YOUR_USERNAME.github.io`

**Option 2:** `progress.koungasolutions.co.nz`
- Update CNAME file: `progress.koungasolutions.co.nz`
- DNS: `CNAME progress → YOUR_USERNAME.github.io`

**Option 3:** `fitness.koungasolutions.co.nz`
- Update CNAME file: `fitness.koungasolutions.co.nz`
- DNS: `CNAME fitness → YOUR_USERNAME.github.io`

### Path-based URL (Advanced)

If you want `koungasolutions.co.nz/bodyprogress`:

⚠️ **Note**: GitHub Pages doesn't support this natively. You would need to:

1. Host your main website (koungasolutions.co.nz) somewhere
2. Configure server redirects/proxies
3. Or: Move this to your existing hosting alongside your main site

**Recommendation**: Use a subdomain instead - it's cleaner and easier!

## Testing Before DNS Propagates

While waiting for DNS:
1. Your site is already live at: `YOUR_USERNAME.github.io/bodyprogress-web/`
2. Test everything works
3. Once DNS propagates, it'll work on your custom domain too

## Common Issues & Solutions

### "Site not loading on custom domain"
- Wait 24-48 hours for DNS propagation
- Check DNS with: `dig bodyprogress.koungasolutions.co.nz`
- Verify CNAME file is in your repo
- Clear browser cache

### "HTTPS not available"
- DNS must be fully propagated first
- GitHub needs to provision SSL certificate (can take a few hours)
- Don't enable "Enforce HTTPS" until the certificate is ready

### "404 Error"
- Make sure GitHub Pages is enabled
- Verify branch is set to `main`
- Check that index.html is in the root directory

### "Changes not showing up"
- GitHub Pages can take 1-5 minutes to update
- Clear browser cache
- Try incognito/private browsing

## Updating the Website

When you make changes:

```bash
# Make your edits to HTML/CSS/JS files

# Commit and push
git add .
git commit -m "Description of changes"
git push

# Site will update automatically in 1-5 minutes!
```

Or use the deploy script:
```bash
./deploy.sh
```

## DNS Setup Examples

### Popular Domain Registrars

**Namecheap:**
- Host Records > Add New Record
- Type: CNAME Record
- Host: bodyprogress
- Value: YOUR_USERNAME.github.io
- TTL: Automatic

**GoDaddy:**
- DNS Management
- Add > CNAME
- Name: bodyprogress
- Value: YOUR_USERNAME.github.io
- TTL: 1 hour

**Cloudflare:**
- DNS > Add record
- Type: CNAME
- Name: bodyprogress
- Target: YOUR_USERNAME.github.io
- Proxy: Off (or On for Cloudflare features)

**Google Domains:**
- DNS > Custom records
- Create new record
- Name: bodyprogress
- Type: CNAME
- TTL: 1H
- Data: YOUR_USERNAME.github.io

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Propagation Checker](https://www.whatsmydns.net/)

---

✨ **Pro Tip**: Once set up, you can edit files directly on GitHub's web interface for quick updates!
