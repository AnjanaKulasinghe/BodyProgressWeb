# Quick Reference Card

## 🚀 Deploy Commands

### First Time Deploy
```bash
cd /Users/anjanakulasinghe/Documents/Development/KoungaGames/BodyProgressWeb
./deploy.sh
```

### Update Website
```bash
cd /Users/anjanakulasinghe/Documents/Development/KoungaGames/BodyProgressWeb
git add .
git commit -m "Your change description"
git push
```

### Quick Deploy (one command)
```bash
cd /Users/anjanakulasinghe/Documents/Development/KoungaGames/BodyProgressWeb && git add . && git commit -m "Update" && git push
```

## 🧪 Local Testing

```bash
# Python
cd /Users/anjanakulasinghe/Documents/Development/KoungaGames/BodyProgressWeb
python3 -m http.server 8000
# Visit: http://localhost:8000

# Node.js
npx serve
```

## 🎨 Common Edits

### Update Download Links
**File**: `index.html`
**Line**: ~230-270 (Download Section)

### Change Colors
**File**: `styles.css`
**Line**: ~15-30 (:root variables)

### Edit Features
**File**: `index.html`
**Line**: ~100-180 (Features Section)

### Update Content
**File**: `index.html`
- Hero: Lines 50-90
- Features: Lines 100-180
- Download: Lines 230-270
- About: Lines 280-310

## 🌐 Domain Setup

### DNS Record (at your domain registrar)
```
Type:  CNAME
Host:  bodyprogress
Value: YOUR-GITHUB-USERNAME.github.io
TTL:   3600
```

### GitHub Pages Settings
```
Repository → Settings → Pages
Custom Domain: bodyprogress.koungasolutions.co.nz
✓ Enforce HTTPS (after DNS propagates)
```

## 📊 Check Status

### DNS Propagation
```bash
dig bodyprogress.koungasolutions.co.nz
```

### Or visit
https://www.whatsmydns.net

### Check Live Site
- GitHub: `https://YOUR-USERNAME.github.io/bodyprogress-web/`
- Custom: `https://bodyprogress.koungasolutions.co.nz`

## 🔧 Troubleshooting

### Site not updating?
```bash
# Clear cache:
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Check GitHub Pages build:
# Repository → Actions → See build status
```

### DNS not working?
```bash
# Wait 24-48 hours
# Check CNAME file exists in repo
# Verify DNS record at registrar
```

### HTTPS not available?
```bash
# Wait for DNS propagation first
# GitHub needs to provision SSL (few hours)
# Don't enable "Enforce HTTPS" until SSL is ready
```

## 📁 File Structure Quick Reference

```
index.html       → Main page (edit content here)
styles.css       → All styling (colors, layout)
script.js        → Interactivity
404.html         → Error page
favicon.svg      → Site icon
manifest.json    → PWA config
CNAME            → Custom domain
robots.txt       → SEO
sitemap.xml      → SEO
```

## 🎯 When to Update

### Android App Goes Live
1. Edit `index.html` line ~250
2. Change disabled button to active download link
3. Remove beta testing instructions

### Add New Features
1. Edit `index.html` features section
2. Add new feature card (copy existing pattern)
3. Update feature count if mentioned

### Add Screenshots
1. Create `images/` folder
2. Add screenshot files
3. Insert in HTML: `<img src="images/shot.png" alt="Description">`

### Add Analytics
1. Get tracking code (Google Analytics or Plausible)
2. Paste in `index.html` before `</head>`
3. Track download clicks in `script.js`

## 💾 Backup

Keep local backup:
```bash
cd /Users/anjanakulasinghe/Documents/Development/KoungaGames
zip -r BodyProgressWeb-backup-$(date +%Y%m%d).zip BodyProgressWeb
```

## 📱 Test Checklist

Before going live:
- [ ] All links work
- [ ] Mobile responsive
- [ ] Downloads work (iOS, Android beta)
- [ ] Navigation smooth scrolls
- [ ] Images load
- [ ] Favicon shows
- [ ] Custom domain resolves
- [ ] HTTPS enabled
- [ ] 404 page works
- [ ] SEO tags present

## 🎨 Brand Colors (for reference)

```css
Primary:    #FF6B35  /* Coral Orange */
Secondary:  #1B98E0  /* Professional Blue */
Accent:     #FF9F1C  /* Warm Gold */
Success:    #10B981  /* Green */
Background: #000000  /* Black */
Card:       #1C1C1E  /* Dark Gray */
```

## 📞 Support Resources

- **Full Docs**: `README.md`
- **Deploy Guide**: `DEPLOYMENT.md`
- **Getting Started**: `GETTING_STARTED.md`
- **GitHub Docs**: https://docs.github.com/pages
- **Web Fonts**: https://fonts.google.com

---

Keep this card handy for quick reference! 📌
