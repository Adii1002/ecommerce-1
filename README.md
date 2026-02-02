# Leveling Store - Next.js Project

A fully responsive, component-based e-commerce store website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Component-Based Architecture**: Modular, reusable components for maintainability
- **Modern Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Authentication Modals**: Login and SignUp as popup modals with smooth animations
- **Help Center**: Dedicated Help page with contact form and FAQ
- **Interactive UI**: Smooth transitions, hover effects, and modal animations
- **SEO Optimized**: Metadata configuration for better search engine visibility
- **Performance**: Optimized components with lazy loading support

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── login/page.tsx       # Login page (standalone)
│   ├── signup/page.tsx      # SignUp page (standalone)
│   └── help/page.tsx        # Help & Contact page
├── components/
│   ├── Header.tsx           # Navigation header with sticky behavior
│   ├── NavMenu.tsx          # Navigation menu items
│   ├── SearchBar.tsx        # Search input field
│   ├── CartIcon.tsx         # Shopping cart button
│   ├── AuthModals.tsx       # Login/SignUp modal components
│   ├── Hero.tsx             # Hero section with CTA buttons
│   ├── FeaturedProducts.tsx # Product grid section
│   ├── ProductCard.tsx      # Individual product card component
│   └── Footer.tsx           # Footer with newsletter and social
└── styles/
    └── globals.css          # Global styles, Tailwind CSS, and animations
```

## Components Overview

### Header
- Sticky navigation with top utility bar
- Logo on left, menu centered, search/cart on right
- Help, Sign Up, Log In links with modal triggers
- Responsive hamburger menu for mobile
- Animated modal backdrop with disabled navigation

### AuthModals (New)
- Login modal with email/password form
- SignUp modal with comprehensive registration fields
- Smooth fade-in and slide-up animations
- Click-outside-to-close functionality
- Modal switching without closing

### Hero Section
- Reduced height (320px mobile, 500px tablet, 600px desktop)
- "JUST DO IT" marketing message
- Shop and Watch CTA buttons with inverted hover effects
- Fully responsive

### Featured Products
- Responsive product grid (1 col mobile, 2 col tablet, 3 col desktop)
- Product cards with new tab opening for product details
- Image, name, and "Add to Cart" button all open product page
- Smooth hover animations

### Help Page
- FAQ section with common questions
- Contact form with subject selection
- Alternative contact methods (Phone, Chat, Email)
- Header and Footer integration
- Success message after form submission

### Footer
- Newsletter subscription form
- Social media icons (Facebook, X, Instagram)
- Copyright and legal links
- Fully responsive layout

## Getting Started

### Prerequisites
- Node.js 20.9.0 or higher
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
   ```bash
   cd /path/to/QUICK
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with hot reload (port 3000)
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Styling & Customization

### Tailwind CSS Utilities
- `.btn-primary` - Black background button
- `.btn-secondary` - Border button with hover effect
- `.container` - Responsive container with max-width and padding
- `.section-padding` - Consistent vertical padding for sections
- `.animate-fadeIn` - Fade in animation for modals
- `.animate-slideUp` - Slide up animation for modal content

### Responsive Breakpoints
- Mobile: default (< 640px)
- Tablet: `sm:` (640px), `md:` (768px)
- Desktop: `lg:` (1024px)

## Key Features Implemented

### Authentication System
- Modal-based Login and SignUp on same page
- Smooth animations and transitions
- Dark overlay with click-outside-to-close
- Form validation and state management

### Product Links
- Product image, name, and "Add to Cart" button all open in new tab
- Preserves current page while opening product details
- Security headers for external links

### Navigation
- Sticky header with proper z-index management
- Active modal disables header navigation (opacity-50)
- Dark overlay affects entire page but not header
- Smooth transitions between states

### Page Integration
- Header and Footer on all pages
- Modals available from any page
- Help page with full functionality

## Dependencies

### Production
- `next@^16.1.6` - React framework
- `react@^19.0.0` - UI library
- `react-dom@^19.0.0` - React DOM rendering
- `typescript@^5` - Type safety

### Development
- `tailwindcss@^3.4.1` - Utility-first CSS framework
- `postcss@^8` - CSS transformation
- `autoprefixer@^10.4.16` - Browser vendor prefixes
- `eslint@^9` - Code linting
- `@types/react@^19` - React type definitions
- `@types/react-dom@^19` - React DOM type definitions
- `@types/node@^20` - Node.js type definitions

Total: 375 packages installed (0 vulnerabilities)

## Future Enhancements

### Phase 1 (Foundation)
- [ ] Product detail pages with dynamic routing
- [ ] Shopping cart with local storage
- [ ] Product filtering by category
- [ ] Search functionality implementation

### Phase 2 (Features)
- [ ] User authentication backend integration
- [ ] Wishlist/Favorites functionality
- [ ] User profile pages
- [ ] Order history tracking

### Phase 3 (E-commerce)
- [ ] Payment integration (Stripe/PayPal)
- [ ] Inventory management
- [ ] Email notifications
- [ ] Admin dashboard

### Phase 4 (Enhancement)
- [ ] Reviews and ratings
- [ ] Product recommendations
- [ ] Analytics integration
- [ ] Performance optimization

## Development Notes

- All components use `'use client'` directive for interactivity
- Modal animations use Tailwind CSS keyframe animations
- Product links open in new tab with `target="_blank"` and `rel="noopener noreferrer"`
- Form submissions log to console (ready for backend integration)
- Success states show confirmation messages with auto-reset

## License

MIT License

## Author

Leveling Store - Component-Based E-Commerce Platform
Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
