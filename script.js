

// Form validation
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const fullName = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="number"]').value;
    const subject = form.querySelector('input[type="text"]:nth-of-type(2)').value;
    const message = form.querySelector('textarea').value;

    if (!fullName || !email || !phone || !subject || !message) {
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for your message, ' + fullName + '!');
        form.reset(); // Reset the form fields
    }
});

