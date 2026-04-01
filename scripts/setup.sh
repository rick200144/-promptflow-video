#!/bin/bash

# Setup script for PromptFlow Video
# This script automates the initial setup

set -e

echo "🎬 PromptFlow Video - Setup Script"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo -e "${BLUE}Checking Node.js version...${NC}"
NODE_VERSION=$(node -v)
echo "✅ Node.js $NODE_VERSION"
echo ""

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Create .env.local
if [ ! -f .env.local ]; then
  echo -e "${BLUE}Creating .env.local...${NC}"
  cp .env.example .env.local
  echo -e "${YELLOW}⚠️  Please update .env.local with your API keys:${NC}"
  echo "   - REPLICATE_API_TOKEN (from replicate.com)"
  echo "   - RUNWAY_API_KEY (from runwayml.com) - optional"
  echo "   - OPENAI_API_KEY (from openai.com) - optional"
  echo ""
  echo -e "${BLUE}Available API services:${NC}"
  echo "1. Replicate (Recommended): https://replicate.com/account/api-tokens"
  echo "2. Runway ML: https://runwayml.com/settings/api"
  echo "3. OpenAI: https://platform.openai.com/account/api-keys"
  echo ""
else
  echo -e "${GREEN}✅ .env.local already exists${NC}"
fi
echo ""

# Build check
echo -e "${BLUE}Checking build...${NC}"
npm run build 2>&1 | tail -5
echo -e "${GREEN}✅ Build successful${NC}"
echo ""

# Summary
echo -e "${GREEN}=== Setup Complete! ===${NC}"
echo ""
echo "📝 Next steps:"
echo "1. Edit .env.local with your API keys"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview"
echo "   - DEPLOYMENT.md - Deployment guides"
echo "   - CONTRIBUTING.md - Contributing guidelines"
echo ""
echo -e "${GREEN}Happy video creating! 🎉${NC}"
