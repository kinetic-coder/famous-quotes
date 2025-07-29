# TechCorp Professional Website

A modern, professional business website built with Next.js 15, TypeScript, and Tailwind CSS. This website features a responsive design, smooth animations, and is optimized for deployment on Vercel.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works perfectly on all devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **TypeScript**: Fully typed for better development experience and code reliability
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Smooth Scrolling**: Enhanced user experience with smooth page navigation
- **Professional Sections**:
  - Hero section with call-to-action
  - Services showcase
  - About section with statistics
  - Contact form and information
  - Footer with company details

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository or download the project files
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧰 Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Build and start the application for preview

## 🚀 Deployment on Vercel

This website is optimized for deployment on Vercel. Follow these steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy with one click!

### Manual Deployment

If you prefer to deploy manually:

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage component
public/                      # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment configuration
└── package.json            # Project dependencies and scripts
```

## 🎨 Customization

### Updating Content

1. **Company Information**: Edit the company name, description, and contact details in `src/app/page.tsx`
2. **Services**: Modify the services section to match your business offerings
3. **Colors**: Update the color scheme in `src/app/page.tsx` by changing Tailwind color classes
4. **Images**: Add your own images to the `public/` directory and update image references

### Styling

The project uses Tailwind CSS for styling. Key areas to customize:

- **Colors**: Primary colors use `blue-600`, `purple-600`, and `green-600`
- **Fonts**: Currently using Inter font family with fallbacks
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Animations**: Hover effects and transitions are defined in global CSS

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@yourdomain.com
```

### SEO Configuration

Update meta tags in `src/app/layout.tsx` to match your business:

- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For support or questions about this project:

- Email: contact@techcorp.com
- Website: [https://yourdomain.com](https://yourdomain.com)

---

Built with ❤️ using Next.js and deployed on Vercel.
