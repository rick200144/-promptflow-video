# 🎬 PromptFlow Video - Free AI Video Generator

A modern, free web platform for creating stunning AI-generated videos from text prompts. No watermarks, no hidden fees, no sign-up required.

## ✨ Features

- **AI Video Generation** - Describe your video and watch it come to life instantly
- **Multiple Styles** - Cinematic, Cartoon, Realistic, Anime, Abstract
- **Fast Processing** - Generate videos in 15-60 seconds
- **Video Preview** - Watch and manage videos in your browser
- **Download & Share** - Save videos to your device
- **Video History** - Track all your creations
- **Free & Unlimited** - No watermarks, no subscriptions
- **Beautiful Responsive UI** - Works perfectly on desktop, tablet, and mobile

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** and npm or yarn
- **(Optional)** API keys for video generation:
  - [Replicate](https://replicate.com/account/api-tokens) - Free credits included
  - [Runway ML](https://runwayml.com) - Professional video generation
  - [OpenAI](https://platform.openai.com) - GPT-4 and vision models

### Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

3. **Edit `.env.local`** and add your API keys:
   ```env
   REPLICATE_API_TOKEN=your_replicate_token_here
   RUNWAY_API_KEY=your_runway_key_here        # optional
   OPENAI_API_KEY=your_openai_key_here        # optional
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Visit the app**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## � Project Structure

```
├── app/                        # Next.js app directory
├── components/                 # React components
│   ├── Header.tsx             # Navigation header
│   ├── VideoGenerator.tsx      # Video creation form
│   └── VideoList.tsx          # Video gallery and management
├── lib/                        # Utilities and helpers
│   ├── api.ts                 # API client functions
│   └── videoStore.ts          # Zustand state management
├── pages/                      # Next.js pages
│   ├── _app.tsx               # App wrapper with providers
│   ├── _document.tsx          # HTML document structure
│   ├── index.tsx              # Home page
│   └── api/                   # API routes
│       ├── generate-video.ts           # Create new video
│       ├── video-status/[videoId].ts   # Check video progress
│       ├── video/[videoId].ts          # Delete video
│       └── videos.ts                   # List all videos
├── public/                     # Static assets
├── styles/                     # CSS modules
│   ├── globals.css            # Global styles
│   ├── Header.module.css      # Header component styles
│   ├── VideoGenerator.module.css
│   └── VideoList.module.css
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies and scripts
```

## 🔧 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Next.js 14, React 18 | Web framework and UI library |
| **Language** | TypeScript | Type safety and developer experience |
| **Styling** | CSS Modules, Tailwind | Component and utility styling |
| **State** | Zustand | Simple state management |
| **API Client** | Axios | HTTP requests |
| **Notifications** | React Toastify | User feedback messages |
| **AI Services** | Replicate, Runway ML | Video generation |

## 🔌 AI Service Integration

### Using Replicate (Recommended)

Replicate provides free credits and excellent text-to-video models.

1. **Create account** at [replicate.com](https://replicate.com)
2. **Get API token** from account settings
3. **Add to `.env.local`**:
   ```env
   REPLICATE_API_TOKEN=r8_xxxxx
   ```
4. **Popular models**:
   - **Text-to-Video**: `stable-diffusion-videoguided` or similar
   - **Image-to-Video**: `damo-vilab/text-to-video`
   - **Style Transfer**: Various community models

### Using Runway ML

Professional-grade video generation with advanced controls.

```env
RUNWAY_API_KEY=your_runway_key
```

### Using OpenAI (Text Processing)

For text improvement and descriptions:

```env
OPENAI_API_KEY=sk-xxx
```

## 📚 API Routes
         duration: duration,
       },
     }),
   });
   ```

### Other Supported Services

- **Runway ML**: Use their video generation API
- **OpenAI + Pika**: Combine GPT for descriptions with Pika for video
- **Hugging Face**: Free open-source models

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#6366f1',    // Change primary color
      secondary: '#8b5cf6',  // Change secondary color
    },
  },
}
```

### Modify Prompt
Edit the placeholder text in `src/components/VideoGenerator.tsx`

### Add Features
- User authentication (NextAuth.js)
- Video storage (AWS S3, Firebase)
- Advanced editing tools
- Sharing functionality

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in project settings
   - Deploy!

### Deploy to Other Platforms

- **Netlify** - Build command: `npm run build`, Publish: `.next`
- **Railway** - Simple Git integration
- **Render** - Easy Node.js deployment

## 📝 Customization Examples

### Add Authentication
```bash
npm install next-auth
```

### Add Database (Videos Tracking)
```bash
npm install prisma @prisma/client
npx prisma init
```

### Enable User Accounts
```bash
npm install @supabase/supabase-js
```

## 🐛 Troubleshooting

### "API token not found"
- Check `.env.local` file exists
- Verify API token is correctly set
- Restart dev server after updating `.env`

### Videos not generating
- Verify API token is valid
- Check API service status
- Check console for error messages
- Verify prompt is descriptive enough

### Build errors
```bash
npm install
npm run dev
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Replicate API Docs](https://replicate.com/docs)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🔗 Useful Links

- [Replicate Models](https://replicate.com/explore)
- [Text-to-Video Models](https://replicate.com/collections/text-to-video-models)
- [Next.js Deployment](https://nextjs.org/docs/deployment/vercel)

---

**Happy video creating! 🎥** 
