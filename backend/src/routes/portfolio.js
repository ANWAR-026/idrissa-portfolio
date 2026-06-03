import express from 'express';
import * as portfolioController from '../controllers/portfolioController.js';

const router = express.Router();

// GET all portfolio items
router.get('/', portfolioController.getAllProjects);

// GET skills
router.get('/skills/all', portfolioController.getSkills);

// GET about info
router.get('/about/info', portfolioController.getAboutInfo);

// GET a single portfolio item
router.get('/:id', portfolioController.getProjectById);

export default router;
