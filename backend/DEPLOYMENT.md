# Deployment Guide

## Quick Deployment Options

### 1. **Railway.app** (Recommended - Easiest)
- Go to [railway.app](https://railway.app)
- Connect GitHub repository
- Select backend folder
- Auto-deploy on push

**Benefits:** Free tier, auto-scaling, easy setup

### 2. **Render**
- Go to [render.com](https://render.com)
- Create Web Service
- Connect GitHub
- Set root directory to `backend`
- Deploy

**Benefits:** Free tier, auto-restart, good uptime

### 3. **Heroku**
```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

### 4. **Vercel** (Serverless)
- Works with Vercel serverless functions
- Good for APIs

### 5. **DigitalOcean App Platform**
- Connect GitHub
- Select repository
- Auto-deploy from git push

### 6. **AWS EC2/Elastic Beanstalk**
- More complex setup
- Use Docker for containerization

## Environment Variables to Set

In your deployment platform, add these environment variables:

```
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

## Post-Deployment

1. Test health check endpoint:
   ```
   https://your-api-domain.com/api/health
   ```

2. Test portfolio endpoint:
   ```
   https://your-api-domain.com/api/portfolio
   ```

3. Update frontend to use your deployed API URL

## Monitoring

- Check logs in your deployment platform
- Monitor error rates
- Set up alerts for failures

## Database Setup (Future)

When ready to add database:
1. Add MongoDB/PostgreSQL connection string to .env
2. Create database models
3. Update controllers to use database instead of sample data
