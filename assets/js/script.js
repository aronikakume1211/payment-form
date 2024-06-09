let info_down_arrow = document.getElementById('info_down_arrow');
let subtotal_invoice = document.getElementById('subtotal_invoice');
info_down_arrow.addEventListener('click', (icon) => {
    info_down_arrow.classList.toggle('close_subtotal_invoice');
    subtotal_invoice.classList.toggle('show')

})

// loginDetail_userIcon
let loginDetail_userIcon = document.getElementById('loginDetail_userIcon');
let loginDetail_DdBox = document.getElementById('loginDetail_DdBox');

loginDetail_userIcon.addEventListener('click', (icon) => {
    loginDetail_userIcon.classList.toggle('close_loginDetail_DdBox')
    loginDetail_DdBox.classList.toggle('show')
});

// Modal
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let learnmore = document.getElementById('learnmore');

learnmore.addEventListener('click', () => {
    modal.style.display = "block"
})

close_modal.addEventListener('click', () => {
    modal.style.display = "none";
})


// close cancel popup
let close_cancel_modal = document.querySelector('.close_cancel_modal');
let no_btn = document.getElementById('no');
let back_icon = document.querySelector('.back_icon');
let cancel_payment_modal = document.querySelector('.cancel_payment_modal');

back_icon.addEventListener('click', () =>{
    cancel_payment_modal.style.display = "flex";
});

no_btn.addEventListener('click', ()=>{
    cancel_payment_modal.style.display = "none";
})

close_cancel_modal.addEventListener('click', ()=>{
    cancel_payment_modal.style.display = "none";
})


// tooltip-img
let tooltip_img = document.querySelector('.tooltip-img');
let cvv_note_box = document.querySelector('.cvv-note-box');

tooltip_img.addEventListener('click', () => {
    cvv_note_box.style.display = 'flex';
})

let subDropdownLi = document.querySelectorAll('.subDropdown li');
let language = document.getElementById('language');


let translations = {
    English: {
        cardNumber: "Card Number",
        expiryLabel: 'Expiry',
        cvvLabel: 'CVV',
        nameLabel: "Name on Card",
        proceed: 'Proceed',
        ecommText: 'Please ensure your card is enabled for online transactions.',
        learnMore: 'Learn More',
        cardDetails: 'Enter card Details',
        payableNow: 'Payable Now',
        subTotal: 'Subtotal',
        transactionID: 'Transaction id',
        card: 'CARDS(CREDIT/DEBIT)',
        back: 'back',
        english: 'English'
    },
    हिंदी: {
        cardNumber: "कार्ड नंबर",
        expiryLabel: 'एक्स्पाइरी',
        cvvLabel: 'सीवीवी',
        nameLabel: "कार्ड पर नाम",
        proceed: 'आगे बढ़ें',
        ecommText: 'कृपया सुनिश्चित करें कि आपका कार्ड ऑनलाइन लेनदेन के लिए सक्षम है।',
        learnMore: 'अधिक जानकारी',
        cardDetails: 'कार्ड विवरण दर्ज करें',
        payableNow: 'अभी देय',
        subTotal: 'सबटोटल',
        transactionID: 'ट्रैंज़ैक्शन आईडी',
        card: 'कार्डस (क्रेडिट/डेबिट)',
        back: 'वापस',
        english: 'हिंदी'
    },
    ગુજરાતી: {
        cardNumber: "Card Number",
        expiryLabel: 'Expiry',
        cvvLabel: 'CVV',
        nameLabel: "Name on Card",
        proceed: 'Proceed',
        ecommText: 'Please ensure your card is enabled for online transactions.',
        learnMore: 'Learn More',
        cardDetails: 'Enter card Details',
        payableNow: 'Payable Now',
        subTotal: 'Subtotal',
        transactionID: 'Transaction id',
        card: 'CARDS(CREDIT/DEBIT)',
        back: 'back',
        english: 'English'
    }
};

let cardNumberLabel = document.getElementById('cardNumberLabel');
let payment_header_title = document.getElementById('payment_header_title');
let back = document.getElementById('back');
let payable = document.getElementById('payable');
let invoice_type = document.getElementById('invoice_type');
let transaction_id = document.getElementById('transaction_id');
let english = document.getElementById('english');
let card_debit = document.getElementById('card_debit');
let expiryLabel = document.getElementById('expiryLabel');
let cvvLabel = document.getElementById('cvvLabel');
let nameOnCard = document.getElementById('nameOnCardLabel');
let proceed = document.getElementById('proceed');
let ecommText = document.getElementById('ecomm__text');
let ecomm__header_heading = document.getElementById('ecomm__header-heading')


subDropdownLi.forEach(function (list) {
    list.addEventListener('click', function (e) {
        let input = list.querySelector('input');
        if (input) {
            loginDetail_DdBox.classList.remove('show');

            let translation = translations[input.value];
            cardNumberLabel.textContent = translation.cardNumber;
            payment_header_title.textContent = translation.cardDetails;
            back.textContent = translation.back;
            payable.textContent = translation.payableNow;
            invoice_type.textContent = translation.subTotal;
            transaction_id.textContent = translation.transactionID;
            english.textContent = translation.english
            language.innerText = input.value;
            card_debit.textContent = translation.card
            expiryLabel.textContent = translation.expiryLabel;
            cvvLabel.textContent = translation.cvvLabel;
            nameOnCard.textContent = translation.nameLabel;
            proceed.textContent = translation.proceed;
            ecommText.textContent = translation.ecommText;
            learnmore.textContent = translation.learnMore;
            ecomm__header_heading.textContent = translation.learnMore;

            input.nextElementSibling.classList.add('marked');

        }
    })
})


const fields = [
    { id: 'cardNumber', errorId: 'cardNumberError' },
    { id: 'cardExpiry', errorId: 'cardExpiryError' },
    { id: 'cardCvv', errorId: 'cardCvvError' },
    { id: 'cardOwnerName', errorId: 'cardOwnerNameError' }
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
    } else {
        input.parentElement.classList.remove('error');
        errorElement.style.display = 'none';
    }

    updateIsAllFields();
}

function updateIsAllFields() {
    isAllFields = fields.every(field => document.getElementById(field.id).value);
    console.log('Hello', isAllFields);

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
process_transaction_id.textContent ='Transaction id: '+ tempTransId



// Validate Card number
// Validate american express
let card_number = document.getElementById('cardNumber');
let cardInput = document.querySelector(".cardInput");
let amexpress = document.getElementById('amexpress')
let visa = document.getElementById('visa')
let master = document.getElementById('master');
let rupay = document.getElementById('rupay');
let cardValue = card_number.value;

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

let isValidCard = false;
card_number.addEventListener('keydown', (event) => {
    let testNo = 378282246310005;
    let rupay = '4594-5380-5063-9999';

    let isValidKey = /^[0-9\s]*$/.test(event.key) || event.key === 'Backspace';

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
        cardNumberError.textContent='';
        cardNumberError.style.display='none'
    } else if (visaValidator(temp.replace(/\D/g, ''))) {
        visa.classList.add('show');
        isValidCard = true;
        isValidAll();
        card_number.parentElement.classList.remove('error');
        cardNumberError.textContent='';
        cardNumberError.style.display='none'
    } else if (masterValidator(temp.replace(/\D/g, ''))) {
        master.classList.add('show');
        isValidCard = true;
        isValidAll();
        card_number.parentElement.classList.remove('error');
        cardNumberError.textContent='';
        cardNumberError.style.display='none'
    } else if (ruPayValidator(temp.replace(/\D/g, ''))) {
        rupay.classList.add('show');
        isValidCard = true;
        isValidAll();
        card_number.parentElement.classList.remove('error');
        cardNumberError.textContent='';
        cardNumberError.style.display='none'
    }
    else {
        amexpress.classList.remove('show');
        visa.classList.remove('show');
        master.classList.remove('show');
        // rupay.classList.remove('show');
        isValidCard = false;
        isValidAll();
        console.log('Invalid card ');
        card_number.parentElement.classList.add('error');
        cardNumberError.textContent='Invalid card number';
        cardNumberError.style.display='block'
    }


})
function amexValidator(inputtxt) {
    var cardno = /^(?:3[47][0-9]{13})$/;
    if (inputtxt.match(cardno)) {
        return true;
    }
    else {
        return false;
    }
}
function visaValidator(inputtxt) {
    var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (inputtxt.match(cardno)) {
        return true;
    }
    else {
        return false;
    }

}

function masterValidator(inputtxt) {
    var cardno = /^(?:5[1-5][0-9]{14})$/;
    if (inputtxt.match(cardno)) {
        return true;
    }
    else {
        return false;
    }
}


function ruPayValidator(inputtxt) {
    var cardno = /^(?:60[0-9]{14}|65[0-9]{14}|81[0-9]{14}|82[0-9]{14})$/;
    if (inputtxt.match(cardno)) {
        return true;
    } else {
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
let isValidExpiry = false;
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
        console.log('current mont', currentMonth);
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

/**
 * Validate cvv
 * 
 */

let cardCvv = document.getElementById('cardCvv');
let isValidCVV = false;
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

/**
 * 
 * Validate Card owner name
 * 
 */
let cardOwnerName = document.getElementById('cardOwnerName');
let nameErrorMessage = document.getElementById('cardOwnerNameError');
let isValidName = false;
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



let submit_btn = document.querySelector('.common-btn ');
function isValidAll() {
    if (isValidCVV && isValidCard && isValidExpiry && isValidName) {
        submit_btn.classList.add('btn-ready')
        submit_btn.removeAttribute('disabled')

    } else {
        submit_btn.classList.remove('btn-ready')
        console.log('Is not valid');
    }
}

let proceed_container = document.querySelector('.proceed_container');
submit_btn.addEventListener('click', function(e){
    e.preventDefault();
    proceed_container.classList.add('process_payment');
    console.log('proceed_container');
})