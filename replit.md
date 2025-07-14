# Stargate Healing - Tachyon Chamber Experience

## Overview

This is a modern web application for "Stargate Healing," a spiritual/healing service focused on Tachyon Chamber experiences. The application serves as a marketing and information website with a cosmic/mystical theme, featuring sections for appointments, testimonials, and information about quantum healing technology.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom cosmic/mystical color scheme
- **UI Components**: Radix UI components with shadcn/ui design system
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: Hot reloading with Vite integration

## Key Components

### Frontend Structure
- **Components**: Modular React components in `/client/src/components/`
- **Pages**: Route-based pages in `/client/src/pages/`
- **UI Library**: Complete shadcn/ui component library in `/client/src/components/ui/`
- **Styling**: Custom CSS with cosmic theme variables and Tailwind utilities

### Backend Structure
- **Server**: Express.js application with middleware setup
- **Routes**: API routes defined in `/server/routes.ts`
- **Storage**: Abstracted storage interface with in-memory implementation
- **Database**: Drizzle ORM with PostgreSQL schema

### Shared Code
- **Schema**: Database schema and TypeScript types in `/shared/schema.ts`
- **Validation**: Zod schemas for data validation

## Data Flow

1. **Client Requests**: React frontend makes API calls using React Query
2. **Server Processing**: Express.js handles API requests with proper error handling
3. **Data Storage**: Storage interface abstracts database operations
4. **Database**: PostgreSQL with Drizzle ORM for data persistence
5. **Response**: JSON responses sent back to client with proper error handling

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI primitives
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Data Fetching**: React Query for server state management
- **Routing**: Wouter for lightweight routing
- **Forms**: React Hook Form with Zod resolvers
- **Utilities**: date-fns, clsx, lucide-react icons

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Build**: esbuild for production builds, tsx for development

### Development Dependencies
- **Build Tools**: Vite, TypeScript, PostCSS
- **Code Quality**: ESLint configuration (implied by shadcn/ui setup)
- **Environment**: Replit-specific plugins and error overlay

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reloading**: Vite provides instant feedback for frontend changes
- **Database**: Connected to Neon Database via DATABASE_URL environment variable

### Production Build
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: esbuild bundles server code to `/dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- **Database**: Requires DATABASE_URL environment variable
- **Build**: Supports both development and production modes
- **Deployment**: Configured for Replit deployment with specific plugins

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Radix UI components ensure accessibility compliance
- **Performance**: Optimized builds with code splitting and lazy loading
- **Type Safety**: Full TypeScript coverage across frontend and backend
- **Error Handling**: Comprehensive error boundaries and API error handling

## Recent Changes
- **Tachyon Info Page**: Created comprehensive information page with detailed content about tachyon healing
- **Navigation**: Added routing for `/tachyon-info` page with proper navigation
- **Hero Section**: Linked "Learn More" button to new Tachyon Info page
- **Calendly Integration**: Embedded booking link in "Book Your Session" button
- **Parallax Background**: Implemented fixed background parallax effect using crystals image with galactic crystalline 5D styling
- **Content Styling**: Updated all content sections with translucent backgrounds that work with the fixed parallax background

The application is designed to be easily extensible, with clear separation of concerns and modern development practices. The cosmic/mystical theme is consistently applied throughout the UI with custom color schemes and typography choices.