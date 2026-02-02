# Leveling Store - Project Documentation

## Project Overview

Leveling Store is a fully responsive, component-based e-commerce website built with modern web technologies. This document outlines the complete development journey, architecture decisions, dependencies, and implementation details.

---

## Part 1: Project Initialization

### Step 1: Initial Setup

**Objective**: Create a Next.js project with TypeScript and Tailwind CSS

**Process**:
1. Created workspace at `/Users/mrunal.munjamkar@iqvia.com/Documents/QUICK`
2. Initialized Next.js 16 project with the following configuration:
   - TypeScript enabled for type safety
   - Tailwind CSS for utility-first styling
   - ESLint for code quality
   - App Router (Next.js 13+ directory structure)

**Command**:
```bash
npx create-next-app@latest QUICK --typescript --tailwind --eslint
```

**Output**: 375 npm packages installed with 0 vulnerabilities

---

## Part 2: Core Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | ^16.1.6 | React framework with SSR, SSG, and API routes |
| `react` | ^19.0.0 | UI library for building components |
| `react-dom` | ^19.0.0 | React DOM rendering |
| `typescript` | ^5 | Type-safe JavaScript |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^3.4.1 | Utility-first CSS framework |
| `postcss` | ^8 | CSS transformation and processing |
| `autoprefixer` | ^10.4.16 | Automatic browser vendor prefixes |
| `eslint` | ^9 | Code quality and style checking |
| `@types/react` | ^19 | React type definitions |
| `@types/react-dom` | ^19 | React DOM type definitions |
| `@types/node` | ^20 | Node.js type definitions |

### Installation Command

```bash
npm install
# Total: 375 packages
# Vulnerabilities: 0
```

---

## Part 3: Project Architecture

### Directory Structure

```
QUICK/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout wrapper
│   │   ├── page.tsx                # Homepage
│   │   ├── login/
│   │   │   └── page.tsx            # Login page (standalone)
│   │   ├── signup/
│   │   │   └── page.tsx            # SignUp page (standalone)
│   │   └── help/
│   │       └── page.tsx            # Help/Contact page
│   ├── components/
│   │   ├── Header.tsx              # Main header with navigation
│   │   ├── NavMenu.tsx             # Navigation menu items
│   │   ├── SearchBar.tsx           # Search input component
│   │   ├── CartIcon.tsx            # Shopping cart icon button
│   │   ├── AuthModals.tsx          # Login/SignUp modal component (NEW)
│   │   ├── Hero.tsx                # Hero section with CTA
│   │   ├── FeaturedProducts.tsx    # Product grid showcase
│   │   ├── ProductCard.tsx         # Individual product card
│   │   └── Footer.tsx              # Footer with newsletter
│   └── styles/
│       └── globals.css             # Global styles and animations
├── public/                         # Static assets
├── package.json                    # Dependencies and scripts
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── next.config.ts                 # Next.js configuration
└── README.md                       # Project README
```

### Component Architecture

```
Layout (Root)
└── Header
    ├── NavMenu
    ├── SearchBar
    ├── CartIcon
    └── AuthModals (Login & SignUp)
├── Page Content
│   ├── Hero
│   ├── FeaturedProducts
│   │   └── ProductCard (×6)
│   └── Footer
```

---

## Part 4: Development Steps

### Phase 1: Foundation Setup (Core Components)

#### Step 1.1: Create Header Component
- **File**: `src/components/Header.tsx`
- **Features**:
  - Sticky navigation with z-50
  - Top utility bar (Help, Sign Up, Log In)
  - Three-part layout: Logo (left), Menu (center), Search/Cart (right)
  - Mobile hamburger menu
- **Styling**: Responsive with smooth transitions

#### Step 1.2: Create Navigation Menu
- **File**: `src/components/NavMenu.tsx`
- **Features**:
  - Menu items: New & Featured, Men, Women, Kids, Jordan
  - Flexible gap spacing (gap-6 md:gap-8 lg:gap-10)
  - Cursor-pointer on all links
  - Responsive text sizing

#### Step 1.3: Create Hero Section
- **File**: `src/components/Hero.tsx`
- **Features**:
  - Reduced heights: 320px (mobile) → 500px (tablet) → 600px (desktop)
  - "JUST DO IT" main message
  - Shop and Watch CTA buttons
  - Inverted hover effects (black ↔ white)

#### Step 1.4: Create Product Components
- **Files**: 
  - `src/components/FeaturedProducts.tsx`
  - `src/components/ProductCard.tsx`
- **Features**:
  - Grid layout (1-2-3 columns responsive)
  - Product data with id, name, category, price, color
  - Hover animations and effects
  - Links open in new tab for product details

#### Step 1.5: Create Footer Component
- **File**: `src/components/Footer.tsx`
- **Features**:
  - Newsletter subscription form
  - Social media icons (Facebook, X, Instagram)
  - Copyright and legal links
  - Commented-out links section
  - Fully responsive design

### Phase 2: Authentication System (NEW)

#### Step 2.1: Create AuthModals Component
- **File**: `src/components/AuthModals.tsx`
- **Features**:
  - Dual modals: Login and SignUp
  - Login form: Email + Password
  - SignUp form: First Name, Last Name, Email, Password, Confirm Password, Birth Date
  - Form state management with React hooks
  - Modal animations (fadeIn 0.2s, slideUp 0.3s)
  - Click-outside-to-close functionality
  - Modal switching without full page navigation

**Login Modal**:
```tsx
- Email field
- Password field
- Forgot password link
- Sign In button
- Create Account redirect
```

**SignUp Modal**:
```tsx
- First Name field
- Last Name field
- Email field
- Password field
- Confirm Password field
- Birth Date picker
- Terms agreement text
- Create Account button
```

#### Step 2.2: Update Header Integration
- **File**: `src/components/Header.tsx` (Updated)
- **Changes**:
  - Import AuthModals component
  - Add state management for modals
  - Convert Sign Up/Log In links to buttons
  - Trigger modals on button click
  - Pass handlers for modal control

**Header Modal Integration**:
```tsx
const [isLoginOpen, setIsLoginOpen] = useState(false);
const [isSignUpOpen, setIsSignUpOpen] = useState(false);

// Buttons trigger state changes
<button onClick={() => setIsLoginOpen(true)}>Log In</button>
<button onClick={() => setIsSignUpOpen(true)}>Sign Up</button>
```

### Phase 3: Authentication Pages (Standalone)

#### Step 3.1: Create Login Page
- **File**: `src/app/login/page.tsx`
- **Features**:
  - Full-page login form (backup to modal)
  - Email and password inputs
  - Forgot password link
  - Sign Up redirect
  - Terms & Conditions text

#### Step 3.2: Create SignUp Page
- **File**: `src/app/signup/page.tsx`
- **Features**:
  - Comprehensive registration form
  - All input fields from modal
  - Terms agreement checkbox
  - Login redirect
  - Form validation

### Phase 4: Help & Support

#### Step 4.1: Create Help Page
- **File**: `src/app/help/page.tsx`
- **Features**:
  - Hero section with "How Can We Help?" message
  - FAQ section with 6 common questions
  - Contact form with:
    - Name input
    - Email input
    - Subject dropdown
    - Message textarea
    - Submit button with success message
  - Alternative contact methods (Phone, Chat, Email)
  - Header and Footer integration

### Phase 5: UI Refinements

#### Step 5.1: Responsive Design Adjustments
- Reduced Hero height from full screen to fixed values
- Adjusted navigation spacing (gap reduction)
- Fine-tuned padding and margins across components

#### Step 5.2: Animation Implementation
- **File**: `src/styles/globals.css` (Updated)
- **Animations Added**:
  ```css
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  ```

#### Step 5.3: Modal Behavior
- Click outside modal closes it
- Header remains visible but non-interactive during modal
- Dark overlay (bg-black bg-opacity-50) covers entire page
- z-index: 60 for modals, 50 for header

#### Step 5.4: Product Links
- Product image: Opens in new tab
- Product name: Opens in new tab
- Add to Cart: Opens in new tab
- Security headers: `rel="noopener noreferrer"`

### Phase 6: Branding Update

#### Step 6.1: Replace Nike with Leveling
- Product names (6 products)
- Page titles and descriptions
- Footer copyright and section titles
- Help page content
- Auth pages descriptions
- All user-facing text

---

## Part 5: Key Features Implemented

### 1. Responsive Design
- **Mobile First**: Starts with mobile, adds complexity for larger screens
- **Breakpoints**: sm: 640px, md: 768px, lg: 1024px
- **Flexible Layouts**: Grid and flexbox for automatic adjustment

### 2. Authentication System
- **Modals**: Cleaner UX than separate pages
- **Form Validation**: Email, password, required fields
- **State Management**: React hooks (useState)
- **Animation**: Smooth transitions for opening/closing

### 3. Product Display
- **Grid Layout**: Responsive columns based on screen size
- **Hover Effects**: Image zoom, action buttons slide up
- **Links**: New tab opens for product details
- **Current State**: Page stays open while new tab loads

### 4. Navigation
- **Sticky Header**: Always visible on scroll
- **Modal Integration**: Sign Up/Log In accessible from anywhere
- **Help Link**: Dedicated support page
- **Responsive Menu**: Hamburger on mobile, full menu on desktop

### 5. Performance Optimizations
- **Component Splitting**: Smaller, focused components
- **Lazy Loading Ready**: Structure supports Next.js Image component
- **CSS Optimization**: Tailwind purges unused styles
- **Zero Vulnerabilities**: Clean dependency tree

---

## Part 6: Styling System

### Tailwind CSS Configuration

**File**: `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#111111',
        accent: '#F5F5F5',
      },
    },
  },
};
```

### Custom Utility Classes

**File**: `src/styles/globals.css`

```css
.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.section-padding {
  @apply py-12 sm:py-16 lg:py-20;
}

.btn-primary {
  @apply px-6 py-3 bg-black text-white rounded-full 
         font-medium hover:bg-gray-800 transition duration-300;
}

.btn-secondary {
  @apply px-6 py-3 bg-white text-black rounded-full 
         font-medium border border-black hover:bg-black 
         hover:text-white transition duration-300;
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}
```

### Responsive Design Pattern

```tsx
// Mobile first approach
<div className="
  text-base                          // Mobile
  sm:text-lg                         // Small screens
  md:text-xl                         // Medium screens
  lg:text-2xl                        // Large screens
  py-4 md:py-8 lg:py-12             // Responsive padding
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  // Responsive grid
">
```

---

## Part 7: Development Workflow

### Local Development

1. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Access at: http://localhost:3000

2. **Code Changes**: Automatic hot reload
3. **Build Check**:
   ```bash
   npm run build
   ```

4. **Production Build**:
   ```bash
   npm run build
   npm start
   ```

### File Organization

- **Pages** (`src/app/`): Route-based files
- **Components** (`src/components/`): Reusable UI components
- **Styles** (`src/styles/`): Global styles and animations
- **Public** (`public/`): Static assets

---

## Part 8: Additional Requirements & Future Setup

### Current State ✅

- [x] Next.js 16 setup with TypeScript
- [x] Tailwind CSS styling system
- [x] Responsive design (mobile-first)
- [x] Header with sticky navigation
- [x] Hero section with CTA buttons
- [x] Product grid with 6 sample products
- [x] Footer with newsletter and social links
- [x] Authentication modals (Login/SignUp)
- [x] Help/Contact page
- [x] Form validation and state management
- [x] Animation system
- [x] Branding complete (Leveling)

### Not Yet Implemented ⏳

#### Backend Integration
- **Requirements**:
  - Node.js backend (Express, Fastify, etc.)
  - Database (PostgreSQL, MongoDB, etc.)
  - Authentication API (JWT, OAuth)
  - API endpoints for:
    - User registration
    - User login
    - Contact form submission
    - Product data
    - Orders

#### Authentication
- **Requirements**:
  - Backend API integration
  - JWT token management
  - User session handling
  - Protected routes

#### Product Management
- **Requirements**:
  - Product detail page (`/product/[id]`)
  - Dynamic product data from database
  - Image management
  - Inventory system

#### Shopping Cart
- **Requirements**:
  - Client-side cart state (Redux, Context, Zustand)
  - Local storage persistence
  - Cart management API
  - Cart page UI

#### Payment Integration
- **Requirements**:
  - Stripe or PayPal integration
  - Payment processing API
  - Order confirmation
  - Email notifications

#### Database Schema (Example)

```sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  password_hash VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  birth_date DATE,
  created_at TIMESTAMP
);

-- Products Table
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR,
  category VARCHAR,
  price DECIMAL,
  color VARCHAR,
  image_url VARCHAR,
  description TEXT
);

-- Orders Table
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  products JSONB,
  total_price DECIMAL,
  status VARCHAR,
  created_at TIMESTAMP
);

-- Help Requests Table
CREATE TABLE help_requests (
  id UUID PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  subject VARCHAR,
  message TEXT,
  status VARCHAR,
  created_at TIMESTAMP
);
```

### Recommended Packages for Next Phase

#### Backend
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "jsonwebtoken": "^9.0.0"
}
```

#### Database
```json
{
  "postgres": "^14.0.0",
  "sequelize": "^6.28.0"
}
```

#### API Client
```json
{
  "axios": "^1.4.0"
}
```

#### State Management
```json
{
  "@reduxjs/toolkit": "^1.9.5",
  "react-redux": "^8.1.1"
}
```

#### Payment
```json
{
  "@stripe/react-stripe-js": "^2.0.0",
  "@stripe/stripe-js": "^2.0.0"
}
```

#### Email
```json
{
  "nodemailer": "^6.9.3"
}
```

---

## Part 9: Deployment Checklist

### Pre-Deployment
- [ ] Run `npm run build` - verify no errors
- [ ] Run `npm run lint` - check code quality
- [ ] Test all pages on mobile/tablet/desktop
- [ ] Test modals and form submissions
- [ ] Update environment variables
- [ ] Set up CI/CD pipeline

### Deployment Platforms (Recommended)
- **Vercel** (Optimized for Next.js)
- **Netlify** (Full-stack capability)
- **AWS Amplify**
- **Heroku**

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret_key
STRIPE_PUBLIC_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
```

---

## Part 10: Performance Metrics

### Current Optimization Status
- **Bundle Size**: Optimized with Tailwind CSS purging
- **Assets**: Placeholder images (ready for real images)
- **Code Splitting**: Built-in with Next.js App Router
- **SEO**: Metadata configured in layout.tsx

### Lighthouse Targets (Post-Backend)
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

---

## Part 11: Security Considerations

### Currently Implemented ✅
- `rel="noopener noreferrer"` on external links
- CORS-ready structure
- Type safety with TypeScript
- No hardcoded secrets

### To Implement ⏳
- HTTPS enforcement
- CSRF protection
- Rate limiting
- Input sanitization
- SQL injection prevention
- XSS protection
- Environment variable security
- Secure password hashing (bcrypt)

---

## Part 12: Testing Strategy (Recommended)

### Unit Testing
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Integration Testing
```bash
npm install --save-dev cypress
```

### Example Test File
```typescript
// __tests__/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders navigation menu', () => {
    render(<Header />);
    expect(screen.getByText('New & Featured')).toBeInTheDocument();
  });
});
```

---

## Summary

This Leveling Store project is a **production-ready frontend** with:

✅ **Completed**:
- Modern Next.js 16 setup
- Full responsive design
- Component-based architecture
- Authentication UI (modals)
- Help/Support page
- Professional styling
- Animation system
- Zero vulnerabilities

⏳ **Next Steps**:
1. Backend API development
2. Database setup
3. Authentication logic
4. Payment integration
5. Product management system
6. Order tracking
7. Email notifications

The foundation is solid and ready to scale!
