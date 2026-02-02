# GitHub Copilot Instructions

## Project Setup
This is a Next.js project with TypeScript and Tailwind CSS for building a responsive Nike store website.

## Development Guidelines

- **Component Structure**: Keep components small and focused on a single responsibility
- **TypeScript**: Always use proper type definitions for props and state
- **Responsive Design**: Use Tailwind's responsive prefixes (sm:, md:, lg:) for mobile-first design
- **Client Components**: Mark components with 'use client' if they use React hooks or interactivity
- **Styling**: Use Tailwind CSS classes for styling, avoid inline styles

## File Structure
- Components go in `src/components/`
- Pages go in `src/app/`
- Styles go in `src/styles/`

## Available Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Build and Run Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Development**:
   ```bash
   npm run dev
   ```
   Navigate to http://localhost:3000

3. **Production Build**:
   ```bash
   npm run build
   npm start
   ```
