document.addEventListener('DOMContentLoaded', () => {

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const username = event.target.username.value;
            const password = event.target.password.value;

            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                location.reload();
            } else {
                alert('Failed to log in.');
            }
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const username = event.target.username.value;
            const password = event.target.password.value;

            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                location.reload();
            } else {
                alert('Failed to sign up.');
            }
        });
    }

    // You can add more event listeners and functions for other interactions as needed.

});
