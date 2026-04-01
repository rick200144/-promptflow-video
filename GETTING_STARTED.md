# 🚀 Getting Started with PromptFlow Video

Complete guide to get up and running with PromptFlow Video in minutes.

## 📋 Prerequisites

Before you start, make sure you have:

- **Node.js 18 or higher** - [Download](https://nodejs.org/)
- **npm or yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **A code editor** - VS Code recommended, [Download](https://code.visualstudio.com/)

### Verify Installation

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git
git --version
```

## 🎯 Quick Start (5 minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/rick200144/-promptflow-video.git
cd -promptflow-video
```

### 2. Set Up Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit with your API keys (see next section)
nano .env.local  # or use your editor
```

### 3. Get API Keys

Choose at least one service for video generation:

#### Option A: Replicate (Recommended - Free with Credits)

1. Visit [replicate.com](https://replicate.com)
2. Sign up (free)
3. Go to [Account > API Tokens](https://replicate.com/account/api-tokens)
4. Copy your API token
5. Add to `.env.local`:
   ```env
   REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxxxxxxxxx
   ```

**Free to start:**
- $20 free credits per month
- Text-to-video models available
- Great image-to-video models

#### Option B: Runway ML (Professional)

1. Visit [runwayml.com](https://runwayml.com)
2. Sign up
3. Go to [Settings > API](https://runwayml.com/settings/api)
4. Create API key
5. Add to `.env.local`:
   ```env
   RUNWAY_API_KEY=rwk_xxxxxxxxxxxxxxxxxxxx
   ```

**Pricing:**
- Free tier with limited API calls
- Pay-as-you-go billing
- Advanced video generation

#### Option C: OpenAI (Text Processing - Optional)

1. Visit [platform.openai.com](https://platform.openai.com)
2. Sign up
3. Go to [API Keys](https://platform.openai.com/account/api-keys)
4. Create new secret key
5. Add to `.env.local`:
   ```env
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
   ```

**Use for:**
- Improving text prompts
- Pre-processing descriptions
- Optional enhancement (not required)

### 4. Install and Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 5. Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

You should see the PromptFlow Video interface!

## 📚 Next Steps

### Create Your First Video

1. **Write a prompt**
   ```
   Example: "A serene mountain landscape at sunset with clouds 
   floating by and birds flying in the distance"
   ```

2. **Choose options**
   - Style: Cinematic, Cartoon, Realistic, etc.
   - Duration: 15, 30, or 60 seconds

3. **Generate**
   - Click "✨ Generate Video"
   - Wait for processing (minutes vary by model)
   - Download when complete

### Explore the Code

**Key Files to Know:**

```
pages/
  └── index.tsx              # Main page
  └── api/
      ├── generate-video.ts  # Video generation API
      └── video-status/[videoId].ts
      
components/
  ├── Header.tsx            # Navigation
  ├── VideoGenerator.tsx    # Form component
  └── VideoList.tsx         # Video gallery

lib/
  ├── api.ts               # API client
  └── videoStore.ts        # State management
```

### Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```

### Using Makefile (Easier!)

If you prefer, use the Makefile for common tasks:

```bash
# View all commands
make help

# Quick start
make quick-start

# Development
make dev

# Build and run
make build start

# With Docker
make docker-build
make docker-up
```

## 🐛 Troubleshooting

### Problem: "API token not found"

**Solution:**
1. Make sure `.env.local` exists
2. Verify the file has the correct API keys
3. Restart the dev server: `npm run dev`

### Problem: "EADDRINUSE - Port 3000 in use"

**Solution:**
```bash
# Kill process using port 3000
# On macOS/Linux:
lsof -i :3000
kill -9 <PID>

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Problem: "npm install fails"

**Solution:**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problem: "Build fails"

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Try building again
npm run build
```

### Problem: "Videos not generating"

**Checklist:**
- [ ] API key is valid and enabled
- [ ] API token format is correct in `.env.local`
- [ ] API service has available credits/quota
- [ ] Your prompt is descriptive enough
- [ ] Check browser console for errors (F12)

## 🎨 Customization

### Change Color Theme

Edit `styles/globals.css`:

```css
/* Change gradient colors */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add New Video Styles

Edit `components/VideoGenerator.tsx`:

```typescript
const VIDEO_STYLES = [
  { id: 'cinematic', label: 'Cinematic' },
  { id: 'cartoon', label: 'Cartoon' },
  { id: 'your-style', label: 'Your Style' },  // Add new
];
```

### Change Duration Options

Edit `components/VideoGenerator.tsx`:

```typescript
const DURATIONS = [
  { id: '15', label: '15 seconds' },
  { id: '30', label: '30 seconds' },
  { id: '120', label: '2 minutes' },  // Add new
];
```

## 🚀 Deployment

Ready to go live? See [DEPLOYMENT.md](../DEPLOYMENT.md) for guides on:

- **Vercel** (Easiest, recommended)
- **Docker** (Most flexible)
- **Railway** (Good balance)
- **Heroku** (Classic platform)
- **AWS** (Most powerful)
- **Self-hosted** (Maximum control)

## 📖 Learn More

### Official Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### AI Service Documentation

- [Replicate API](https://replicate.com/docs)
- [Runway ML Docs](https://docs.runwayml.com)
- [OpenAI API](https://platform.openai.com/docs)

### Video Models

- [Replicate Video Models](https://replicate.com/collections/text-to-video-models)
- [HuggingFace Space: Animatronics](https://huggingface.co/spaces)
- [ModelScope Video Models](https://modelscope.cn/models)

## 🤝 Getting Help

### Ask Questions

- **GitHub Discussions** - Community Q&A
- **GitHub Issues** - Report bugs
- **Email** - rick200144@gmail.com

### Report Issues

When reporting issues, include:
- What you were trying to do
- Error message or unexpected behavior
- Node.js version (`node --version`)
- Which API service you're using
- Steps to reproduce

## ✅ Checklist

Before deploying, make sure you have:

- [ ] `.env.local` configured with API keys
- [ ] Dependencies installed (`npm install`)
- [ ] Code builds without errors (`npm run build`)
- [ ] Development server runs (`npm run dev`)
- [ ] Can generate at least one test video
- [ ] UI looks good on mobile and desktop

## 🎉 You're Ready!

You now have a fully functional AI video generation platform!

**Next:** 
1. Create some videos
2. Explore the code
3. Customize for your needs
4. Deploy when ready
5. Share with the world!

---

**Happy creating!** 🎬✨

Questions? Check the [README.md](../README.md) or create a GitHub issue.
