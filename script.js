// Modal Items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closedBtn = document.querySelector('.close-btn');

// Popup Event

window.onload = function(){
    setTimeout(function(){
        modal.style.display = 'block'; 
    },2000)
}

// Click events
closedBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
})


// Form Validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');


// Show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// Show valid Message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid'; 
}

// Check Required fields
function checkRequiered(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`)
        } else {
            showValid(input);
        }
    })
}

// Check the input length
function checkLength(input, min, max) {
    if(input.value.length <min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length >max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showValid(input);
    }
}

// Get Field Name
function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequiered([name, email]);
    checkLength(name, 2, 30)
})

// Inspiration from https://www.youtube.com/watch?v=Dn4_kkmeVqI and https://youtu.be/U2k4DWKt_FE?t=601