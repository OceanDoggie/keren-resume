# Overview

This is a personal portfolio website for Keren Zhang, a data science student and researcher at Georgia Gwinnett College. The website showcases her educational background, research experience, and projects in a clean, professional format. Built as a full-stack application, it serves as both a digital resume and a platform to highlight her work in data science, qualitative research, and product development.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, About, Education, Research, Projects, Contact, and Resume
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with a custom design system based on professional portfolio aesthetics
- **State Management**: TanStack Query for server state management
- **Design System**: Custom color palette with deep blue primary (#2b2e77) and warm coral accent (#f29a76) colors

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints under `/api` prefix
- **File Serving**: Static file serving for resume downloads (PDF format)
- **Development**: Vite middleware integration for hot reload in development

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Basic user table structure with username/password fields
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Model**: Basic user authentication schema prepared but not fully implemented
- **Security**: Session-based authentication foundation laid for future expansion

## File Management
- **Resume Downloads**: Server endpoint for PDF resume downloads
- **Static Assets**: Organized asset management through Vite's asset handling
- **File Structure**: Clean separation between client, server, and shared code

## Development Environment
- **Build Process**: Vite for frontend bundling, esbuild for server bundling
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared modules
- **Development Tools**: Replit-specific plugins for error handling and development banner
- **Code Organization**: Modular component structure with shared utilities and types

# External Dependencies

## UI and Design
- **Shadcn/ui**: Complete component library with Radix UI accessibility primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Carousel component functionality

## Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect
- **Drizzle Kit**: Database migration and schema management tools
- **Drizzle Zod**: Schema validation integration

## State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Hookform Resolvers**: Form validation resolvers

## Development and Build Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the application
- **PostCSS**: CSS processing with Autoprefixer
- **TSX**: TypeScript execution for development

## Session and Security
- **Express Session**: Session management middleware
- **Connect PG Simple**: PostgreSQL session store
- **CORS**: Cross-origin resource sharing handling

## Utilities and Helpers
- **Date-fns**: Date manipulation and formatting
- **CLSX/Tailwind Merge**: Conditional CSS class handling
- **Nanoid**: Unique ID generation
- **Zod**: Runtime type validation