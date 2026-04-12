# Body Progress - Marketing Website

A modern, responsive marketing website for the Body Progress app - your body transformation tracking companion.

## 🎨 Features

- **Modern Design**: Dark-mode first design matching the app's aesthetic
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
- **Fast & Lightweight**: Pure HTML, CSS, and vanilla JavaScript - no frameworks
- **GitHub Pages Ready**: Static site optimized for easy deployment
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure
- **Smooth Animations**: Subtle animations that enhance user experience

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** (or use existing one):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Body Progress website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bodyprogress-web.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

3. **Your site will be live at**: `https://YOUR_USERNAME.github.io/bodyprogress-web/`

### Option 2: Custom Domain (koungasolutions.co.nz/bodyprogress)

Since you want to host under your existing domain, you have two options:

#### A) Subdomain Approach (Recommended)
Create a subdomain: `bodyprogress.koungasolutions.co.nz`

**DNS Setup:**
```
Type: CNAME
Name: bodyprogress
Value: YOUR_USERNAME.github.io
```

**GitHub Pages Setup:**
1. In your repository settings > Pages
2. Add custom domain: `bodyprogress.koungasolutions.co.nz`
3. Create a file named `CNAME` in your repository with:
   ```
   bodyprogress.koungasolutions.co.nz
   ```

#### B) Subdirectory Approach
Host under: `koungasolutions.co.nz/bodyprogress`

This requires more server setup depending on your hosting provider.

**If using GitHub Pages with subdirectory:**
1. Update all asset paths in index.html to be relative
2. Set up redirects on your main domain server to proxy requests

**If your main site is also on GitHub:**
1. Add this website to a `bodyprogress/` folder in your main repo
2. Link to it from your main navigation

### Option 3: Netlify (Alternative - Super Easy)

1. **Drag & Drop Deployment**:
   - Go to [Netlify](https://netlify.com)
   - Drag the entire folder
   - Get instant live URL

2. **Custom Domain**:
   - Domain settings > Add custom domain
   - Point DNS: `CNAME bodyprogress → YOUR_NETLIFY_URL`

## 📁 Project Structure

```
BodyProgressWeb/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with app's branding
├── script.js           # JavaScript for interactions
├── README.md           # This file
└── CNAME              # (Create this for custom domain)
```

## 🎨 Customization

### Colors
The website uses Body Progress app's exact color scheme:
- Primary: `#FF6B35` (coral-orange)
- Secondary: `#1B98E0` (professional blue)
- Accent: `#FF9F1C` (warm gold)

To modify, edit CSS variables in `styles.css`:
```css
:root {
    --brand-primary: #FF6B35;
    --brand-secondary: #1B98E0;
    --brand-accent: #FF9F1C;
}
```

### Content
All content is in `index.html`. Key sections:
- Hero section (lines ~50-90)
- Features (lines ~93-180)
- Download links (lines ~215-260)
- About section (lines ~265-295)

### Adding Analytics
To track visitors, add your analytics code to `index.html` before `</head>`:

**Google Analytics:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Plausible (Privacy-focused):**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🔧 Development

To test locally:

1. **Simple HTTP Server** (Python 3):
   ```bash
   python3 -m http.server 8000
   ```
   Visit: `http://localhost:8000`

2. **Node.js HTTP Server**:
   ```bash
   npx serve
   ```

3. **VS Code Live Server**:
   - Install "Live Server" extension
   - Right-click `index.html` > "Open with Live Server"

## 📱 Mobile Testing

The site is fully responsive. Test on different devices:
- Desktop: 1920px and above
- Laptop: 1366px - 1919px
- Tablet: 768px - 1365px
- Mobile: Below 768px

## ✅ Pre-launch Checklist

Before going live:
- [ ] Update all links (App Store, Google Play, beta testing)
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Add favicon (create `favicon.ico`)
- [ ] Add Open Graph image for social sharing
- [ ] Set up analytics tracking
- [ ] Test download buttons
- [ ] Verify custom domain DNS settings
- [ ] Enable HTTPS (automatic with GitHub Pages)

## 🔐 HTTPS & Security

GitHub Pages automatically provides HTTPS. For custom domains:
1. Add your domain in GitHub Pages settings
2. Wait for DNS propagation (can take 24-48 hours)
3. Enable "Enforce HTTPS" in repository settings

## 📊 Adding App Screenshots (Optional)

To showcase the app with actual screenshots:

1. Export screenshots from your Flutter app
2. Create an `images/` folder
3. Add images to HTML:
   ```html
   <img src="images/screenshot.png" alt="App Screenshot">
   ```

## 🤝 Support & Maintenance

- **Update Beta Links**: When Android goes live, update the download section
- **App Updates**: Keep feature descriptions in sync with app updates
- **Content Updates**: All content is in HTML - easy to edit

## 📞 Contact

For questions about hosting or deployment:
- Check your domain registrar's DNS documentation
- GitHub Pages docs: https://docs.github.com/pages

---

Built with ❤️ for Body Progress users
