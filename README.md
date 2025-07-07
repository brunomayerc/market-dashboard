# 📊 StockMarket Dashboard

A modern and responsive React + Vite dashboard for tracking stock market data.

---

## 🚀 Features
- **Real-time Data**: Stay updated with the latest stock market trends.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Fast and Lightweight**: Built with Vite for blazing-fast performance.

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [pnpm](https://pnpm.io/) (install with `npm install -g pnpm`)

### Installation

1. Clone the repository or download the source code.
2. Open a terminal in the project directory.
3. Install dependencies:
   ```bash
   pnpm install
   ```

---

## 📂 Available Scripts

### Development
Start the app in development mode:
```bash
pnpm dev
```
The app will be available at http://localhost:5173.

### Production
Build the app for production:
```bash
pnpm build
```

Preview the production build locally:
```bash
pnpm preview
```

### Maintenance
Clean node_modules and package-lock.json:
```bash
pnpm clean
```

Type check without building:
```bash
pnpm type-check
```

---

## 🌐 Deployment

### QA Deployment (Pull Requests)
- Each pull request is automatically deployed to a unique QA environment.
- The deployment URL is commented on the pull request for easy access.

### Production Deployment
- Merging into the `main` branch triggers an automatic deployment to production.
- The production site is hosted on GitHub Pages.

---

## 🔒 Setting Up SSL for Local Development

This project supports HTTPS for local development using `mkcert`. Follow these steps to set it up:

1. **Install mkcert**:
   ```bash
   brew install mkcert
   brew install nss # For Firefox support
   ```

2. **Install the local CA**:
   ```bash
   mkcert -install
   ```

3. **Generate certificates**:
   ```bash
   mkcert localhost 127.0.0.1 ::1
   ```
   This will create the following files in the project root:
   - `localhost.pem` (certificate)
   - `localhost-key.pem` (key)

   **Note**: These files are not committed to version control. Each developer should generate their own certificates following these steps.

4. **Update Vite Configuration**:
   Ensure your `vite.config.ts` is configured to use these certificates:
   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import fs from 'fs';

   export default defineConfig({
     plugins: [react()],
     server: {
       https: {
         key: fs.readFileSync('./localhost-key.pem'),
         cert: fs.readFileSync('./localhost.pem'),
       },
     },
   });
   ```

5. **Start the Development Server**:
   Run the following command to start the server with HTTPS:
   ```bash
   pnpm dev
   ```

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to customize this dashboard for your needs! 🌟
