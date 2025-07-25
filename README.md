# 🚀 NVMINH162 Portfolio

<div align="center">
  <img src="public/nvminh162.jpg" alt="NVMINH162" width="150" height="150" style="border-radius: 50%;" />
  
  ### [Link](https://nvminh162.vercel.app/)
  ### Fullstack Developer & Tech Enthusiast
  
  [![Website](https://img.shields.io/badge/Website-nvminh162.vn-blue?style=for-the-badge&logo=google-chrome)](https://nvminh162.vn)
  [![YouTube](https://img.shields.io/badge/YouTube-@nvminh162-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@nvminh162)
  [![TikTok](https://img.shields.io/badge/TikTok-@nvminh162-black?style=for-the-badge&logo=tiktok)](https://www.tiktok.com/@nvminh162)
  [![Facebook](https://img.shields.io/badge/Facebook-nvminh162-blue?style=for-the-badge&logo=facebook)](https://www.facebook.com/nvminh162)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

This is my personal portfolio website showcasing my journey as a fullstack developer. Built with modern technologies, it features a responsive design, smooth animations, and multilingual support (English/Vietnamese).

**Current Position:** Fullstack Developer at Nvidia Corporation (Jan 2025 - Present)

### 🌟 Highlights
- **Responsive Design**: Works seamlessly across all devices
- **Multilingual Support**: Available in English and Vietnamese
- **Smooth Animations**: Powered by Lottie and custom CSS animations
- **Modern UI/UX**: Clean, professional design with interactive elements
- **Performance Optimized**: Built with Vite for lightning-fast performance

---

## ✨ Features

### 🏠 Home Page
- **Hero Section**: Eye-catching introduction with animated elements
- **Introduction**: Personal story and development philosophy
- **Experience Timeline**: Professional journey and achievements
- **Skills Showcase**: Technical expertise with visual representations

### 💼 Projects Page
- **Project Gallery**: Curated selection of best works
- **Tech Stack Display**: Technologies used in each project
- **Live Demos & Source Code**: Direct links to deployments and repositories

### 👤 About Page
- **Detailed Biography**: Personal and professional background
- **Career Journey**: From learning to professional development
- **Interests & Hobbies**: Beyond coding activities

### 🌐 Additional Features
- **Language Toggle**: Seamless switching between English/Vietnamese
- **Dark/Light Theme**: Comfortable viewing experience
- **Smooth Scrolling**: Enhanced navigation experience
- **Loading Animations**: Engaging user interactions
- **SEO Optimized**: Better search engine visibility

---

## 🛠 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **TypeScript 5.8.3** - Type-safe JavaScript with enhanced developer experience
- **Vite 5.4.9** - Next-generation frontend tooling for fast development

### **Styling & UI**
- **Bootstrap 5.3.3** - Responsive CSS framework
- **React Bootstrap 2.10.5** - Bootstrap components for React
- **Sass 1.77.6** - Enhanced CSS with variables and mixins
- **Custom SCSS** - Tailored animations and responsive design

### **Routing & Navigation**
- **React Router DOM 6.27.0** - Declarative routing for React applications

### **Internationalization**
- **i18next 23.16.0** - Internationalization framework
- **react-i18next 15.0.3** - React bindings for i18next
- **i18next-browser-languagedetector 8.0.0** - Language detection
- **i18next-http-backend 2.6.2** - Backend plugin for loading translations

### **Animations & Effects**
- **Lottie React 2.4.0** - Render After Effects animations
- **React Parallax Tilt 1.7.246** - Smooth tilt hover effects
- **React Fast Marquee 1.6.5** - Scrolling text animations
- **Typewriter Effect 2.21.0** - Typing animation effects

### **Icons & Assets**
- **React Icons 5.3.0** - Popular icon libraries as React components

### **Development Tools**
- **ESLint 9.12.0** - Code linting and quality assurance
- **TypeScript ESLint 8.38.0** - TypeScript-specific linting rules
- **Vite TypeScript Paths 5.0.1** - Path mapping support

### **Deployment**
- **Vercel** - Optimized for seamless deployment and hosting

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nvminh162/nvminh162-portfolio.git
   cd nvminh162-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Environment Setup

The application runs on port 3000 by default. You can modify this in `vite.config.ts`:

```typescript
export default defineConfig({
  // ... other config
  server: {
    port: 3000, // Change this to your preferred port
  },
});
```

---

## 📁 Project Structure

```
nvminh162-portfolio/
├── public/                     # Static assets
│   ├── locales/               # Translation files
│   │   ├── en/translation.json # English translations
│   │   └── vi/translation.json # Vietnamese translations
│   ├── nvminh162.jpg          # Profile image
│   └── vite.svg               # Vite logo
├── src/                       # Source code
│   ├── assets/                # Images, icons, and media files
│   │   ├── lottie/           # Lottie animation files
│   │   ├── project/          # Project screenshots
│   │   └── svg/              # SVG icons and graphics
│   ├── components/           # Reusable components
│   │   ├── context/          # React context providers
│   │   ├── layout/           # Layout components (header, footer)
│   │   ├── sections/         # Page sections (hero, about, skills)
│   │   └── share/            # Shared components
│   ├── helpers/              # Utility functions and data
│   ├── pages/                # Main pages (home, project, about)
│   ├── styles/               # Global styles and variables
│   ├── types/                # TypeScript type definitions
│   ├── i18n.ts              # Internationalization setup
│   ├── layout.tsx           # Main layout component
│   └── main.tsx             # Application entry point
├── docs/                     # Documentation and references
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

### Key Directories Explained

- **`src/components/sections/`**: Contains all the main sections of the website (hero, introduction, experience, skills, etc.)
- **`src/helpers/data.ts`**: Centralized data management for experiences, projects, and app configuration
- **`public/locales/`**: Translation files for multilingual support
- **`src/assets/lottie/`**: Animation files for enhanced user experience
- **`src/styles/`**: Global SCSS files for consistent styling

---

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm start` | Alternative command to start development server |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

### Development Workflow

```bash
# Start development
npm run dev

# Make your changes
# ...

# Check for linting issues
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**: Vercel will automatically deploy on every push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# Upload contents to your hosting provider
```

### Environment Variables

If you need environment variables, create a `.env` file:

```env
VITE_APP_NAME=NVMINH162 Portfolio
VITE_API_URL=your_api_url_here
```

---

## 🎨 Customization

### Styling
- **Global styles**: `src/styles/global.scss`
- **Variables**: `src/styles/variable.scss`
- **Animations**: `src/styles/animation.scss`

### Content
- **Personal data**: `src/helpers/data.ts`
- **Translations**: `public/locales/en/translation.json` and `public/locales/vi/translation.json`
- **Images**: Replace files in `src/assets/` and `public/`

### Colors and Themes
Modify the CSS variables in `src/styles/variable.scss` to change the color scheme:

```scss
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --background-color: #your-color;
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow the existing code style
2. Add comments for complex logic
3. Test your changes thoroughly
4. Update documentation if needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio designs and UX patterns
- **Open Source Libraries**: All the amazing libraries that make this project possible
- **Community**: Fellow developers who provided feedback and suggestions

---

<div align="center">

### 💫 Let's Connect!

**Built with ❤️ by NVMINH162**

[🌐 Website](https://nvminh162.vn) • [📺 YouTube](https://www.youtube.com/@nvminh162) • [📱 TikTok](https://www.tiktok.com/@nvminh162) • [📘 Facebook](https://www.facebook.com/nvminh162)

</div>