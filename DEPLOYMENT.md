# Deployment Guide - EyeCare Clinic Website

This guide will help you deploy your eye care clinic website to various platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)
1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Settings**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (Optional)
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_PHONE_NUMBER=+15551234567
   NEXT_PUBLIC_EMAIL=info@yourclinic.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Netlify
1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "New site from Git"

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `.next`
   - Node Version: 18

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

## 🔧 Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate will be automatically provisioned

### Netlify
1. Go to "Domain settings"
2. Add your custom domain
3. Update DNS records
4. SSL certificate will be automatically provisioned

## 📱 Pre-Launch Checklist

### Content Updates
- [ ] Update all contact information (phone, email, address)
- [ ] Replace placeholder images with actual clinic photos
- [ ] Update practitioner information and credentials
- [ ] Customize service descriptions and pricing
- [ ] Add real patient testimonials (with permission)
- [ ] Update FAQ with clinic-specific questions

### Technical Setup
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test all forms and contact methods
- [ ] Verify WhatsApp integration works
- [ ] Test mobile responsiveness
- [ ] Check page loading speeds
- [ ] Verify SEO meta tags

### Legal & Compliance
- [ ] Add privacy policy page
- [ ] Add terms of service page
- [ ] Ensure HIPAA compliance (if applicable)
- [ ] Add accessibility statement
- [ ] Update copyright information

## 🛠️ Advanced Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE_NUMBER=+15551234567
NEXT_PUBLIC_EMAIL=info@eyecareclinic.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+15551234567
NEXT_PUBLIC_ADDRESS=123 Medical Plaza, Suite 200, Healthcare City, HC 12345
```

### Form Handling
For production, you'll want to connect your contact form to a backend service:

1. **Email Service** (Recommended for small clinics)
   - Use services like Formspree, Netlify Forms, or Vercel Forms
   - Update form action in contact page

2. **Database Integration**
   - Connect to a database for storing form submissions
   - Implement proper data validation and sanitization

### Analytics Setup
Add Google Analytics or similar tracking:

1. **Google Analytics 4**
   ```javascript
   // Add to app/layout.tsx
   <script
     async
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
   />
   ```

2. **Google Tag Manager**
   - More advanced tracking and conversion measurement
   - Better for e-commerce and lead generation

## 📈 Performance Optimization

### Image Optimization
- Use WebP format for images
- Implement lazy loading
- Optimize image sizes for different devices
- Use Next.js Image component for automatic optimization

### SEO Optimization
- Submit sitemap to Google Search Console
- Set up Google My Business listing
- Add structured data markup
- Optimize for local search terms

### Security
- Enable HTTPS
- Set up security headers
- Regular security updates
- Implement form validation and sanitization

## 🚨 Troubleshooting

### Common Issues

**Build Errors**
- Check Node.js version (18+ required)
- Clear `.next` folder and reinstall dependencies
- Verify all imports are correct

**Styling Issues**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS
- Verify responsive breakpoints

**Form Issues**
- Test form validation
- Check network requests in browser dev tools
- Verify backend endpoint configuration

### Support Resources
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Vercel Support: [vercel.com/help](https://vercel.com/help)

## 📞 Post-Launch

### Monitoring
- Set up uptime monitoring
- Track page performance
- Monitor form submissions
- Check for broken links

### Maintenance
- Regular content updates
- Security updates
- Performance monitoring
- User feedback collection

### Marketing
- Submit to local directories
- Set up Google My Business
- Share on social media
- Collect patient reviews

---

**Need help?** Check the README.md file for detailed documentation or contact the development team.
