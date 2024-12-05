const scriptURL = 'https://script.google.com/macros/s/AKfycbzd-i7HaWkpzktSHvuhZlK6L53nmxxwuaQ7iflOOT_9WlMcQVCkdr5fN5-a98DFTrY/exec';
const form = document.forms['submit-to-google-sheet'];

// Mengecek apakah scriptURL tidak kosong atau valid
if (!scriptURL) {
    console.error('scriptURL tidak ditemukan!');
    window.location.href = '/error.html'; // Redirect ke halaman error jika scriptURL tidak ada
}

form.addEventListener('submit', e => {
    e.preventDefault();

    // Mengecek apakah scriptURL dapat dijangkau sebelum melanjutkan
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit to Google Sheets');
            }
            alert("Confirm Your Payment!");
            window.location.reload();
        })
        .catch(error => {
            console.error('Error:', error.message);
            // Redirect ke halaman error jika fetch gagal
            window.location.href = '/error.html';  // Ubah URL ini sesuai dengan halaman error yang diinginkan
        });
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
                default:
                    redirectUrl = '/error.html'; // Redirect ke halaman error jika tidak ada metode pembayaran yang dipilih
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

