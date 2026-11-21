# kzahner.com

_This project has been developed mostly by AI._

Personal website built with Vite, React, and Tailwind CSS.

## Features

- Modern React application with Vite for fast development and builds
- Responsive design with Tailwind CSS
- Automatic deployment via GitHub Actions
- Custom domain integration

## Development

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/KAIST19/kzahner.git
cd kzahner
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The production files will be generated in the `dist` folder.

## Deployment

This site is deployed to GitHub Pages with automatic deployment configured via GitHub Actions.

### Manual Deployment

You can manually deploy the site with:

```bash
npm run deploy
```

### Automatic Deployment

Any push to the `main` branch will trigger the GitHub Actions workflow, which will:
1. Build the site
2. Deploy to GitHub Pages
3. Configure the custom domain (kzahner.com)

## Custom Domain Setup

The site is configured to use kzahner.com as its custom domain. The necessary DNS configuration includes:

1. A records pointing to GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. A TXT record for GitHub domain verification:
   - Name: `_github-pages-challenge-KAIST19.kzahner.com`
   - Value: [verification code provided by GitHub]

## Project Structure

```
kzahner/
├── .github/            # GitHub Actions workflows
├── dist/               # Production build files
├── public/             # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   ├── pages/          # Page components
│   └── routes/         # Route configuration
├── .gitignore
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## License

MIT
