// const scriptURL = 'https://script.google.com/macros/s/AKfycbzYXnYZnAWRIhLY98SMXBfSC8ZItEYTgxafG3AC0nod4oeQwLKaGle_b45b69PQk-c/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => alert("Confirm Your Payment !"))
//     .then(() => { window.location.reload(); })
//     .catch(error => console.error('error!', error.message))
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYXnYZnAWRIhLY98SMXBfSC8ZItEYTgxafG3AC0nod4oeQwLKaGle_b45b69PQk-c/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(scriptURL, { 
            method: 'POST', 
            body: new FormData(form)
        });

        if (response.ok) {
            alert("Payment confirmation submitted successfully!");
            window.location.reload(); // Reload page after successful submission
        } else {
            throw new Error("Failed to submit the form.");
        }
    } catch (error) {
        console.error('Error:', error.message);
        alert("There was an error submitting your form. Please try again.");
    }
});
