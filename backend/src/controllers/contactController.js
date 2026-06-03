const contactInfo = {
  email: 'contact@idirissa.com',
  phone: '+1 (123) 456-7890',
  location: 'Nairobi, Kenya',
  website: 'https://idirissa-portfolio.onrender.com',
  linkedin: 'https://linkedin.com/in/idirissa'
};

// Contact form handler
export const submitContactForm = (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    console.log('New contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: {
        id: Date.now(),
        name,
        email,
        subject,
        receivedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form'
    });
  }
};

export const getContactInfo = (req, res) => {
  try {
    res.json({ success: true, data: contactInfo });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
