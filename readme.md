# Optimum Fly - Visa & Immigration Services

A professional multilingual (French/English) website for Optimum Fly, a Cameroon-based visa and immigration assistance service. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multilingual Support**: Full French and English translations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized assets and efficient rendering

## 📋 Pages

1. **Home** (`/`)
   - Hero section with clear value proposition
   - Trust elements and service highlights
   - Process overview
   - Target audience segments

2. **Services** (`/services`)
   - Detailed service descriptions
   - What we do / What we don't do sections
   - Cameroonian passport assistance
   - Visitor/tourism visas
   - Study visas
   - Skilled worker programs
   - Translation and legalization

3. **Countries & Programs** (`/countries`)
   - Canada programs (Study, Visitor, Skilled Worker)
   - France/Europe programs
   - Detailed eligibility criteria
   - Official links to government resources

4. **How It Works** (`/how-it-works`)
   - 6-step process explanation
   - Visual timeline
   - Feature highlights for each step

5. **Resources** (`/resources`)
   - Practical guides
   - Frequently Asked Questions (FAQ)
   - Official links to government sites
   - Important disclaimers

6. **About Us** (`/about`)
   - Company mission and values
   - Team members
   - Commitments and guarantees
   - Legal notices

7. **Contact** (`/contact`)
   - Embedded Google Form
   - Contact information
   - Office hours
   - WhatsApp integration

## 🛠️ Technologies

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **React Router DOM 7.x** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AngeArsene/optimumfly.git

# Navigate to project directory
cd optimum-fly

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer with links
├── pages/
│   ├── Home.tsx           # Homepage
│   ├── Services.tsx       # Services page
│   ├── Countries.tsx      # Countries & programs
│   ├── HowItWorks.tsx     # Process explanation
│   ├── Resources.tsx      # Guides & FAQ
│   ├── About.tsx          # About us
│   └── Contact.tsx        # Contact form
├── context/
│   └── LanguageContext.tsx # i18n context
├── translations/
│   └── translations.ts     # FR/EN translations
├── App.tsx                 # Main app component
└── main.tsx               # Entry point
```

## 🌐 Internationalization

The app uses a custom React Context for language management:

```typescript
const { language, setLanguage, t } = useLanguage();

// Usage
t('hero.title') // Returns translated text
setLanguage('en') // Switch language
```

## 🎨 Design System

### Colors

- **Primary**: Blue palette (#0052CC - #001433)
- **Secondary**: Green palette (#008C3C - #00692D)
- **Accent**: Orange/Yellow (#FFAF00 - #CC8C00)
- **Neutrals**: Gray scale

### Typography

- **Font**: System UI fonts (native to each platform)
- **Sizes**: Responsive scale from text-sm to text-6xl

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔒 Legal & Compliance

The website includes important disclaimers:

- Not a government immigration service
- No guarantee of visa approval
- Decisions belong to government authorities
- Administrative support service only

## 📞 Contact Information

- **Phone**: +237 699 512 438
- **Email**: nkenmandenga@gmail.com
- **Location**: Douala, Cameroon (Nyalla, école entrance)
- **Hours**: 
  - Mon-Fri: 8:00 - 17:00
  - Sat: 9:00 - 13:00
  - Sun: Closed

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Optimum Fly Cameroon Visa & Travel Care.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Pexels](https://pexels.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

**© 2025 Ange Arsene's Web Solutions. All rights reserved.**