const form = document.querySelector('form');
const email = form.querySelector('#Email');

const regex = /[A-Z]/;

const message = document.createElement('p');
message.className = 'error-message';
message.innerText = 'Please submit your email in lower case';
