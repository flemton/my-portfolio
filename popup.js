//Works section
//const portfolio = document.createElement('section');
//portfolio.id = 'portfolio';
//headline.append(portfolio);
const works = document.createElement('article');
works.className = 'works';

const Projects = [
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
    live: 'none',
    source: 'none',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/portfolio-stories1.png',
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
    live: 'none',
    source: 'none',
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
  }
];

let content = '';
Projects.forEach((Project) => {
  const content = `
  <li class="categories">
  <div class="categories-img"> <img src="${Project.featuredImage}" alt="Tonic Category Image"></div>
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
  works.innerHTML += content;
});

document.body.insertBefore(works, document.body.children[3]);

const popupDetails = document.querySelector('.popup');
function showProjectDetails(){
  popupDetails.style.display = 'flex';
}

const detailsButton = document.querySelectorAll('.project-links');
for (button of detailsButton){
  button.addEventListener('click', showProjectDetails);
}

const detailsCloseButton = document.querySelector('#popup-close');
function hideProjectDetails(){
  popupDetails.style.display = 'none';
}

detailsCloseButton.addEventListener('click', hideProjectDetails);