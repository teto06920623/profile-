# Profile

React + Vite Frontend Application

## 🚀 Live Preview

Visit: **https://teto06920623.github.io/profile-/**

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html          # Main HTML file
│   ├── favicon.ico         # Application favicon
│   └── assets/             # Static assets (images, icons, fonts)
├── src/
│   ├── components/
│   │   ├── common/         # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Modal.jsx
│   │   └── layout/         # Layout components
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── Sidebar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Products.jsx
│   │   ├── Blog.jsx
│   │   └── Dashboard.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── services/
│   │   ├── api.service.js
│   │   ├── auth.service.js
│   │   └── payment.service.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .prettierrc
├── package.json
└── vite.config.js
```

## 🛠️ Development

```bash
cd frontend
npm install
npm run dev
```

## 📦 Build

```bash
cd frontend
npm run build
```

## 🌐 Deployment

The project is automatically deployed to GitHub Pages on every push to the `main` branch using GitHub Actions.
