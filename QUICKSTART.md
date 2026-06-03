# Quick Start Guide

## Getting Started with Backend

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:5000
Environment: development
```

### Step 3: Test the API

Open your browser or use curl:

**Health Check:**
```bash
curl http://localhost:5000/api/health
```

**Get All Projects:**
```bash
curl http://localhost:5000/api/portfolio
```

**Get About Info:**
```bash
curl http://localhost:5000/api/portfolio/about/info
```

**Submit Contact Form:**
```bash
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "Great portfolio!"
  }'
```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload
- `npm test` - Run tests (to be configured)

## Customization

### Update Portfolio Data

Edit [src/controllers/portfolioController.js](./src/controllers/portfolioController.js) to update:
- Projects/portfolio items
- Skills
- About information

### Add New Routes

1. Create route file in `src/routes/`
2. Create controller in `src/controllers/`
3. Import route in `src/app.js`

## Next Steps

1. ✅ Backend is running locally
2. 📦 Ready to deploy (see DEPLOYMENT.md)
3. 🎨 Create frontend (React/Vue)
4. 🔗 Connect frontend to this API

## Troubleshooting

**Port already in use:**
```bash
# Change PORT in .env
PORT=5001 npm run dev
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Module not found:**
```bash
# Make sure you're using Node 14+
node --version
```
