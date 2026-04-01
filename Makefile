# Makefile for PromptFlow Video

.PHONY: help install dev build start lint format clean test docker-build docker-up docker-down

help:
	@echo "PromptFlow Video - Available Commands"
	@echo ""
	@echo "Setup:"
	@echo "  make install      Install dependencies"
	@echo "  make env          Create .env.local from example"
	@echo ""
	@echo "Development:"
	@echo "  make dev          Start development server"
	@echo "  make lint         Run ESLint"
	@echo "  make format       Format code with Prettier"
	@echo "  make type-check   Run TypeScript type checking"
	@echo ""
	@echo "Production:"
	@echo "  make build        Build for production"
	@echo "  make start        Start production server"
	@echo ""
	@echo "Docker:"
	@echo "  make docker-build Build Docker image"
	@echo "  make docker-up    Start Docker containers"
	@echo "  make docker-down  Stop Docker containers"
	@echo "  make docker-logs  View Docker logs"
	@echo ""
	@echo "Utilities:"
	@echo "  make clean        Remove build artifacts"
	@echo "  make test         Run tests"

# Setup targets
install:
	npm install

env:
	@if [ ! -f .env.local ]; then \
		cp .env.example .env.local; \
		echo "✅ Created .env.local - Update with your API keys"; \
	else \
		echo "⚠️  .env.local already exists"; \
	fi

# Development targets
dev:
	npm run dev

lint:
	npm run lint

format:
	npm run format || npx prettier --write .

type-check:
	npx tsc --noEmit

test:
	npm test

# Production targets
build:
	npm run build

start:
	npm start

# Docker targets
docker-build:
	docker build -t promptflow-video .

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f app

docker-clean:
	docker-compose down -v

# Utility targets
clean:
	rm -rf .next build dist node_modules
	npm install

logs:
	npm logs

# Development server + build in parallel
all: install lint build start

# Quick setup (install + env + dev)
quick-start: install env dev

# Full clean rebuild
rebuild: clean install build start
