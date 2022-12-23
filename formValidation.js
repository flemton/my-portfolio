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

const Name = document.querySelector('#name');
const Msg = document.querySelector('#msg');

form.addEventListener('submit', () => {
  let storeData = {
    name: Name.value,
    email: Email.value,
    msg: Msg.value
  };
  localStorage.setItem('data', JSON.stringify(storeData));
});
