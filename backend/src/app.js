import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import portfolioRoutes from './routes/portfolio.js';
import contactRoutes from './routes/contact.js';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Root API info
app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Idirissa Portfolio Backend API',
    api: {
      health: '/api/health',
      portfolio: '/api/portfolio',
      about: '/api/portfolio/about/info',
      skills: '/api/portfolio/skills/all',
      education: '/api/portfolio/education',
      experience: '/api/portfolio/experience',
      contact: '/api/contact/submit'
    }
  });
});

// Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
