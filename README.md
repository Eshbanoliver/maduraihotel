# Hotel Madurai — Modern Luxury Web Application

A high-performance, responsive single-page web application (SPA) built for a boutique hospitality property. Engineered with modern frontend best practices, React 19, TypeScript, Tailwind CSS, and Vite.

---

## 🛠️ Tech Stack & Architecture

### Core Technologies
- **UI Library:** [React 19](https://react.dev/) — Component-driven declarative UI with latest React 19 features
- **Type System:** [TypeScript 5](https://www.typescriptlang.org/) — End-to-end static typing with `verbatimModuleSyntax`
- **Build Tool & Bundler:** [Vite 6](https://vite.dev/) — Native ESM-powered development server with optimized Rollup production builds
- **Routing:** [React Router v7](https://reactrouter.com/) — Declarative client-side routing with automatic scroll restoration
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) — Utility-first styling with custom theme extensions, gradients, and micro-interactions
- **Icons:** [Lucide React](https://lucide.dev/) — Tree-shakeable, lightweight SVG icon system
- **Linting & Code Quality:** [Oxlint](https://oxc.rs/) — High-performance Rust-based JavaScript/TypeScript linter
- **CSS Processing:** [PostCSS](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer) — Automated cross-browser vendor prefixing

---

## 📐 Project Architecture

```
madurai/
├── public/                 # Static assets
│   ├── images/             # Optimized web photographs and branding assets
│   ├── favicon.svg         # Vector favicon
│   ├── robots.txt          # Search engine crawler directives
│   ├── sitemap.xml         # XML sitemap for SEO discovery
│   └── site.webmanifest    # Progressive web app manifest
├── src/
│   ├── assets/             # Bundled application assets
│   ├── components/         # Reusable UI components
│   │   ├── BookingBar.tsx      # Interactive direct reservation bar with date validation
│   │   ├── Footer.tsx          # Multi-column semantic footer with verified links
│   │   ├── LightboxModal.tsx   # Accessible photo viewer with swipe & keyboard navigation
│   │   ├── Navbar.tsx          # Responsive sticky navigation bar with dropdown menus
│   │   ├── RoomCard.tsx        # Dynamic room showcase card with live photo switcher
│   │   └── WhatsAppButton.tsx  # Floating action button & mobile bottom quick-bar
│   ├── data/
│   │   └── hotelData.ts        # Centralized data model, room specifications, and metadata
│   ├── pages/              # Route view components
│   │   ├── AboutPage.tsx           # Property heritage and hospitality narrative
│   │   ├── ContactPage.tsx         # Interactive contact form & location coordinates
│   │   ├── FacilitiesPage.tsx      # Filterable amenities & services catalog
│   │   ├── GalleryPage.tsx         # Categorized photo & motion media portfolio
│   │   ├── HomePage.tsx            # Landing page with hero slider, highlights & FAQ
│   │   ├── LocationPage.tsx        # Transit proximity, directions, and nearby landmarks
│   │   ├── RestaurantMenuPage.tsx  # Culinary offerings & family thali showcase
│   │   ├── RestaurantPage.tsx      # Dining overview & breakfast room feature
│   │   ├── RoomsPage.tsx           # Accommodations portfolio with gallery switcher
│   │   ├── TestimonialsPage.tsx    # Curated guest reviews and feedback
│   │   └── UndergroundBarPage.tsx  # Subterranean lounge experience page
│   ├── App.css             # Component-level utility styles
│   ├── App.tsx             # Main routing setup and layout wrapper
│   ├── index.css           # Global Tailwind directives, fonts, and custom animations
│   └── main.tsx            # Application entrypoint & DOM mounting
├── index.html              # HTML5 template with SEO OpenGraph & Schema.org JSON-LD
├── package.json            # Project manifest, dependencies, and execution scripts
├── tailwind.config.js      # Tailwind design system configuration
├── tsconfig.json           # Base TypeScript compiler configuration
└── vite.config.ts          # Vite build and plugin configuration
```



## ⚡ Key Technical Features

### 1. Responsive Navbar with Dynamic Viewport Constraints
- Eliminates horizontal overflow and button truncation on intermediate desktop viewports (1200px – 1440px / 125% DPI displays).
- Implements grouped dropdown architecture for sub-pages (`Dining & Bar`), preserving navigational hierarchy.
- Features animated mobile drawer with glassmorphism backdrop (`backdrop-blur-xl`), keyboard accessibility, and touch feedback.

### 2. Interactive Hero Carousel
- State-managed 4-slide carousel with auto-advancement timer (5.5s interval) and pause-on-hover mechanics.
- Smooth cross-fade image transitions with subtle Ken Burns zoom effect (`@keyframes kenburns`).
- Category indicators, manual navigation arrows, and accessible slide indicators.
- Calibrated 10% dark overlay (`bg-black/10`) coupled with frosted glass typography panels for optimal contrast and readability.

### 3. Direct Reservation Engine (`BookingBar.tsx`)
- Form state management with automatic check-in/check-out date synchronization (`checkOut >= checkIn + 1 day`).
- Granular guest and room category selection.
- Seamless deep-linking integration with direct reservation engine.

### 4. Interactive Room Showcases & Photo Switchers
- In-place active image state management allowing instant photo switching without layout shifts.
- Dynamic feature tags with color-coded category badges.
- Expandable amenity accordions with smooth enter/exit animations.

### 5. Fullscreen Lightbox Modal (`LightboxModal.tsx`)
- Keyboard navigation support (`ArrowLeft`, `ArrowRight`, `Escape`).
- Touch swipe gesture detection for mobile devices.
- Dynamic thumbnail filmstrip with automatic active element scroll centering.
- Category pills with computed item counters.

### 6. SEO & Performance Optimizations
- **Structured Data:** Embedded Schema.org `Hotel` JSON-LD metadata for rich search engine snippets.
- **Social Graph:** Comprehensive OpenGraph (`og:*`) and Twitter Card tags.
- **Asset Optimization:** Native browser lazy-loading (`loading="lazy"`), modern font pre-loading, and gzip-compressed production bundles.
- **Client-Side Routing Fallback:** `.htaccess` Apache rewrite rules directing all subroutes to `index.html` for clean URLs without server errors.

---

## 🚦 Getting Started

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/Eshbanoliver/maduraihotel.git

# Navigate to project directory
cd maduraihotel

# Install dependencies
npm install
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Launches Vite local development server with Hot Module Replacement (HMR) |
| `build` | `npm run build` | Runs TypeScript compilation (`tsc -b`) and generates production bundle in `dist/` |
| `preview` | `npm run preview` | Starts local HTTP server to preview production build |
| `typecheck` | `npm run typecheck` | Validates TypeScript types across the codebase without emitting output |
| `lint` | `npm run lint` | Runs Oxlint linter for rapid code quality and syntax verification |

---

## 🎨 Design System

| Token | Hex / Value | Description |
|---|---|---|
| **Gold Primary** | `#C5A059` | Primary accent for badges, borders, and brand accents |
| **Gold Bright** | `#E5C158` | Interactive hover highlights and active states |
| **Ivory Background** | `#FAF8F5` | Warm, high-end base background for editorial pages |
| **Dark Luxury** | `#141414` / `#181818` | Deep obsidian surfaces for hero sections and contrast panels |
| **Heading Font** | `Playfair Display`, serif | Editorial royal typography for headers |
| **Body Font** | `Source Sans 3`, sans-serif | High legibility humanist sans-serif for content and UI |

---

## 📄 License
This project is proprietary and confidential. All rights reserved.
