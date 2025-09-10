# Restaurant Finder - Storyblok x Code and Coffee Hackathon 2025

A personalized restaurant discovery platform that adapts to your location and preferences, powered by **Storyblok CMS** and **AI-driven insights**.

🏆 **Built for the Storyblok September 2024 Hackathon**

## Overview

Restaurant-Finder provides a more personalized experience when searching for places to eat, whether you're exploring your local neighborhood or discovering restaurants in a new city. We combine curated content, real-time data, and AI-powered recommendations to help you find the perfect dining experience tailored to your preferences and location.

## Why Restaurant-Finder?

- **Personalized Discovery:** Get restaurant recommendations that match your taste preferences and dining style.

- **Local & Travel Ready:** Works seamlessly whether you're at home or exploring a new destination.

- **AI-Enhanced Insights:** Smart summaries and recommendations based on reviews, cuisine types, and user preferences.

- **Always Up-to-Date:** Real-time information combined with curated content for the most accurate experience.

- **Flexible & Dynamic:** Content and features adapt based on your location and search context.

## Stack Used

**This section will be updated as the project evolves during development.**

### Frontend

- **Next.js 15** with App Router for optimal performance.
- **TypeScript** for reliability and developer experience.
- **TailwindCSS** for responsive, beautiful interfaces.
- **Storyblok React SDK** for seamless CMS integration.

### Content Management

- **Storyblok CMS** as the central content and configuration hub.

## Installation

```bash
# Clone the repository
git clone https://github.com/wovensoul/restaurant-finder.git
cd restaurant-finder

# Install dependencies
bun install # (you can also use npm, pnpm, or yarn)

# Start the development server
bun dev

# Open http://localhost:3000

```

## Environment Variables

```env
STORYBLOK_ACCESS_TOKEN=storyblok_token
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=public_storyblok_token
GOOGLE_PLACES_API_KEY=google_places_key
GEOLOCATION_API_KEY=location_api_key
```

## Project Structure

**This section will be updated as the project evolves during development.**

```
restaurant-finder/
│
├── public/
│   └── images/               # logos, static images
│
├── src/
│   ├── components/           # Reusable React components
│   │   ├── RestaurantCard.tsx
│   │   ├── SummaryModal.tsx
│   │   └── Layout.tsx
│   │
│   ├── pages/
│   │   ├── index.tsx         # Landing/search page
│   │   ├── _app.tsx
│   │   └── api/              # API routes
│   │       ├── restaurants.ts
│   │       └── summarize.ts
│   │
│   ├── lib/                  # Helper functions / API clients
│   │   ├── googlePlaces.ts
│   │   └── storyblok.ts
│   │
│   ├── types/                # Shared TypeScript types/interfaces
│   │   ├── restaurant.d.ts
│   │   └── summary.d.ts
│   │
│   └── styles/               # Tailwind customizations / global CSS
│
├── .env.local
├── package.json
├── tsconfig.json             # TypeScript config
├── tailwind.config.js
├── next.config.js
├── README.md
└── LICENSE
```

## Documentation

Comprehensive documentation will be added as features are implemented:

- Location services integration guide
- Content management workflows
- API documentation

## Team

- [souleymanesy7](https://github.com/souleymanesy7)
- [wovensoul](https://github.com/wovensoul)
- [blade9](https://github.com/blade9)

---

_Built with ❤️ for the Storyblok Hackathon_
