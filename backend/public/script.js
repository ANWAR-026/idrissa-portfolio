const apiBaseUrl = '/api';

async function fetchJson(path) {
  const response = await fetch(`${apiBaseUrl}${path}`);
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || response.statusText);
  }
  return response.json();
}

function renderAbout(data) {
  const about = data.data;
  const container = document.getElementById('about-content');
  container.innerHTML = `
    <p><strong>${about.title}</strong></p>
    <p>${about.bio}</p>
    <p><strong>Email:</strong> ${about.email}</p>
    <p><strong>Phone:</strong> ${about.phone}</p>
    <p><strong>Location:</strong> ${about.location}</p>
  `;
}

function renderSkills(data) {
  const skills = data.data;
  const container = document.getElementById('skills-content');
  container.innerHTML = skills.map(group => `
    <div class="skill-group">
      <h3>${group.category}</h3>
      <p>${group.items.join(', ')}</p>
    </div>
  `).join('');
}

function renderProjects(data) {
  const projects = data.data;
  const container = document.getElementById('projects-content');
  container.innerHTML = projects.map(project => `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
      <p><a href="${project.link}" target="_blank" rel="noopener noreferrer">View project</a></p>
      <img src="${project.image}" alt="${project.title}" />
    </div>
  `).join('');
}

function showMessage(message, type = 'success') {
  const result = document.getElementById('contact-result');
  result.innerHTML = `<div class="message ${type}">${message}</div>`;
}

async function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const payload = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim()
  };

  try {
    const response = await fetch(`${apiBaseUrl}/contact/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Failed to submit');

    showMessage(result.message || 'Message sent successfully.');
    form.reset();
  } catch (error) {
    showMessage(error.message, 'error');
  }
}

async function loadData() {
  try {
    const aboutData = await fetchJson('/portfolio/about/info');
    renderAbout(aboutData);
  } catch (error) {
    document.getElementById('about-content').textContent = `Unable to load about info: ${error.message}`;
  }

  try {
    const skillsData = await fetchJson('/portfolio/skills/all');
    renderSkills(skillsData);
  } catch (error) {
    document.getElementById('skills-content').textContent = `Unable to load skills: ${error.message}`;
  }

  try {
    const projectsData = await fetchJson('/portfolio');
    renderProjects(projectsData);
  } catch (error) {
    document.getElementById('projects-content').textContent = `Unable to load projects: ${error.message}`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);
});
