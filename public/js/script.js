// Regex Verification

let verifyFullName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/gm;
let verifyFrontNumber = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
let verifyMonth = /0[1-9]|1[0-2]/;
let verifyYear = /[0-9]{2}/;
let verifyCVC = /^[0-9]{3}/;
let verifyRegex = [verifyFullName, verifyFrontNumber, verifyMonth, verifyYear, verifyCVC];

// Form values

let formFullName = document.querySelector('#nameHolder');
let formFrontNumber = document.querySelector('#cardNumber');
let formMonth = document.querySelector('#monthCard');
let formYear = document.querySelector('#yearCard');
let formCVC =  document.querySelector('#secretCode');
let fullForm = [formFullName, formFrontNumber, formMonth, formYear, formCVC];

//Functions

let sendForm = () => {
    if (formFullName.value !== '' && verifyFullName.test(formFullName.value) == true &&
        formFrontNumber.value !== '' && verifyFrontNumber.test(formFrontNumber.value) == true &&
        formMonth.value !== '' && verifyMonth.test(formMonth.value) == true &&
        formYear.value !== '' && verifyYear.test(formYear.value) == true &&
        formCVC.value !== '' && verifyCVC.test(formCVC.value) == true
    ) {
        document.querySelector('form').classList.add('hide');
        document.querySelector('.thanks').classList.remove('hide');
     } else {
        fullForm.forEach(element => {
            if (formFullName.value == '' && verifyFullName.test(formFullName.value) == false &&
            formFrontNumber.value == '' && verifyFrontNumber.test(formFrontNumber.value) == false &&
            formMonth.value == '' && verifyMonth.test(formMonth.value) == false &&
            formYear.value == '' && verifyYear.test(formYear.value) == false &&
            formCVC.value == '' && verifyCVC.test(formCVC.value) == false) {
                element.classList.add('warning');
            } else {
                element.classList.remove('warning');
            }
        })
    }
}


formFullName.addEventListener('input', () => {
    if (verifyFullName.test(formFullName.value) == true) {
        document.querySelector('.frontName').innerHTML = formFullName.value;
    } else {
        console.log('print');
    }
})

formFrontNumber.addEventListener('input', () => {
    if (verifyFrontNumber.test(formFrontNumber.value) == true) {
        document.querySelector('.frontLongNumber').innerHTML = formFrontNumber.value.match(/.{1,4}/g).join(' ');
    } else {
        console.log('print');
    }
})

formMonth.addEventListener('input', () => {
    if (verifyMonth.test(formMonth.value) == true) {
        document.querySelector('.frontMonth').innerHTML = formMonth.value;
    } else {
        console.log('print');
    }
})

formYear.addEventListener('input', () => {
    if (verifyYear.test(formYear.value) == true) {
        document.querySelector('.frontYears').innerHTML = formYear.value;
    } else {
        console.log('print');
    }
})

formCVC.addEventListener('input', () => {
    if (verifyCVC.test(formCVC.value) == true) {
        document.querySelector('.backShortNumber').innerHTML = formCVC.value;
    } else {
        console.log('print');
    }
}) 


document.querySelector('#submit').addEventListener('click', () => {
    sendForm();
})