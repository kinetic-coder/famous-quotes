# Quick Setup Guide

## 🚀 Get Started in 5 Minutes

### 1. Supabase Setup (2 minutes)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com) and create account
   - Click "New Project"
   - Choose organization, name your project
   - Set a database password
   - Wait for setup to complete

2. **Run Database Schema**
   - In your Supabase dashboard, go to "SQL Editor"
   - Copy and paste the entire contents of `supabase-schema.sql`
   - Click "Run"

3. **Get Your Keys**
   - Go to Settings → API
   - Copy the Project URL and anon public key

### 2. Environment Setup (1 minute)

```bash
# Copy the environment template
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials
# Replace the placeholder values with your actual Supabase URL and keys
```

### 3. Enable Authentication (1 minute)

In your Supabase dashboard:
- Go to Authentication → Settings
- Enable Email provider
- Set Site URL to `http://localhost:3000`
- (Optional) Enable Google/GitHub OAuth

### 4. Run the App (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📱 Mobile Usage

- The app is optimized for mobile devices
- Add to home screen for app-like experience
- Works offline for viewing existing quotes
- Fast quote entry with large touch targets

## 🔒 Security Features

- Row Level Security (RLS) enabled
- Each user can only see their own quotes
- Secure authentication with Supabase
- HTTPS enforced in production

## 🎯 Ready to Deploy?

The app is ready to deploy to:
- **Vercel** (recommended) - Just connect your GitHub repo
- **Netlify** - Import from Git
- **Railway** - Deploy with one click
- Any Node.js hosting platform

Don't forget to:
1. Set environment variables in your hosting platform
2. Update the Site URL in Supabase settings to your domain
3. Enable any OAuth providers you want to use

## 🆘 Need Help?

Check the full README.md for detailed instructions and troubleshooting.