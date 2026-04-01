# Contributing to PromptFlow Video 🎬

First off, thanks for thinking about contributing! We're excited to work with you.

## Code of Conduct

Be respectful, inclusive, and professional. We're building something awesome together.

## How to Contribute

### 1. Report Bugs 🐛

Found a bug? Please create an issue with:
- **Clear title** describing the problem
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots or error messages** (if applicable)
- **Your environment** (OS, Node version, etc.)

### 2. Suggest Features 💡

Have an idea? We'd love to hear it! Create an issue with:
- **Clear description** of the feature
- **Why it would be useful**
- **How users would interact with it**
- **Alternative solutions** you've considered

### 3. Submit Code 💻

Ready to code? Follow these steps:

#### Setup

```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/-promptflow-video.git
cd -promptflow-video

# 3. Add upstream remote
git remote add upstream https://github.com/rick200144/-promptflow-video.git

# 4. Create feature branch
git checkout -b feature/your-feature-name

# 5. Install dependencies
npm install

# 6. Create local environment
cp .env.example .env.local
# Add your API keys
```

#### Code Style

- **TypeScript**: Use strict mode
- **React**: Use functional components and hooks
- **Naming**: Use descriptive names (camelCase for JS, kebab-case for files)
- **Comments**: Add comments for complex logic
- **Formatting**: Use Prettier:
  ```bash
  npm run format
  ```

#### Commit Message Format

```
type(scope): brief description

Longer description if needed. Explain the why, not just the what.

Fixes #issue_number
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Adding/updating tests
- `chore`: Build, dependencies, etc.

**Examples:**
```
feat(video-generation): add support for custom aspect ratios
fix(ui): correct typo in error message
docs(readme): update installation instructions
```

#### Testing

```bash
# Run tests before submitting
npm test

# Lint code
npm run lint

# Check types
npx tsc --noEmit

# Build production version
npm run build
```

#### Create Pull Request

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**
   - Fill in the PR template
   - Link any related issues
   - Describe your changes clearly

3. **PR Guidelines**
   - 1 feature per PR
   - Update documentation if needed
   - Add tests for new features
   - Keep commits clean and atomic
   - Respond to review feedback

### 4. Review Process

All PRs go through:
1. **Automated checks**: Linting, tests, build
2. **Code review**: Team member review
3. **Feedback**: Address comments
4. **Merge**: PR merged when approved

## Development Guidelines

### Folder Structure

When adding new features, follow the existing structure:

```
feature-name/
├── components/        # React components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
├── styles/           # CSS modules
├── types/            # TypeScript types
└── index.ts          # Public API
```

### Component Development

**Good component:**
```typescript
interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onPlay?: () => void;
}

export default function VideoPlayer({ videoUrl, title, onPlay }: VideoPlayerProps) {
  return (
    <div>
      <video src={videoUrl} onPlay={onPlay}>
        Your browser doesn't support video
      </video>
      <h2>{title}</h2>
    </div>
  );
}
```

**Tips:**
- Use TypeScript interfaces for props
- Write JSDoc comments for complex logic
- Keep components focused and reusable
- Use hooks for state management
- Avoid prop drilling (use context for deeply nested data)

### Error Handling

```typescript
try {
  const response = await generateVideo(prompt);
  toast.success('Video generation started!');
} catch (error) {
  console.error('Generation failed:', error);
  toast.error(error instanceof Error ? error.message : 'Unknown error');
}
```

### Performance

- Use `React.memo` for expensive components
- Lazy load components with `dynamic`
- Optimize images with `next/image`
- Use `useCallback` for event handlers
- Profile with React DevTools

## Documentation

When adding features, update:
- **README.md** - User-facing features
- **DEPLOYMENT.md** - Deployment info
- **Inline comments** - Complex code

## Questions?

- **GitHub Issues** - Report bugs and discuss features
- **GitHub Discussions** - Ask questions
- **Email** - rick200144@gmail.com

## Recognition 🌟

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## License

By contributing, you agree your code will be licensed under the MIT License.

---

**Happy contributing!** 🚀

Together we're building something amazing.
