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

