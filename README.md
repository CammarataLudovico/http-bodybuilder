# 🏗️ HTTP Bodybuilders — Roadmap & Checklist

Created by Ludovico Cammarata 

A fun and educational project inspired by [http.cat](https://http.cat), but with bodybuilders visually representing HTTP status codes.

---

## ✅ Tech Stack

- [x] Vite + React + TypeScript
- [x] TailwindCSS + DaisyUI
- [x] React Router DOM
- [ ] Static Hosting (Vercel)
- [ ] Optional: Direct image endpoint support (e.g. `/404` → image only)

---

## 🛣️ Roadmap

### 📁 Project Setup
- [x] Initialize project with `yarn create vite`
- [x] Install and configure TailwindCSS + DaisyUI
- [x] Configure React Router

### 🔧 Core Features
- [x] Homepage with a list of HTTP codes (e.g. 200, 404, 500)
- [x] `HttpCard` component: image + code + description
- [ ] Modal or zoom effect on image
- [ ] Search by code (input field)
- [ ] Grouping or filtering by category (1xx, 2xx, 3xx, etc.)

### 🖼️ Content
- [x] Create `httpCodes.ts` with metadata
- [ ] Add real or AI-generated bodybuilder images
- [ ] Optimize image sizes (e.g. convert to `.webp`, compress)

### 🌐 Routing
- [x] Homepage (`/`)
- [ ] Dynamic route for individual code (`/404`, `/500`, etc.)
- [ ] Fallback 404 page for unknown routes

### 🎨 UI Improvements
- [ ] Light/dark mode toggle (DaisyUI)
- [ ] Basic animations (e.g. hover, fade-in)
- [ ] Responsive layout (mobile-friendly)

### 🚀 Deployment
- [ ] Deploy to Vercel
- [ ] Add custom domain (optional)
- [ ] Add basic SEO (meta title, description, favicon)

### 🌍 Bonus Features (optional)
- [ ] "Random error" button (show a random HTTP code)
- [ ] Meme mode: add humorous caption under image
- [ ] Share to social media buttons

---

## 💡 Future Ideas

- Auto-generate images using AI (e.g. DALL·E API)
- Quiz mode: guess the code from the image
- Backend logging or "favorites" system

---
