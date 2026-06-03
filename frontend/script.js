const apiBaseUrl = window.API_BASE_URL || 'https://YOUR_RENDER_APP.onrender.com/api';
const typedWords = ['Data Scientist', 'ML Engineer'];
let typedIndex = 0;
let charIndex = 0;
let deleting = false;

async function fetchJson(path) {
  const response = await fetch(`${apiBaseUrl}${path}`);
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || response.statusText);
  }
  return response.json();
}

function animateTyping() {
  const typedElement = document.getElementById('typed-text');
  const currentWord = typedWords[typedIndex];

  if (!deleting) {
    typedElement.textContent = currentWord.slice(0, charIndex + 1);
    charIndex += 1;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(animateTyping, 1400);
      return;
    }
  } else {
    typedElement.textContent = currentWord.slice(0, charIndex - 1);
    charIndex -= 1;

    if (charIndex === 0) {
      deleting = false;
      typedIndex = (typedIndex + 1) % typedWords.length;
    }
  }

  setTimeout(animateTyping, deleting ? 80 : 120);
}

function renderAbout(data) {
  document.getElementById('about-bio').textContent = data.bio;
  document.getElementById('about-specializations').textContent = data.specializations.join(' • ');
  document.getElementById('about-languages').textContent = data.languages.join(' • ');
  document.getElementById('about-email').textContent = data.email;
  document.getElementById('about-location').textContent = data.location;
}

function renderSkills(data) {
  const categories = data.categories;
  const certifications = data.certifications;
  const tools = data.tools;

  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = categories.map(category => `
    <div class="skill-category">
      <h4>${category.category}</h4>
      <p>${category.items.join(', ')}</p>
    </div>
  `).join('');

  document.getElementById('skills-certifications').innerHTML = certifications.map(item => `<li>${item}</li>`).join('');
  document.getElementById('skills-tools').innerHTML = tools.map(item => `<li>${item}</li>`).join('');
}

function renderListItems(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => `
    <article class="timeline-card">
      <h4>${item.institution || item.company}</h4>
      <p class="timeline-role">${item.degree || item.role}</p>
      <p class="timeline-period">${item.period}</p>
      <p>${item.description}</p>
    </article>
  `).join('');
}

function renderContactInfo(data) {
  document.getElementById('contact-email').textContent = data.email;
  document.getElementById('contact-phone').textContent = data.phone;
  document.getElementById('contact-location').textContent = data.location;
  document.getElementById('contact-linkedin').innerHTML = `<a href="${data.linkedin}" target="_blank" rel="noopener noreferrer">${data.linkedin}</a>`;
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
    const aboutResponse = await fetchJson('/portfolio/about/info');
    renderAbout(aboutResponse.data);
  } catch (error) {
    document.getElementById('about-bio').textContent = `Unable to load about info: ${error.message}`;
  }

  try {
    const skillsResponse = await fetchJson('/portfolio/skills/all');
    renderSkills(skillsResponse.data);
  } catch (error) {
    document.getElementById('skills-list').textContent = `Unable to load skills: ${error.message}`;
  }

  try {
    const educationResponse = await fetchJson('/portfolio/education');
    renderListItems('education-list', educationResponse.data);
  } catch (error) {
    document.getElementById('education-list').textContent = `Unable to load education: ${error.message}`;
  }

  try {
    const experienceResponse = await fetchJson('/portfolio/experience');
    renderListItems('experience-list', experienceResponse.data);
  } catch (error) {
    document.getElementById('experience-list').textContent = `Unable to load experience: ${error.message}`;
  }

  try {
    const contactResponse = await fetchJson('/contact/info');
    renderContactInfo(contactResponse.data);
  } catch (error) {
    document.getElementById('contact-email').textContent = `Unable to load contact info: ${error.message}`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  animateTyping();
  loadData();
  document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);
});
