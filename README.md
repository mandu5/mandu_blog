# Mandu5 Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with dark/light theme support
- **Internationalization**: Korean and English language support
- **Performance Optimized**: Image optimization, code splitting, and lazy loading
- **SEO Friendly**: Meta tags, Open Graph, and structured data
- **Clean Architecture**: Well-organized folder structure following clean code principles

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── links/             # Links pages
│   ├── profile/           # Profile pages
│   ├── projects/          # Projects pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Blog/             # Blog-related components
│   ├── Links/            # Links-related components
│   ├── Projects/         # Project-related components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI components (Button, ToggleButtons)
├── config/               # Configuration files
│   └── site.ts           # Site configuration
├── constants/            # Data constants
│   └── index.ts          # All data constants
├── contexts/             # React contexts
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── lib/                  # Utility functions
│   └── utils.ts          # Common utility functions
└── types/                # TypeScript type definitions
    └── index.ts          # All type definitions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: SVG icons
- **Fonts**: Google Fonts (Work Sans)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mandu5/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 📝 Code Style

This project follows clean code principles and enterprise-level coding standards:

### Naming Conventions

- **Components**: PascalCase (e.g., `ProfileCard`)
- **Files**: PascalCase for components, camelCase for utilities
- **Constants**: UPPER_SNAKE_CASE (e.g., `PROJECTS_DATA`)
- **Types**: PascalCase with descriptive names (e.g., `ProfileItem`)

### File Organization

- **Single Responsibility**: Each file has one clear purpose
- **Separation of Concerns**: UI, logic, and data are separated
- **Modularity**: Components are small and reusable
- **Type Safety**: Full TypeScript coverage

### Best Practices

- **DRY Principle**: No code duplication
- **SOLID Principles**: Single responsibility, open/closed, etc.
- **Error Handling**: Proper error boundaries and validation
- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🌐 Internationalization

The project supports multiple languages through a context-based i18n system:

- Korean (ko)
- English (en)

Language switching is handled through the `LanguageContext` and persisted in localStorage.

## 🎨 Theming

Dark and light themes are supported through CSS custom properties and Tailwind CSS:

- Automatic theme detection based on system preferences
- Manual theme toggle
- Smooth transitions between themes

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimized through code splitting and tree shaking
- **Image Optimization**: Next.js Image component with proper sizing

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Site Configuration

Edit `src/config/site.ts` to customize:

- Site metadata
- Navigation links
- Contact information
- Social media links

## 📦 Data Management

All static data is centralized in `src/constants/index.ts`:

- **Profile Data**: Contact information, social links
- **Project Data**: Portfolio projects with metadata
- **Education Data**: Academic background
- **Experience Data**: Work history
- **Blog Posts**: Blog content metadata

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Youngmin** - [GitHub](https://github.com/mandu5) - [LinkedIn](https://www.linkedin.com/in/mandu5)

---

Built with ❤️ using Next.js and TypeScript
