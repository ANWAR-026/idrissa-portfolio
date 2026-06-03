// Sample portfolio data - replace with database later
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com/idirissa/ecommerce',
    image: 'https://via.placeholder.com/300x200?text=Ecommerce'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/idirissa/task-app',
    image: 'https://via.placeholder.com/300x200?text=TaskApp'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information dashboard',
    technologies: ['React', 'API Integration', 'Tailwind CSS'],
    link: 'https://github.com/idirissa/weather-dashboard',
    image: 'https://via.placeholder.com/300x200?text=Weather'
  }
];

const skillsData = {
  categories: [
    { category: 'Frontend', items: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'] }
  ],
  certifications: [
    'AWS Certified Machine Learning - Specialty',
    'Google Data Analytics Professional',
    'IBM Data Science Professional Certificate'
  ],
  tools: ['Git', 'Docker', 'Figma', 'Jupyter', 'VS Code']
};

const education = [
  {
    institution: 'University of Nairobi',
    degree: 'B.Sc. in Computer Science',
    period: '2017 - 2021',
    description: 'Focused on software engineering, data analysis, and machine learning foundations.'
  },
  {
    institution: 'Data Science Academy',
    degree: 'Certificate in Machine Learning',
    period: '2022',
    description: 'Completed practical training in predictive modeling, NLP, and model deployment.'
  }
];

const experience = [
  {
    company: 'Tech Solutions Ltd.',
    role: 'Junior Data Scientist',
    period: '2022 - 2024',
    description: 'Built data pipelines, trained machine learning models, and delivered actionable insights for clients.'
  },
  {
    company: 'AI Innovate',
    role: 'Machine Learning Engineer Intern',
    period: '2021 - 2022',
    description: 'Developed end-to-end ML workflows and collaborated on deployment of predictive solutions.'
  }
];

const aboutInfo = {
  name: 'Idirissa',
  title: 'Full Stack Developer',
  bio: 'Passionate about building beautiful and functional web applications. Always learning and exploring new technologies and data-driven solutions.',
  email: 'contact@idirissa.com',
  phone: '+1 (123) 456-7890',
  location: 'Nairobi, Kenya',
  specializations: ['Data Science', 'Machine Learning', 'AI Systems'],
  languages: ['English', 'French']
};

// Get all projects
export const getAllProjects = (req, res) => {
  try {
    res.json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get project by ID
export const getProjectById = (req, res) => {
  try {
    const { id } = req.params;
    const project = projects.find(p => p.id === parseInt(id));
    
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get skills
export const getSkills = (req, res) => {
  try {
    res.json({ success: true, data: skillsData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get education
export const getEducation = (req, res) => {
  try {
    res.json({ success: true, data: education });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get experience
export const getExperience = (req, res) => {
  try {
    res.json({ success: true, data: experience });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get about info
export const getAboutInfo = (req, res) => {
  try {
    res.json({ success: true, data: aboutInfo });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
