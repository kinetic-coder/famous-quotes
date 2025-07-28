# Vercel Deployment Guide

## Quick Deploy to Vercel

1. **Connect to Vercel**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com) and import your repository
   - Vercel will automatically detect this as a Next.js project

2. **Environment Variables**:
   In your Vercel dashboard, add these environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

3. **Deploy**:
   - Click "Deploy" - Vercel will automatically build and deploy your app
   - The build should now complete successfully

## Troubleshooting

### If Build Fails
- Ensure all environment variables are set in Vercel dashboard
- Check the build logs for specific error messages
- The app includes fallback values for missing environment variables during build

### Common Issues Fixed
- ✅ Missing `tailwind.config.js` - now included
- ✅ Environment variable handling in middleware - now graceful
- ✅ PostCSS configuration - updated for Tailwind CSS 4
- ✅ Next.js configuration - optimized for Vercel
- ✅ Node.js version specified - 18+

## Build Settings (Auto-detected)
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node.js Version: 18+

## After Deployment
1. Update your Supabase project settings:
   - Go to Authentication > Settings
   - Add your Vercel domain to "Site URL"
   - Add your Vercel domain to "Redirect URLs"

Your quotes app should now be live and working on Vercel! 🎉