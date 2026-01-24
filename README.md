# The Downtown

A modern, responsive news and blog platform built with Next.js, featuring a multi-column layout optimized for content discovery and reading experience.

## Features

- **Multi-column Layout**: Responsive three-column design with left sidebar, main content area, and right column
- **Internationalization**: Built-in support for multiple languages (English, Bengali) using `next-intl`
- **Modern UI Components**: Reusable component library with Tailwind CSS styling
- **Article Sections**: 
  - Latest news section
  - Opinion articles
  - Featured blog posts
  - Topic-based content organization
- **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes
- **Image Optimization**: Integrated with Cloudinary for optimized image delivery
- **Type Safety**: Full TypeScript support throughout the application

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **UI Components**: 
  - Lucide React (icons)
  - Swiper (sliders)
  - Sonner (notifications)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd the-downtown
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── _Home/             # Home page components
│   ├── [locale]/          # Internationalized routes
│   └── layout.tsx         # Root layout
├── components/             # Reusable React components
│   ├── common/            # Common components
│   ├── Navbar/            # Navigation components
│   ├── siteSettings/      # Site-wide settings (footer, navbar)
│   ├── ui/                # UI component library
│   └── wrappers/          # Layout wrappers
├── data/                  # Static data and mock content
├── i18n/                  # Internationalization configuration
│   └── locale/            # Translation files
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Image Hosting

The project is configured to use Cloudinary for image optimization. Update `next.config.ts` to modify image remote patterns if needed.

### Internationalization

Translation files are located in `src/i18n/locale/`. Add new languages by creating corresponding locale directories and translation files.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)

## License

This project is private and proprietary.


## Live Link
[https://the-downtown.vercel.app/](https://the-downtown.vercel.app/)