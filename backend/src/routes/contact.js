import express from 'express';
import * as contactController from '../controllers/contactController.js';

const router = express.Router();

// POST contact form submission
router.post('/submit', contactController.submitContactForm);

export default router;
