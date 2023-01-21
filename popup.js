// Works section
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
    name: 'Todo List',
    description: '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. built using ES6 and Webpack!',
    featuredImage: './img/todo-list.png',
    details: {
      DName: 'Todo',
      skill: 'Front and Back End Dev',
      year: '2023',
    },
    technologies: {
      first: 'ES6',
      second: 'NodeJS',
      third: 'Webpack',
    },
    live: 'https://flemton.github.io/todo-list/dist/',
    source: 'https://github.com/flemton/todo-list',
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

const popupDetails = document.createElement('section');
popupDetails.className = 'popup';

function showProjectDetails() {
  popupDetails.style.display = 'flex';
}

Projects.forEach((pop) => {
  popupDetails.innerHTML = `
    <div class="left-block">
      <button type="button" class="close" id="popup-close"><i class="fa-solid fa-xmark fa-lg"></i></button>
                <h2 class="popup-title">
                    ${pop.name}
                </h2>
                <span class="canopy">
                  ${pop.details.DName}
                    <ul>
                        <li><img src="./img/counter.png" alt=""></li>
                        <li>${pop.details.skill}</li>
                        <li><img src="./img/counter.png" alt=""></li>
                        <li>${pop.details.year}</li>
                    </ul>
                </span>
                <div class="detail-img">
                    <img src="${pop.featuredImage}" alt="${pop.name} Image">
                </div>
                    <div class="detail-container">
                        <p>${pop.description}</p>
                            <div>
                                <ul class="portfolio-tags">
                                    <li>
                                    ${pop.technologies.first}
                                    </li>
                                    <li>
                                    ${pop.technologies.second}
                                    </li>
                                    <li>
                                    ${pop.technologies.third}
                                    </li>
                                </ul>
                                <div class="link-buttons">
                                    <button type="button" class="project-links" onclick="location.href = '${pop.live}';">See Live
                                        <i><img src="./img/circle-icon.png" alt=""></i>
                                    </button>
                                    <button type="button" class="project-links" onclick="location.href = '${pop.source}';" id="see-source">See Source
                                        <i><img src="./img/github-blue.png" alt=""></i>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
      </div>
    `;
  document.body.insertBefore(popupDetails, document.body.children[2]);
});

const detailsButton = document.querySelectorAll('.project-links');
detailsButton.forEach((button) => {
  button.addEventListener('click', showProjectDetails);
});

const detailsCloseButton = document.querySelector('#popup-close');
function hideProjectDetails() {
  popupDetails.style.display = 'none';
}

detailsCloseButton.addEventListener('click', hideProjectDetails);