// read form element
const form = document.getElementById('form');
const vorname = document.getElementById('vorname');
const nachname = document.getElementById('nachname');
const email = document.getElementById('email');
const telefon = document.getElementById('telefon');
const antwort = document.getElementById('antwort');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} ist anzugeben.`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email-Adresse ist nicht gültig');
  }
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input,
        `${getFieldName(input)} muss mindestens ${min} Zeichen haben`
    );
  } else if (input.value.length > max) {
    showError(input,
        `${getFieldName(input)} darf nicht mehr als ${max} Zeichen haben`
    );
  } else {
    showSuccess(input);
  }
}

// Check if a radio button is checked
function checkAntwort(input) {
  if (input.checked) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} ist anzugeben.`);
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Validate form input elements
function validateForm(){
  if(!checkRequired([vorname, nachname, email, telefon, antwort])){
    checkLength(vorname, 3, 15);
    checkLength(nachname, 3, 15);
    checkLength(telefon, 10, 13);
    checkEmail(email);
    checkAntwort(antwort);
  }
}


// Event listeners
form.addEventListener('submit', function(e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
});
