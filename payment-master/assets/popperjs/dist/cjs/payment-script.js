// payment-script.js

// Google Sheets form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbw5m7dj-yuSmWVTm3YnlO7yluyBC0_PPfPnv_eKItesa28WtyeStoHLuQj02JA_t7o/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => alert("Confirm Your Payment!"))
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('error!', error.message));
});

// Redirect based on selected payment method
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('payment-form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
        let redirectUrl = ''; // Default redirect URL

        if (paymentMethod) {
            switch (paymentMethod.value) {
                case 'BRI':
                    redirectUrl = '../qr/brikgasdjhfdsjyhrweiohnfljkwehnohnefnlwenf.html';
                    break;
                case 'Mandiri':
                    redirectUrl = '../qr/mandirijepgtoiewjtgpowejtpogfwej[okgkdwlg.html';
                    break;
                case 'BCA':
                    redirectUrl = '../qr/bcasdjlhweiofhkslefjweiofhnlwkefjwiejnifjwemnf.html';
                    break;
                case 'DANA':
                    redirectUrl = '../qr/nicehash.html';
                    break;
                case 'allo-bank':
                    redirectUrl = '../qr/allo.html';
                    break;
            }
        }

        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    });
});

// Avoid redirecting more than once
document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('redirected')) {
        window.location.href = '../session_index.html'; // Redirect to specific page
        sessionStorage.setItem('redirected', 'true');
    }
});
