// Works section
// const portfolio = document.createElement('section');
// portfolio.id = 'portfolio';
// headline.append(portfolio);
const works = document.createElement('article');
works.className = 'works';

const Projects = [
  {
    name: 'Conference Page',
    description: 'his is the Capstone project (week 5) for Module 1 at Microverse, where we apply everything learnt throughout the module from week one to week 4.',
    featuredImage: './img/conference-page.png',
    details: {
      DName: 'Conference',
      skill: 'Front End Dev',
      year: '2023',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    live: 'https://flemton.github.io/capstone1/',
    source: 'https://github.com/flemton/capstone1',
  },
  {
    name: 'Awesome Books with ES6',
    description: 'Awesome books project built to add and remove books and their corresponding authors with the help of localstorage for data persistence built using HTML, CSS and JavaScript (es6 syntax).',
    featuredImage: './img/awesome-books-es6.png',
    details: {
      DName: 'Books',
      skill: 'Front and Back End Dev',
      year: '2023',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JS(ES6)',
    },
    live: 'https://flemton.github.io/awesome-books-es6',
    source: 'https://github.com/flemton/awesome-books-es6',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/portfolio-tonic1.png',
    details: {
      DName: 'canopy',
      skill: 'Back End Dev',
      year: '2022',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    live: ' ',
    source: ' ',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/portfolio-stories2.png',
    details: {
      DName: 'canopy',
      skill: 'Back End Dev',
      year: '2022',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    live: ' ',
    source: ' ',
  },
];

Projects.forEach((Project) => {
  works.innerHTML += `
  <li class="categories">
  <div class="categories-img"> <img src="${Project.featuredImage}" alt="${Project.name} Image"></div>
  <div class="left-block">
        <h2 class="project-title">${Project.name}</h2>
      <span class="canopy">
            ${Project.details.DName}
          <ul>
              <li><img src="./img/counter.png" alt=""></li>
            <li>
              ${Project.details.skill}
            </li>
              <li><img src="./img/counter.png" alt=""></li>
            <li>
              ${Project.details.year}
            </li>
          </ul>
      </span>
        <p>${Project.description}</p>
      <ul class="portfolio-tags">
            <li>${Project.technologies.first}</li>
            <li>${Project.technologies.second}</li>
            <li>${Project.technologies.third}</li>
      </ul> 
      <button type="button" class="project-links">See Project</button>
    </div>
  </li>
  `;
});

document.body.insertBefore(works, document.body.children[3]);

const popupDetails = document.querySelector('.popup');
function showProjectDetails() {
  popupDetails.style.display = 'flex';
}

const detailsButton = document.querySelectorAll('.project-links');
detailsButton.forEach((button) => {
  button.addEventListener('click', showProjectDetails);
});

const detailsCloseButton = document.querySelector('#popup-close');
function hideProjectDetails() {
  popupDetails.style.display = 'none';
}

detailsCloseButton.addEventListener('click', hideProjectDetails);