# Chaya-Chobi - AI-Powered Movie Discovery and Management Platform

https://github.com/TanzimHossainSafin/Chaya-Chobi

## Problem
Traditional movie discovery platforms lack intelligent personalization, requiring users to manually search and track watched movies without context-aware recommendations. Users struggle with fragmented movie management lacking centralized watchlists, AI-powered suggestions based on viewing history, and personalized discovery features for effective entertainment planning.

## Solution
Engineered a comprehensive movie discovery and management platform leveraging EdenAI's GPT-4 integration to automate personalized movie recommendations, generate intelligent suggestions based on user watch history, and deliver context-aware movie discovery. The system integrates with OMDB API for real-time movie data retrieval and provides a seamless user experience for tracking and discovering entertainment content.

## Core Architecture
Built a modern full-stack application with Next.js 15, React 19, and TypeScript, utilizing Prisma ORM with PostgreSQL for robust data modeling and persistence. Implemented server-side rendering and API routes for optimal performance, leveraging Next.js App Router for enhanced routing capabilities and React Server Components for efficient data fetching.

## Secure & Validated
Implemented a hardened security layer with NextAuth v5 for multi-provider OAuth authentication (GitHub and Google), enforcing session management via JWT strategy with HTTP-only cookies. Utilized Prisma Adapter for seamless database integration with user authentication, ensuring protected routes through middleware-based authorization checks and role-based access control.

## Feature Ecosystem
- **AI-Powered Recommendations**: Integrated EdenAI's GPT-4 API to analyze user watch history and deliver personalized movie suggestions with context-aware reasoning
- **Real-Time Movie Search**: Leveraged OMDB API for instant movie data retrieval with poster images, release years, and metadata
- **Personal Watchlist Management**: Full CRUD operations for user movie collections with ratings, reviews, and descriptions
- **User-Scoped Data**: Database-level user isolation ensuring users can only edit/delete their own movie entries
- **Responsive UI**: Modern frontend built with React 19, TailwindCSS 4, and custom SVG graphics for enhanced visual appeal
- **OAuth Integration**: Seamless authentication via GitHub and Google providers with Prisma-based session persistence
- **Protected Routes**: Middleware-enforced authentication for sensitive pages (movie management, AI suggestions)
- **Type Safety**: End-to-end TypeScript implementation across frontend, backend, and database schemas
