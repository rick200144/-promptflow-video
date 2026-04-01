# PromptFlow Video - Deployment Guide 🚀

Complete guide to deploying PromptFlow Video to various platforms.

## Table of Contents
1. [Vercel (Recommended)](#vercel-recommended)
2. [Docker](#docker)
3. [Railway](#railway)
4. [Heroku](#heroku)
5. [AWS](#aws)
6. [Self-Hosted VPS](#self-hosted-vps)

## Vercel (Recommended)

**Easiest deployment option with built-in Next.js support.**

### Steps:
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Set Environment Variables:
   - `REPLICATE_API_TOKEN`
   - `RUNWAY_API_KEY` (optional)
   - `OPENAI_API_KEY` (optional)
6. Click "Deploy"

### Cost: FREE (with limits) to $20+/month

**Pros:**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Automatic deployments from GitHub
- Serverless functions

**Cons:**
- Limited free tier
- Cold start delays
- Paid for high traffic

---

## Docker

**Best for self-hosted solutions or containerized deployments.**

### Build and Run Locally:

```bash
# Build image
docker build -t promptflow-video .

# Run container
docker run -p 3000:3000 \
  -e REPLICATE_API_TOKEN=your_token \
  -e RUNWAY_API_KEY=your_key \
  promptflow-video
```

### Using Docker Compose:

```bash
# Copy environment file
cp .env.example .env

# Edit .env with your API keys

# Start services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

### Docker Compose Features:
- **Main App**: Next.js application
- **Database**: PostgreSQL (optional, enable with `--profile with-db`)
- **Cache**: Redis (optional, enable with `--profile with-cache`)

**Cost:** Cost of hosting (server)

---

## Railway

**Modern deployment platform with great DX.**

### Steps:
1. Visit [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Connect GitHub account
5. Select repository
6. Add environment variables:
   ```
   NODE_ENV=production
   REPLICATE_API_TOKEN=xxx
   ```
7. Deploy

### Cost: $5/month minimum or pay-as-you-go

**Pros:**
- Simple deployment
- Auto-scaling
- Good UI
- PostgreSQL integration
- GitHub integration

---

## Heroku

**Classic deployment platform, free tier deprecated.**

### Setup (Paid Alternative):

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create promptflow-video

# Set environment variables
heroku config:set REPLICATE_API_TOKEN=your_token

# Deploy
git push heroku main
```

### Configuration Files:

**Procfile:**
```
web: npm start
```

**package.json Scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### Cost: $7/month minimum

---

## AWS

**Most flexible but requires more setup.**

### Option 1: Lightsail (Easiest)

1. Create Lightsail instance
2. SSH into instance
3. Clone repository
4. Set environment variables
5. Run: `npm install && npm run build && npm start`

### Option 2: Elastic Container Service (ECS)

1. Create ECR repository
2. Push Docker image:
   ```bash
   docker build -t promptflow-video .
   docker tag promptflow-video:latest 123456.dkr.ecr.us-east-1.amazonaws.com/promptflow-video:latest
   docker push 123456.dkr.ecr.us-east-1.amazonaws.com/promptflow-video:latest
   ```
3. Create ECS task definition
4. Create ECS service

### Option 3: Lambda + API Gateway

```bash
npm install -g serverless
serverless deploy
```

### Cost: $5-50+/month depending on usage

---

## Self-Hosted VPS

**Maximum control and cost-effective for high traffic.**

### Prerequisites:
- Ubuntu 20.04+ VPS
- SSH access
- 2GB+ RAM
- Node.js 18 installed

### Deployment Steps:

```bash
# SSH into VPS
ssh ubuntu@your-vps-ip

# Clone repository
git clone https://github.com/rick200144/-promptflow-video.git
cd -promptflow-video

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install dependencies
npm install

# Build application
npm run build

# Set environment variables
nano .env.local
# Add your API keys

# Install PM2 (process manager)
sudo npm install -g pm2

# Start application
pm2 start npm --name "promptflow" -- start

# Configure automatic startup
pm2 startup
pm2 save

# Install Nginx (reverse proxy)
sudo apt install -y nginx

# Configure Nginx
sudo nano /etc/nginx/sites-available/default
```

### Nginx Configuration:

```nginx
upstream promptflow {
    server localhost:3000;
}

server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://promptflow;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Enable SSL with Let's Encrypt:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Cost: $3-10/month VPS + domain

**Pros:**
- Full control
- No vendor lock-in
- Better margins
- Customization

**Cons:**
- Manual maintenance
- Need DevOps knowledge
- Responsible for updates

---

## Environment Variables by Platform

### Vercel
- Use Vercel dashboard
- Prefix public variables with `NEXT_PUBLIC_`

### Docker
- Pass via `-e` flags or `.env` file
- Use `docker-compose.yml`

### Railway/Heroku
- Use platform dashboard
- Use `--env` flags in CLI

### AWS
- Use Systems Manager Parameter Store
- Or ECS task definition

### Self-Hosted
- Create `.env.local`
- Use PM2 ecosystem file

---

## Performance Tips 🚀

1. **Enable Compression**
   ```bash
   npm install compression
   ```

2. **Use CDN for Videos**
   - Cloudflare
   - AWS CloudFront
   - Bunny CDN

3. **Database Optimization**
   - Add indexes on frequently queried columns
   - Use connection pooling

4. **Monitor Performance**
   - Vercel Analytics
   - New Relic
   - DataDog

5. **Scale Horizontally**
   - Load balancer (nginx, HAProxy)
   - Multiple app instances
   - Database replica (read-only)

---

## Monitoring & Logging

### Error Tracking
- **Sentry** - Error reporting
- **LogRocket** - Session recording
- **Rollbar** - Error management

### Performance Monitoring
- **Vercel Analytics** (built-in)
- **New Relic** - Full-stack monitoring
- **DataDog** - Infrastructure monitoring
- **Grafana** - Self-hosted monitoring

### Examples:

**Sentry Integration:**
```bash
npm install @sentry/nextjs
```

---

## Backup & Recovery

### Database Backups
```bash
# PostgreSQL
pg_dump myapp > backup.sql

# Restore
psql myapp < backup.sql
```

### Video Storage Backups
```bash
# S3 backup
aws s3 sync ./videos s3://my-bucket/videos
```

---

## Security Checklist ✅

- [ ] Use HTTPS/SSL
- [ ] Set secure environment variables
- [ ] Hide sensitive API keys
- [ ] Enable CORS properly
- [ ] Rate limiting enabled
- [ ] CSRF protection active
- [ ] Regular security updates
- [ ] Monitor logs for attacks
- [ ] Backup critical data
- [ ] Use strong database passwords

---

## Cost Comparison

| Platform | Tier | Cost | Best For |
|----------|------|------|----------|
| **Vercel** | Pro | $20/mo | Small-medium apps |
| **Railway** | Hobby | $5/mo | Hobbyists |
| **Heroku** | Eco | $7-14/mo | Production |
| **Lightsail** | Micro | $3.50/mo | Budget |
| **DigitalOcean** | Basic | $5/mo | Control |
| **Linode** | Nanode | $5/mo | High-performance |

---

## Troubleshooting

### Application won't start
```bash
# Check logs
pm2 logs promptflow
# or
heroku logs --tail
```

### Videos not uploading
- Check storage permissions
- Verify disk space
- Check API rate limits

### Database connection errors
- Verify connection string
- Check database is running
- Verify credentials

---

**Need help?** Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

Happy deploying! 🎉
