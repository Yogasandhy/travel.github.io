document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    
    if (name && email && interest) {
        alert('Form submitted successfully!');
        // Here you can add code to handle form submission, e.g., send data to a server
    } else {
        alert('Please fill out all fields.');
    }
});
