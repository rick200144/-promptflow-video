#!/bin/bash

# Script to run the development server with proper environment setup

set -e

echo "🚀 Starting PromptFlow Video Development Server"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Copying from .env.example..."
    cp .env.example .env.local
    echo "✅ Created .env.local"
    echo ""
    echo "⚠️  IMPORTANT: Update .env.local with your API keys before starting!"
    echo "   Edit .env.local and add:"
    echo "   - REPLICATE_API_TOKEN=your_token_here"
    echo ""
    exit 1
fi

# Check if dependencies are installed
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clear Next.js cache
rm -rf .next

echo "✅ Environment ready"
echo ""
echo "📝 Server starting on http://localhost:3000"
echo ""

# Start development server
npm run dev
