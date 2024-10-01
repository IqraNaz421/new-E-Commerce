document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

document.querySelectorAll('.remove-from-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item removed from cart!');
    });
});

document.querySelector('.checkout').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});


// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can replace this alert with actual form handling (like sending an email)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
