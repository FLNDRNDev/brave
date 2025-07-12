# Brave Video Platform - CodeRabbit Configuration

## Project Overview

Brave is a modern video streaming platform built with Next.js 15, React 19, TypeScript, and tRPC. The platform features advanced video processing, AI-powered features, and a comprehensive creator studio.

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS
- **Backend**: tRPC, PostgreSQL, DrizzleORM
- **Authentication**: Clerk
- **Video Processing**: Mux
- **Database**: Neon (PostgreSQL)
- **Package Manager**: Bun

## Key Features

- Advanced video player with quality controls
- AI-powered video transcription and analysis
- Creator studio with analytics dashboard
- Multi-language support (20 languages)
- User verification system
- Subscription-based AI studio plans

## Development Guidelines

### Code Style
- Follow existing coding patterns and conventions
- Use 3-space indentation
- Maintain consistent file structure
- Follow TypeScript best practices

### tRPC Integration
- All API calls use tRPC for type safety
- Server components use `trpc.server.tsx`
- Client components use `trpc.client.tsx`
- Follow the established router pattern

### Database
- Use DrizzleORM for all database operations
- Schema changes require migrations
- Follow the established table structure

### Authentication
- Use Clerk for authentication
- Webhook integration for user sync
- Protected routes use middleware

## File Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── db/                  # Database schema and connection
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── locales/             # Multi-language support
├── modules/             # Feature-based modules
├── trpc/                # tRPC configuration
└── middleware.ts        # Next.js middleware
```

## TODO Items

See `TODO.mdx` for current development tasks and priorities.

## AI Agent Rules

The project follows strict AI agent rules defined in `.cursor/rules/ai-agent-rules-set.mdx`:
- Code preservation and error handling focus
- Version compatibility checks
- TODO task management
- Documentation standards

## Getting Started

1. Install dependencies: `bun install`
2. Set up environment variables
3. Run database migrations: `bun run db:push`
4. Start development server: `bun run dev`

## Deployment

- Main branch: Production-ready code
- Feature branches: Development work
- All changes require pull requests
- Follow the established Git workflow 