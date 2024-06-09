// Validate Card number
// Validate american express
let card_number = document.getElementById('cardNumber');
let cardInput = document.querySelector(".cardInput");
let amexpress = document.getElementById('amexpress')
let visa = document.getElementById('visa')
let master = document.getElementById('master');
let rupay = document.getElementById('rupay');
let cardValue = card_number.value;

let isValidCard = false;
let isValidExpiry = false;
let isValidCVV = false;
let isValidName = false;
const fields = [
    { id: 'cardNumber', errorId: 'cardNumberError' },
    // { id: 'cardExpiry', errorId: 'cardExpiryError' },
    // { id: 'cardCvv', errorId: 'cardCvvError' },
    // { id: 'cardOwnerName', errorId: 'cardOwnerNameError' }
];

fields.forEach(field => {
    const input = document.getElementById(field.id);
    input.addEventListener('focusout', () => validateField(field.id, field.errorId), amexValidator);
});

function validateField(fieldId, errorId) {
    const input = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    if (!input.value) {
        input.parentElement.classList.add('error');
        errorElement.style.display = 'block';
        rupay.classList.remove('show')
    } else {
        console.log(isValidCard);
        if (isValidCard) {
            input.parentElement.classList.remove('error');
            errorElement.style.display = 'none';
        }
        else {
            input.parentElement.classList.add('error');
            errorElement.style.display = 'block';
            console.log('InValid card....');
        }
    }

    updateIsAllFields();
}

function updateIsAllFields() {
    isAllFields = fields.every(field => document.getElementById(field.id).value);

}

function getRandom9DigitNumber() {
    const min = 100000000; // Minimum 9-digit number
    const max = 999999999; // Maximum 9-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let generated_id = document.getElementById('generated_id');
let process_transaction_id = document.querySelector('.process_transaction_id');
let tempTransId = getRandom9DigitNumber();
generated_id.textContent = tempTransId
process_transaction_id.textContent = 'Transaction id: ' + tempTransId





// Error
let cardNumberError = document.getElementById('cardNumberError');

let inputField = document.getElementById('cardNumber');

card_number.addEventListener('input', () => {
    let startPos = inputField.selectionStart;
    let cardNumber = card_number.value.replace(/\D/g, '');
    let formattedNumber = cardNumber.match(/.{1,4}/g).join('-');
    let diff = formattedNumber.length - cardNumber.length;

    card_number.value = formattedNumber;

    let newPos = startPos + diff;
    if (startPos === 5 || startPos === 10 || startPos === 15) {
        newPos++;
    }

    inputField.setSelectionRange(startPos + diff, startPos + diff);
})

/**
 * 
 * Validate Card number
 * 
 */


card_number.addEventListener('keyup', (event) => {
    amexpress.classList.remove('show');
    visa.classList.remove('show');
    master.classList.remove('show');
    rupay.classList.remove('show');

    let isValidKey = /^[0-9\s]*$/.test(event.key) || event.key === 'Backspace' || event.ctrlKey && (event.key === 'v' || event.key === 'c' || event.key === 'a' || event.key === 'x');

    if (!isValidKey) {
        event.preventDefault();
    }
    let temp = card_number.value
    if (amexValidator(temp.replace(/\D/g, ''))) {
        amexpress.classList.add('show');
        document.getElementById('cardCvv').maxLength = 4;
        isValidCard = true;
        isValidAll();
        card_number.parentElement.classList.remove('error');
        cardNumberError.textContent = '';
        cardNumberError.style.display = 'none'
    } else if (visaValidator(temp.replace(/\D/g, ''))) {
        visa.classList.add('show');
        isValidCard = true;
        isValidAll();
        card_number.parentElement.classList.remove('error');
        cardNumberError.textContent = '';
        cardNumberError.style.display = 'none'
    } else if (masterValidator(temp.replace(/\D/g, ''))) {
        master.classList.add('show');
        isValidCard = true;
        isValidAll();
        card_number.parentElement.classList.remove('error');
        cardNumberError.textContent = '';
        cardNumberError.style.display = 'none'
    } else if (ruPayValidator(temp.replace(/\D/g, ''))) {
        rupay.classList.add('show');
        isValidCard = true;
        isValidAll();
        console.log('Rupay validator... running', isValidCard);
        card_number.parentElement.classList.remove('error');
        cardNumberError.textContent = '';
        cardNumberError.style.display = 'none'
    }
    else {
        amexpress.classList.remove('show');
        visa.classList.remove('show');
        master.classList.remove('show');
        rupay.classList.remove('show');
        isValidCard = false;
        isValidAll();
        card_number.parentElement.classList.add('error');
        cardNumberError.textContent = 'Invalid card number';
        cardNumberError.style.display = 'block'
    }


})
function amexValidator(inputtxt) {
    var cardno = /^(?:3[47][0-9]{13})$/;
    return inputtxt.match(cardno) ? true : false
}
function visaValidator(inputtxt) {
    var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    return inputtxt.match(cardno) ? true : false

}

function masterValidator(inputtxt) {
    var cardno = /^(?:5[1-5][0-9]{14})$/;
    return inputtxt.match(cardno) ? true : false
}


function ruPayValidator(value) {

    let nCheck = 0;
    if (value && /[0-9-\s]+/.test(value)) {
        value = value.replace(/\D/g, '');

        value.split('').forEach((v, n) => {
            let nDigit = parseInt(v, 10);

            if (!((value.length + n) % 2) && (nDigit *= 2) > 9) {
                nDigit -= 9;
            }

            nCheck += nDigit;
        });
    }
    if ((nCheck % 10) === 0) {
        isValidCard = true;
        rupay.classList.add('show');
        return true;
    } else {
        rupay.classList.remove('show');
        return false;
    }
}


/**
 * 
 * Validate Expiry date
 * 
 */

function formatExpiryDate(inputField) {
    let startPos = inputField.selectionStart;
    let expiryDate = inputField.value.replace(/\D/g, '');
    let formattedDate = expiryDate.match(/.{1,2}/g)?.join('/') || '';

    inputField.value = formattedDate;

    let newPos = startPos;
    if (startPos === 3 && event.inputType !== 'deleteContentBackward') {
        newPos++;
    }

    inputField.setSelectionRange(newPos, newPos);
}
let expiryDateInput = document.getElementById('cardExpiry');

expiryDateInput.addEventListener('input', function (event) {
    formatExpiryDate(expiryDateInput);
});

let keyPressCount = 0;

let cardExpiryError = document.getElementById('cardExpiryError');

expiryDateInput.addEventListener('keyup', function (event) {

    let isValidKey = /^[0-9]$/.test(event.key) || event.key === 'Backspace';
    if (!isValidKey) {
        event.preventDefault();
    }
    keyPressCount++;
    if (keyPressCount > 3) {
        let temp_expiry = expiryDateInput.value;
        temp_expiry = temp_expiry.split('/');

        let today = new Date();
        let currentYear = today.getFullYear() % 100;

        let month = new Date();
        let currentMonth = month.getMonth() + 1;


        if (currentYear <= parseInt(temp_expiry[1])) {
            if (currentMonth <= parseInt(temp_expiry[0])) {
                cardExpiryError.textContent = '';
                isValidExpiry = true;
                isValidAll();
            } else {
                console.log('invalid month');
                cardExpiryError.textContent = 'Expiry cannot be in past';
                isValidExpiry = false;
                isValidAll()
            }
        } else {
            cardExpiryError.textContent = 'Expiry cannot be in past';
            console.log('invalid');
            isValidExpiry = false;
            isValidAll()
        }
    }

});

expiryDateInput.addEventListener('focusout', (e) => {
    console.log('Valid expiry', isValidExpiry);
    if (!expiryDateInput.value) {
        expiryDateInput.parentElement.classList.add('error');
        cardExpiryError.style.display = 'block';
        cardExpiryError.textContent = "Expiry is required"
    } else {
        if (isValidExpiry) {
            expiryDateInput.parentElement.classList.remove('error');
            cardExpiryError.style.display = 'none';
        } else {
            expiryDateInput.parentElement.classList.add('error');
            cardExpiryError.style.display = 'block';
            cardExpiryError.textContent = "Expiry cannot be in past"
        }

    }
})

/**
 * Validate cvv
 * 
 */

let cardCvv = document.getElementById('cardCvv');
cardCvv.addEventListener('keyup', function (cvv) {
    var cvvPattern = /^[0-9]{3,4}$/;
    if (cvv.target.value) {
        if (cvvPattern.test(cvv.target.value)) {
            isValidCVV = true;
            isValidAll();
        } else {
            console.log('Invalid cvv');
            isValidCVV = false;
            isValidAll()
        }
    } else {
        isValidCVV = false;
        isValidAll()
    }
});

let cardCvvError = document.getElementById('cardCvvError');
cardCvv.addEventListener('focusout', (e) => {
    console.log('validCVV', isValidCVV);
    if (!cardCvv.value) {
        cardCvv.parentElement.classList.add('error');
        cardCvvError.style.display = 'block';
        cardCvvError.textContent = "CVV is required"
    } else {
        if (isValidCVV) {
            cardCvv.parentElement.classList.remove('error');
            cardCvvError.style.display = 'none';
        } else {
            cardCvv.parentElement.classList.add('error');
            cardCvvError.style.display = 'block';
            cardCvvError.textContent = "CVV is invalid"
        }
    }
})
/**
 * 
 * Validate Card owner name
 * 
 */
let cardOwnerName = document.getElementById('cardOwnerName');
let nameErrorMessage = document.getElementById('cardOwnerNameError');

cardOwnerName.addEventListener('keyup', function (e) {
    var namePattern = /^[a-zA-Z\s]*$/;
    console.log(e.target.value.length);
    if (e.target.value) {
        if (namePattern.test(e.target.value)) {
            console.log('Valid name');
            cardOwnerName.parentElement.classList.remove('error');
            nameErrorMessage.style.display = "none"
            nameErrorMessage.textContent = '';
            isValidName = true;
            isValidAll()
        } else {
            console.log('Invalid name');
            cardOwnerName.parentElement.classList.add('error');
            nameErrorMessage.style.display = "block"
            nameErrorMessage.textContent = "Invalid name format"
            isValidName = false;
            isValidAll()
        }
    } else {
        isValidName = false;
        isValidAll()
    }
    // return namePattern.test(name);
})

cardOwnerName.addEventListener('focusout', (e) => {
    console.log(isValidName);
    if (!cardOwnerName.value) {
        cardOwnerName.parentElement.classList.add('error');
        nameErrorMessage.style.display = 'block';
        nameErrorMessage.textContent = "Name is required"
    } else {
        if (isValidName) {
            cardCvv.parentElement.classList.remove('error');
            nameErrorMessage.style.display = 'none';
        } else {
            cardOwnerName.parentElement.classList.add('error');
            nameErrorMessage.style.display = 'block';
            nameErrorMessage.textContent = "Invalid name format"
        }
    }
})


let submit_btn = document.querySelector('.common-btn ');
function isValidAll() {
    console.log('Valid rupay:', isValidCard);
    if (isValidCVV && isValidCard && isValidExpiry && isValidName) {
        submit_btn.classList.add('btn-ready')
        submit_btn.removeAttribute('disabled')

    } else {
        submit_btn.classList.remove('btn-ready')
        console.log('Is not valid');
    }
}

let proceed_container = document.querySelector('.proceed_container');
submit_btn.addEventListener('click', function (e) {
    e.preventDefault();
    proceed_container.classList.add('process_payment');
    console.log('proceed_container');
})