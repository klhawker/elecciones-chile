const candidates = [
  { name: 'Evelyn Matthei', file: 'evelyn-matthei.html', summary: 'Alcaldesa de Providencia y exministra.' },
  { name: 'José Antonio Kast', file: 'jose-antonio-kast.html', summary: 'Fundador del Partido Republicano.' },
  { name: 'Carolina Tohá', file: 'carolina-toha.html', summary: 'Ministra del Interior y exalcaldesa de Santiago.' },
  { name: 'Johannes Kaiser', file: 'johannes-kaiser.html', summary: 'Diputado e influencer de derecha.' },
  { name: 'Gonzalo Winter', file: 'gonzalo-winter.html', summary: 'Diputado por Convergencia Social.' },
  { name: 'Jeannette Jara', file: 'jeannette-jara.html', summary: 'Ministra del Trabajo y militante PC.' }
];

function createCard(data, delay) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = data.file;
  link.textContent = data.name;
  const p = document.createElement('p');
  p.className = 'summary';
  p.textContent = data.summary;
  li.appendChild(link);
  li.appendChild(p);
  li.addEventListener('mouseenter', () => p.style.display = 'block');
  li.addEventListener('mouseleave', () => p.style.display = 'none');
  setTimeout(() => li.classList.add('visible'), delay);
  return li;
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('candidate-list');
  candidates.forEach((c, i) => list.appendChild(createCard(c, i * 100)));

  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? 'Modo claro' : 'Modo oscuro';
  });
});
