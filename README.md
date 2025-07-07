# StockMarket Dashboard

A simple React + Vite dashboard for stock market data.

## Getting Started

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

### Available Scripts

#### Development
Start the app in development mode:
```bash
pnpm dev
```
The app will be available at http://localhost:5173.

#### Production
Build the app for production:
```bash
pnpm build
```

Preview the production build locally:
```bash
pnpm preview
```

#### Maintenance
Clean node_modules and package-lock.json:
```bash
pnpm clean
```

Type check without building:
```bash
pnpm type-check
```

## Setting Up SSL for Local Development

This project supports HTTPS for local development using self-signed certificates. Follow these steps to set it up:

### Generate SSL Certificates
If the `ssl/localhost.key` and `ssl/localhost.crt` files are missing, you can generate them using OpenSSL:

1. Create a private key:
   ```bash
   openssl genrsa -out ssl/localhost.key 2048
   ```

2. Create a certificate signing request (CSR):
   ```bash
   openssl req -new -key ssl/localhost.key -out ssl/localhost.csr -subj "/CN=localhost"
   ```

3. Generate a self-signed certificate:
   ```bash
   openssl x509 -req -days 365 -in ssl/localhost.csr -signkey ssl/localhost.key -out ssl/localhost.crt
   ```

### Trust the Certificate on macOS
1. Double-click the `ssl/localhost.crt` file to open it in **Keychain Access**.
2. Drag it to the **System** keychain.
3. Double-click the certificate, expand **Trust**, and set **When using this certificate** to **Always Trust**.
4. Close the window and enter your password to confirm.

After completing these steps, restart your browser and the certificate should be trusted.

---

Feel free to customize this dashboard for your needs!
