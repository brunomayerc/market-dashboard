# 📊 StockMarket Dashboard

A React + Vite dashboard for tracking stock market data with real-time updates, responsive design, and fast performance.

## 🛠️ Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [pnpm](https://pnpm.io/)

### Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev         # http://localhost:5173

# Build for production
pnpm build
pnpm preview     # Preview production build
```

### Common Commands

```bash
# Maintenance
pnpm clean       # Clean node_modules
pnpm type-check  # Type check without building

# Testing
pnpm test        # Run tests in watch mode
pnpm test:run    # Run tests once
pnpm test:ui     # Run tests with UI
```

## 🌐 Deployment

- **QA**: Automatic deployment for each PR with URL in comments
- **Production**: Auto-deploys from `main` branch to GitHub Pages

## 🔒 Local SSL Setup

```bash
# 1. Install mkcert
brew install mkcert
brew install nss  # For Firefox

# 2. Install local CA
mkcert -install

# 3. Generate certificates
mkcert localhost 127.0.0.1 ::1
```

Certificates (`localhost+2.pem` and `localhost+2-key.pem`) will be created in the project root.

Vite is already configured to use these certificates. Start with HTTPS using `pnpm dev`.

## 📄 License

MIT License. See LICENSE file for details.
