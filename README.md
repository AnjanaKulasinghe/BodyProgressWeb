# Body Progress - Marketing Website

Modern, responsive marketing website for the Body Progress app - your body transformation tracking companion.

**Live Site**: [bodyprogress.koungasolutions.co.nz](https://bodyprogress.koungasolutions.co.nz)

## Features

- **Modern Design**: Dark-mode first design matching the app's aesthetic
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast & Lightweight**: Pure HTML, CSS, and vanilla JavaScript
- **GitHub Pages Ready**: Static site optimized for deployment
- **SEO Optimized**: Meta tags, semantic HTML, sitemap
- **Smooth Animations**: Subtle interactions that enhance UX

## Project Structure

```
BodyProgressWeb/
├── assets/
│   ├── css/
│   │   └── styles.css       # Main stylesheet
│   ├── js/
│   │   └── script.js        # Interactive behaviors
│   ├── images/
│   │   ├── app-icon.png     # App icon (1024x1024)
│   │   ├── app-icon-512.png # App icon (512x512)
│   │   └── favicon.svg      # Favicon
│   └── screens/
│       ├── 0-4.jpeg         # App screenshots
│       └── Video.mp4        # Demo video
├── index.html              # Main landing page
├── privacy.html            # Privacy policy page
├── 404.html                # Custom 404 error page
├── manifest.json           # PWA manifest
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── CNAME                   # Custom domain config
├── DEPLOYMENT.md           # Detailed deployment guide
└── README.md               # This file
```

## Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. Edit files and refresh to see changes

No build process or dependencies required!

### Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on:
- GitHub Pages deployment
- Custom domain configuration
- DNS setup
- Troubleshooting

Quick deploy:
```bash
./deploy.sh
```

## Customization

### Brand Colors
```css
--brand-primary: #FF6B35   /* Coral orange */
--brand-secondary: #1B98E0 /* Professional blue */
--brand-accent: #FF9F1C    /* Warm gold */
```

### Typography
- Font: Nunito (matches the app)
- Weights: 400, 500, 600, 700, 800

### Key Sections
1. **Hero** - Main call-to-action with app screenshots
2. **Features** - Core functionality showcase
3. **Video Showcase** - Interactive comparison demo
4. **Download** - iOS (Live) and Android (Beta) links
5. **Privacy** - Comprehensive privacy policy

## App Store Links

- **iOS**: [App Store](https://apps.apple.com/nz/app/body-progress/id6751845352)
- **Android**: [Beta Testing](https://play.google.com/apps/testing/com.koungagames.body_progress)

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Nunito)

## License

© 2026 Kounga Games. All rights reserved.

## Contact

For questions or support: bodyProgress@koungasolutions.co.nz

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

## Development

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

## Mobile Testing

The site is fully responsive. Test on different devices:
- Desktop: 1920px and above
- Laptop: 1366px - 1919px
- Tablet: 768px - 1365px
- Mobile: Below 768px

## Pre-launch Checklist

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

## HTTPS & Security

GitHub Pages automatically provides HTTPS. For custom domains:
1. Add your domain in GitHub Pages settings
2. Wait for DNS propagation (can take 24-48 hours)
3. Enable "Enforce HTTPS" in repository settings

## Adding App Screenshots (Optional)

To showcase the app with actual screenshots:

1. Export screenshots from your Flutter app
2. Create an `images/` folder
3. Add images to HTML:
   ```html
   <img src="images/screenshot.png" alt="App Screenshot">
   ```

## Support & Maintenance

- **Update Beta Links**: When Android goes live, update the download section
- **App Updates**: Keep feature descriptions in sync with app updates
- **Content Updates**: All content is in HTML - easy to edit

## Contact

For questions about hosting or deployment:
- Check your domain registrar's DNS documentation
- GitHub Pages docs: https://docs.github.com/pages