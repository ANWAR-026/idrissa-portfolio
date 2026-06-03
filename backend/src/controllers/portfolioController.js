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

const skills = [
  { category: 'Frontend', items: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'] }
];

const aboutInfo = {
  name: 'Idirissa',
  title: 'Full Stack Developer',
  bio: 'Passionate about building beautiful and functional web applications. Always learning and exploring new technologies.',
  email: 'contact@idirissa.com',
  phone: '+1 (XXX) XXX-XXXX',
  location: 'Your Location'
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
    res.json({ success: true, data: skills });
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
