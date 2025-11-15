# 🎌 Anime Search App

A modern, responsive anime search application built with **React + TypeScript**, featuring instant search with debouncing, server-side pagination, and a clean UI using Shadcn UI.  
Created as part of the **YoPrint React Coding Assessment**.

---

## 🌐 Live Demo

🔗 **Live URL:** https://anime-search-e5a9.vercel.app  
(Deployed on Vercel)

---

## 🛠 Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- React Router DOM
- Vite
- Shadcn UI + TailwindCSS
- Axios
- Jikan API v4

---

## 🔎 Features

### 🔥 Instant Search

- Debounced search (250ms)
- Auto-cancel in-flight API calls
- No need to press Enter
- Smooth, responsive experience

### 🔥 Anime Detail Page

- Complete anime information
- Skeleton loaders
- Fully responsive layout
- Clean and modern UI

### 🔥 Server-Side Pagination

- Uses Jikan’s `last_visible_page`
- Next/Prev navigation
- Automatically refetches data

### 🔥 Modern UI/UX

- Glass-style search hero section
- Responsive grid layout
- Empty state handling
- Polished card design

### 🔥 Zero Environment Variables

Works immediately with:

```bash
npm install
npm run dev
```

---

## ✨ Bonus Features

- Polished modern UI using Shadcn components
- Skeleton loaders (search & detail)
- Axios cancellation handling
- Clean reusable components
- Mobile-first design
- Basic error handling

---

## 📁 Project Structure

```
src/
  ├── components/
  │     ├── ui/
  │     ├── CardAnime.tsx
  │     └── DetailSkeleton.tsx
  │
  ├── pages/
  │     ├── search/
  │     │     └── SearchPage.tsx
  │     └── detail/
  │           └── DetailPage.tsx
  │
  ├── store/
  │     ├── slices/
  │     │     ├── searchSlice.ts
  │     │     └── detailSlice.ts
  │     └── index.ts
  │
  ├── services/
  │     └── api.ts
  │
  ├── hooks/
  │     └── useDebounce.ts
  │
  └── main.tsx
```

---

## 🚀 Installation

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start development server (Port 4000)

```bash
npm run dev
```

Ensure `vite.config.ts` contains:

```ts
export default defineConfig({
  server: {
    port: 4000,
  },
});
```

---

## 🌐 Deployment (Netlify)

To fix SPA routing, add this file:

`public/_redirects`

```
/* /index.html 200
```

---

## 🤖 AI Assistance

All AI prompts used during development are documented in:

👉 **PROMPTS.md**

Each prompt includes:

- What question was asked
- What problem it solved
- Which part of the project it helped

---

## ✔ Submission Checklist

- [x] Uses **npm only**
- [x] Runs with `npm install` + `npm run dev`
- [x] Runs on port **4000**
- [x] No environment variables
- [x] Deployed & accessible online
- [x] Redux implemented
- [x] Debounce & request cancellation implemented
- [x] Server-side pagination implemented
- [x] TypeScript throughout
- [x] PROMPTS.md included

---

## 📄 License

MIT © 2025
