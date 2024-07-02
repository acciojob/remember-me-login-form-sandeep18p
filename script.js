document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const existingBtn = document.getElementById('existing');

    // Check if there are saved details in local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingBtn.style.display = 'block';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkbox.checked) {
            // Save details in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove details from local storage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    existingBtn.addEventListener('click', () => {
        alert(`Logged in as ${savedUsername}`);
    });
});