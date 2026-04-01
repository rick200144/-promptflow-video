# ⚡ Quick Reference Guide

Fast access to important commands and configurations.

## 🚀 Quick Commands

```bash
# Setup
npm install
cp .env.example .env.local

# Development
npm run dev              # Start dev server (hot reload)
npm run lint            # Check code quality

# Production
npm run build           # Build optimized version
npm start              # Run production server

# Docker
docker build -t promptflow-video .
docker run -p 3000:3000 promptflow-video

# Using Makefile
make quick-start       # install + env + dev
make dev              # Start dev server
make build            # Build for production
make docker-build     # Build Docker image
make docker-up        # Start Docker containers
```

## 🗝️ Environment Variables

**Required (choose one):**
```env
REPLICATE_API_TOKEN=r8_xxxxx
# OR
RUNWAY_API_KEY=rwk_xxxxx
```

**Optional:**
```env
OPENAI_API_KEY=sk-xxxxx
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

## 📁 File Locations

| What | Where |
|------|-------|
| Home page | `pages/index.tsx` |
| Components | `components/` |
| API routes | `pages/api/` |
| Styling | `styles/` |
| State mgmt | `lib/videoStore.ts` |
| API client | `lib/api.ts` |

## 🎨 Key Components

### VideoGenerator
- **File:** `components/VideoGenerator.tsx`
- **Props:** None (uses Zustand store)
- **Styles:** `styles/VideoGenerator.module.css`

### VideoList
- **File:** `components/VideoList.tsx`
- **Props:** None
- **Features:** Real-time status polling

### Header
- **File:** `components/Header.tsx`
- **Props:** None
- **Styles:** `styles/Header.module.css`

## 🔌 API Endpoints

```
POST   /api/generate-video          Create video
GET    /api/video-status/:videoId   Check progress
GET    /api/videos                  List videos
DELETE /api/video/:videoId          Delete video
```

## 📦 Main Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "typescript": "^5.2.0",
  "zustand": "^4.4.1",
  "axios": "^1.6.0",
  "react-toastify": "^9.1.3"
}
```

## 🎨 Customization

### Change Colors
Edit: `styles/globals.css`
```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add Video Style
Edit: `components/VideoGenerator.tsx`
```javascript
const VIDEO_STYLES = [
  { id: 'new-style', label: 'New Style' },
];
```

### Modify UI
- **Layout:** Edit component JSX
- **Styling:** Edit `.module.css` files
- **Logic:** Update component logic

## 🧪 Testing

```bash
# Lint code
npm run lint

# Check types
npx tsc --noEmit

# Build check
npm run build
```

## 🚢 Deployment

### Vercel
```bash
vercel deploy
```

### Docker
```bash
docker-compose up -d
```

### Heroku
```bash
heroku create
git push heroku main
```

## 📊 Performance

| Metric | Target |
|--------|--------|
| Load | <2s |
| API | <1s |
| Video Gen | <2min |
| Mobile | >90 score |

## 🔐 Security Checklist

- [ ] Never commit `.env.local`
- [ ] Use HTTPS in production
- [ ] Validate user input
- [ ] Rate limit API
- [ ] Secure CORS
- [ ] Rotate API keys

## 📚 Documentation

| Doc | Purpose |
|-----|---------|
| README.md | Overview |
| GETTING_STARTED.md | Setup |
| DEPLOYMENT.md | Deploy |
| CONTRIBUTING.md | Contribute |

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `lsof -i :3000` then kill |
| API key error | Check `.env.local` |
| Build fails | `rm -rf .next && npm install` |
| No videos showing | Check API integration |

## 💬 Getting Help

- GitHub Issues
- GitHub Discussions
- Email: rick200144@gmail.com

## ✅ Pre-Production Checklist

- [ ] API keys configured
- [ ] Video generation tested
- [ ] Mobile tested
- [ ] Build passes
- [ ] Docs updated
- [ ] Ready to deploy

---

**Last Updated:** April 1, 2026
