# Idirissa Portfolio Backend API

A professional Node.js/Express backend API for a portfolio website.

## Features

- ✨ Clean and organized code structure
- 🚀 Production-ready with deployment configurations
- 🔒 CORS enabled for secure frontend communication
- 📦 RESTful API endpoints
- 🛡️ Error handling and validation
- 🐳 Docker support for containerization

## Endpoints

### Portfolio
- `GET /api/portfolio` - Get all projects
- `GET /api/portfolio/:id` - Get a single project
- `GET /api/portfolio/skills/all` - Get all skills
- `GET /api/portfolio/about/info` - Get about information

### Contact
- `POST /api/contact/submit` - Submit contact form

### Health Check
- `GET /api/health` - Check server status

## Installation

1. Clone the repository
```bash
cd idrissa-portfolio/backend
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file from `.env.example`
```bash
cp .env.example .env
```

4. Update `.env` with your configuration
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## Development

Run the development server with hot reload:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Production

Build for production:
```bash
npm start
```

## Docker

Build Docker image:
```bash
docker build -t idirissa-portfolio-backend .
```

Run with Docker:
```bash
docker run -p 5000:5000 --env-file .env idirissa-portfolio-backend
```

## Deployment Options

- frontend: Deploy `frontend/` to Vercel as a static site.
- backend: Deploy `backend/` to Render as a Node.js web service.

### Heroku
1. Install Heroku CLI
2. Create Procfile (included)
3. Deploy: `git push heroku main`

### Vercel
- Use the `frontend/` folder to deploy a static frontend.

### AWS/DigitalOcean
- Use Docker image for deployment

### Railway.app / Render
- Use the `backend/` folder to deploy automatically

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Business logic
│   ├── routes/         # API routes
│   ├── middleware/     # Express middleware
│   ├── config/         # Configuration files
│   ├── app.js          # Express app setup
│   └── index.js        # Server entry point
├── package.json        # Dependencies
├── .env.example        # Environment template
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker compose
└── Procfile           # Deployment configuration
```

## License

MIT License - Feel free to use this template!
