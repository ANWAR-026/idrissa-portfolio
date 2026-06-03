import express from 'express';
import * as contactController from '../controllers/contactController.js';

const router = express.Router();

// GET contact details
router.get('/info', contactController.getContactInfo);

// POST contact form submission
router.post('/submit', contactController.submitContactForm);

export default router;
