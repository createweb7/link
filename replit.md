# Linkuble - Study Abroad Advisory Platform

## Overview

Linkuble is a comprehensive study abroad advisory platform built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database. The application provides free and premium services to help students navigate international education opportunities, with a focus on university matching, consultation booking, and eligibility checking for top-tier institutions worldwide.

## System Architecture

The application follows a full-stack monorepo architecture with clear separation between client and server components:

- **Frontend**: React with TypeScript, utilizing Vite for development and building
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Tailwind CSS with Radix UI components via shadcn/ui
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

## Key Components

### Frontend Architecture
- **Component Structure**: Uses shadcn/ui design system with customized components
- **Styling**: Tailwind CSS with custom color scheme (navy, gold theme matching Linkuble branding)
- **Routing**: Wouter for lightweight client-side routing
- **Form Management**: React Hook Form with Zod schema validation
- **API Integration**: Custom API client with TanStack Query for data fetching

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints for university matching, consultation booking, and eligibility checks
- **Database Layer**: Drizzle ORM with PostgreSQL adapter
- **Development Setup**: Vite integration for hot reload in development
- **Error Handling**: Centralized error handling middleware

### Database Schema
The application uses three main entities:
- **University Matches**: Stores student preferences and generated university recommendations
- **Consultation Bookings**: Manages consultation appointments with status tracking
- **Eligibility Checks**: Handles university eligibility assessments with results storage
- **Users**: Basic user management (currently implemented as placeholder)

## Data Flow

1. **University Matching**: Students input academic details → Backend processes and stores matches → Frontend displays recommendations
2. **Consultation Booking**: Students request consultations → Backend stores booking with pending status → Admin can update status
3. **Eligibility Assessment**: Students provide academic profile → Backend evaluates against university requirements → Results stored and displayed

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: Neon database connectivity for serverless PostgreSQL
- **Radix UI Components**: Comprehensive accessible UI component library
- **Drizzle ORM**: Type-safe database operations with PostgreSQL support
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type checking and validation

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS post-processing

## Deployment Strategy

The application is configured for deployment with:
- **Build Process**: Vite builds the frontend, ESBuild bundles the backend
- **Database**: Uses Neon serverless PostgreSQL with connection pooling
- **Environment Variables**: DATABASE_URL required for database connectivity
- **Production Build**: Single deployment artifact with static frontend and Node.js backend

The application is optimized for platforms like Replit, Railway, or Vercel with the following build commands:
- Development: `npm run dev`
- Production Build: `npm run build`
- Production Start: `npm start`

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **July 02, 2025**: Completed comprehensive study abroad advisory website with:
  - Fixed country selector to properly link to dedicated country detail pages
  - Enhanced services page with comprehensive FAQ section (10+ detailed questions)
  - Added proper logo navigation linking back to home page
  - Expanded UK country detail page with university information, popular programs, and career outcomes
  - Implemented three-tier service structure (Free PG, Premium, Elite)
  - Created complete navigation system linking all pages
  - Built functional forms for university matching and consultation booking
  - Maintained consistent navy/gold branding throughout

## Changelog

- July 02, 2025. Initial setup and complete website development