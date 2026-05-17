cat > README.md << 'EOF'
# BloCKWise 

A modern property rental and apartment management platform built with React, TypeScript, and Firebase.

**Live Demo:** [blockwise-client.web.app](https://blockwise-client.web.app)

##  Features

-  Firebase Authentication (Email + Google)
-  Browse and filter apartment listings
-  Apply for rental agreements
-  Stripe payment integration
-  Interactive maps with Leaflet
-  Admin dashboard (manage members, agreements, coupons)
-  Announcement system
-  Coupon/discount system

## Tech Stack

### Frontend
- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 + DaisyUI v5
- Firebase Auth
- Stripe
- Leaflet Maps
- Framer Motion
- React Router v7
- Axios

### Backend
- Node.js + Express
- MongoDB (Atlas)
- Firebase Admin SDK
- Stripe
- Deployed on Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maimuna-t-333/blockwise-client.git
cd blockwise-client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your credentials:
```bash
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
VITE_STRIPE_PUBLISHABLE_KEY=
```

4. Start the development server:
```bash
npm run dev
```

## 🧪 Running Tests

```bash
npm run test
```

## Project Structure


src/
├── assets/            # Images and animations
├── Components/        # Shared components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── context/           # React context providers
│   ├── AuthContext.tsx
│   ├── AuthProvider.tsx
│   └── StripeProvider.tsx
├── Firebase/          # Firebase configuration
│   └── firebase.config.ts
├── hooks/             # Custom React hooks
│   ├── useAuth.tsx
│   ├── useAxios.tsx
│   ├── useAxiosSecure.tsx
│   └── useUserInfo.tsx
├── pages/             # All page components
│   ├── Apartments/    # Apartment listing
│   ├── Authentication/# Login and Register
│   ├── DashBoard/     # Admin and member dashboards
│   ├── Home/          # Homepage sections
│   └── Layout/        # Layout components
├── routes/            # React Router configuration
│   ├── Privateroute.tsx
│   ├── RoleRoute.tsx
│   └── router.tsx
├── test/              # Test files
├── types/             # TypeScript interfaces
│   └── index.ts
├── utils/             # Utility functions
│   └── formatPrice.ts
└── main.tsx           # App entry point

## User Roles

| Role | Access |
|---|---|
| **User** | Browse apartments, view announcements |
| **Member** | Make payments, view payment history |
| **Admin** | Manage members, agreements, coupons, announcements |

## Security

- Firebase Auth token verification on all protected routes
- Environment variables for all secrets
- Firebase Security Rules configured
- CORS restricted to production domains

