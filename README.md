# 🚀 Brave Video Platform

A modern, feature-rich video streaming platform built with cutting-edge technologies. Brave offers an advanced video experience with AI-powered features, real-time processing, and a comprehensive creator studio.

![Brave Platform](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Key Features

### 🎥 Video Experience
- **Advanced Video Player** with quality controls and adaptive streaming
- **Real-time Video Processing** powered by Mux for seamless playback
- **Smart Thumbnail Generation** for enhanced video discovery
- **Multiple Content Feeds** for personalized viewing experience

### 🤖 AI-Powered Features
- **Automatic Video Transcription** for accessibility and SEO
- **AI-Generated Titles & Descriptions** to boost engagement
- **Smart Content Recommendations** based on viewing patterns

### 👨‍💻 Creator Studio
- **Comprehensive Analytics Dashboard** with detailed metrics
- **Custom Playlist Management** for content organization
- **Advanced Upload Tools** with progress tracking
- **Content Scheduling** and publishing controls

### 💬 Community Features
- **Interactive Comment System** with real-time updates
- **Like & Subscription System** for community engagement
- **Watch History Tracking** for personalized recommendations
- **User Profiles** with activity feeds

### 🔐 Security & Performance
- **Robust Authentication System** with multiple providers
- **Type-safe APIs** with tRPC for enhanced security
- **Responsive Design** optimized for all devices
- **Module-based Architecture** for scalability

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and performance improvements
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **ShadcnUI** - Beautiful, accessible component library

### Backend & Database
- **tRPC** - End-to-end type-safe APIs
- **PostgreSQL** - Robust relational database
- **DrizzleORM** - Type-safe database toolkit
- **Next.js API Routes** - Serverless API endpoints

### Video & Media
- **Mux** - Video processing and streaming
- **Advanced Video Player** - Custom player with quality controls
- **Real-time Processing** - Live video optimization

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Bun** - Fast JavaScript runtime and package manager

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- PostgreSQL database
- Mux account for video processing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FLNDRNDev/brave.git
   cd brave
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/brave"
   
   # Mux
   MUX_TOKEN_ID="your_mux_token_id"
   MUX_TOKEN_SECRET="your_mux_token_secret"
   
   # Authentication
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Other services
   UPLOADTHING_SECRET="your_uploadthing_secret"
   UPLOADTHING_APP_ID="your_uploadthing_app_id"
   ```

4. **Set up the database**
   ```bash
   # Generate and run migrations
   bun run db:generate
   bun run db:push
   ```

5. **Start the development server**
   ```bash
   bun run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
brave/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   │   └── ui/             # ShadcnUI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and configurations
│   └── modules/            # Feature-based modules
│       ├── auth/           # Authentication module
│       └── home/           # Home page module
├── public/                 # Static assets
├── .cursor/                # Cursor IDE configuration
└── docs/                   # Documentation
```

## 🎯 Features in Detail

### Video Player
- Adaptive bitrate streaming
- Quality selection controls
- Keyboard shortcuts
- Picture-in-picture support
- Custom controls and branding

### Creator Studio
- Upload progress tracking
- Video processing status
- Analytics and insights
- Content management tools
- Playlist creation and management

### AI Integration
- Automatic transcription generation
- Smart title suggestions
- Description optimization
- Content tagging and categorization
- Recommendation algorithms

### Community Features
- Real-time comments
- Like and dislike system
- User subscriptions
- Activity feeds
- Social sharing

## 🔧 Development

### Available Scripts

```bash
# Development
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server

# Database
bun run db:generate  # Generate database migrations
bun run db:push      # Push schema changes
bun run db:studio    # Open database studio

# Code Quality
bun run lint         # Run ESLint
bun run format       # Format code with Prettier
bun run type-check   # Run TypeScript type checking
```

### Code Style
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add proper error handling
- Include comprehensive tests

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Use the provided Dockerfile
- **Self-hosted**: Use Docker with the provided configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [ShadcnUI](https://ui.shadcn.com/) for beautiful components
- [Mux](https://mux.com/) for video processing
- [DrizzleORM](https://orm.drizzle.team/) for type-safe database operations
- [tRPC](https://trpc.io/) for end-to-end type safety

## 📞 Support

- **Documentation**: [docs.brave-platform.com](https://docs.brave-platform.com)
- **Issues**: [GitHub Issues](https://github.com/FLNDRNDev/brave/issues)
- **Discussions**: [GitHub Discussions](https://github.com/FLNDRNDev/brave/discussions)
- **Email**: support@brave-platform.com

---

<div align="center">
  <p>Made with ❤️ by the Brave team</p>
  <p>
    <a href="https://github.com/FLNDRNDev/brave/stargazers">
      <img src="https://img.shields.io/github/stars/FLNDRNDev/brave" alt="Stars">
    </a>
    <a href="https://github.com/FLNDRNDev/brave/network">
      <img src="https://img.shields.io/github/forks/FLNDRNDev/brave" alt="Forks">
    </a>
    <a href="https://github.com/FLNDRNDev/brave/issues">
      <img src="https://img.shields.io/github/issues/FLNDRNDev/brave" alt="Issues">
    </a>
  </p>
</div>
