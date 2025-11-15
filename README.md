# 🎌 Anime Search App

A lightweight, responsive anime search application built with **React + TypeScript**, featuring instant search with debouncing, server-side pagination, and a modern UI powered by Shadcn UI.

This project is created as part of the **YoPrint React Coding Assessment**.

---

## 🌐 Live Demo

👉 **Live URL:** _<your deployed URL here>_  
(Hosted on Netlify)

---

## 🛠 Tech Stack

- **React 18**
- **TypeScript**
- **Redux Toolkit** for state management
- **React Router DOM** (SPA routing)
- **Vite** (build tool)
- **Shadcn UI + TailwindCSS** (UI components)
- **Axios** (API client)
- **Jikan API v4** (Anime data)

---

## 🔎 Features

### ✅ 1. Search Anime (Instant Search)

- Typing triggers a debounced request (250ms)
- No need to press Enter
- In-flight API requests are canceled automatically
- Smooth UI transitions

### ✅ 2. Anime Detail Page

- Displays detailed anime information
- Skeleton loading states
- Clean and responsive layout
- Gracefully ignores axios cancel errors

### ✅ 3. Server-Side Pagination

- Uses `pagination.last_visible_page`
- Next/Previous page buttons
- Automatically refetches data on page change

### ✅ 4. Modern UI

- Glassy hero search section
- Responsive grid layout
- Animated skeleton loaders
- Empty state UX

### ✅ 5. No Environment Variables

- Fully self-contained
- Works immediately after `npm install`

---

## ✨ Bonus Features (Extra Effort)

- Modern, aesthetically polished UI (Shadcn + custom styling)
- Skeleton loaders on search & detail pages
- Cancel request handling (Axios AbortController)
- Empty state for no results
- Mobile-responsive layouts
- Clean reusable components (CardAnime)
- Error handling for network & rate-limit scenarios

---

## 📁 Project Structure
