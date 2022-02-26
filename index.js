const email = document.getElementById("email");
const button = document.getElementById("submit");
const emailError = document.getElementById("alert");
const emailSuccess = document.getElementById('success');

const isValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

button.addEventListener('click', function(e) {

  let value = email.value;

  if (value === "" || !isValid(value)) {
    email.classList.add('email-error');
    emailError.innerText = 'Please provide a valid email address...';
    e.preventDefault();
  }

  else {
    email.value = '' ;
    email.classList.add('email-success');
    emailSuccess.innerText = 'Email sent successfully!';
    e.preventDefault();
  }
  })