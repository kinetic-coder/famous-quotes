# Quotes Collection App

A Next.js application for collecting and organizing memorable quotes from friends and colleagues. Features user authentication, mobile-friendly interface, and secure data storage.

## Features

- 🔐 **Secure Authentication** - Login with email/password, Google, or GitHub
- 📱 **Mobile Optimized** - Quick quote entry designed for phone use
- 👥 **Author Tracking** - Associate quotes with friends and colleagues
- 🔒 **Private & Secure** - Your quotes are only visible to you
- ✨ **Modern UI** - Clean, responsive design with Tailwind CSS
- 🚀 **Real-time Updates** - Instant quote addition and deletion

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Forms**: React Hook Form with Zod validation
- **UI**: Lucide React icons, responsive design

## Prerequisites

1. Node.js 18+ installed
2. A Supabase account and project

## Setup Instructions

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd quotes-app
npm install
```

### 2. Supabase Setup

1. **Create a Supabase Project**:
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the database to be ready

2. **Set up the Database Schema**:
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Copy and paste the contents of `supabase-schema.sql`
   - Run the query to create tables and policies

3. **Configure Authentication**:
   - Go to Authentication > Settings
   - Enable Email authentication
   - (Optional) Enable Google and GitHub OAuth providers
   - Set Site URL to `http://localhost:3000` for development

### 3. Environment Variables

1. Copy the environment template:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

   You can find these values in your Supabase project dashboard under Settings > API.

### 4. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Adding Quotes

1. Sign up or log in to your account
2. Tap the blue "+" button (fixed bottom-right)
3. Enter the quote and author name
4. Click "Add Quote"

### Managing Quotes

- **View**: All your quotes are displayed on the dashboard
- **Delete**: Click the trash icon on any quote card
- **Search**: Quotes are ordered by newest first

### Mobile Usage

The app is optimized for mobile use:
- Large touch targets for easy interaction
- Responsive form inputs
- Quick quote entry workflow
- Clean, readable typography

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── auth/              # Authentication routes
│   ├── dashboard/         # Main dashboard page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home/login page
├── components/            # React components
│   ├── AddQuoteForm.tsx   # Quote creation form
│   ├── LoginForm.tsx      # Authentication form
│   └── QuoteCard.tsx      # Individual quote display
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication state
├── lib/                   # Utilities
│   └── supabase.ts        # Supabase client config
└── types/                 # TypeScript definitions
    └── database.ts        # Database type definitions
```

## Database Schema

### Tables

- **profiles**: User profile information
- **quotes**: Quote content, author, and metadata

### Security

- Row Level Security (RLS) enabled
- Users can only access their own data
- Automatic profile creation on user signup

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Set environment variables in Vercel dashboard
4. Update Supabase Site URL to your Vercel domain

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

Make sure to:
1. Set the correct environment variables
2. Update the Site URL in Supabase settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify your Supabase configuration
3. Ensure environment variables are set correctly
4. Check that the database schema is properly created

## Roadmap

Future enhancements could include:
- Quote categories/tags
- Search and filtering
- Quote sharing
- Export functionality
- Bulk import
- Quote of the day notifications
