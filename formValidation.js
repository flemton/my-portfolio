const form = document.querySelector('form');
const Email = form.querySelector('#mail');

const regex = /[A-Z]/;

const error = document.createElement('p');
error.className = 'Message';
error.innerText = 'Please submit your email in lower case';

function validate(a) {
  return regex.test(a);
}

form.addEventListener('submit', (e) => {
  if (validate(Email.value)) {
    form.insertBefore(error, form.children[3]);
    e.preventDefault();
  }
});

// Form data persistence
const { name, mail, msg } = form.elements;

const formValues = JSON.parse(localStorage.getItem('contactForm')) || {
  name: '',
  mail: '',
  msg: '',
};

const loadInputValuesStored = () => {
  name.value = formValues.name;
  mail.value = formValues.mail;
  msg.value = formValues.msg;
};

loadInputValuesStored();
const saveOnLocalStorage = () => {
  localStorage.setItem('contactForm', JSON.stringify(formValues));
};
name.addEventListener('input', () => {
  formValues.name = name.value;
  saveOnLocalStorage();
});
mail.addEventListener('input', () => {
  formValues.mail = mail.value;
  saveOnLocalStorage();
});
msg.addEventListener('input', () => {
  formValues.msg = msg.value;
  saveOnLocalStorage();
});
