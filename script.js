  function saveToLocalStorage(key, value) {
            localStorage.setItem(key, value);
        }

        // Function to remove data from local storage
        function removeFromLocalStorage(key) {
            localStorage.removeItem(key);
        }

        // Function to check if data exists in local storage
        function checkLocalStorage(key) {
            return localStorage.getItem(key) !== null;
        }

        // Function to retrieve data from local storage
        function getFromLocalStorage(key) {
            return localStorage.getItem(key);
        }

        document.getElementById('submit').addEventListener('click', function(event) {
            event.preventDefault();
			var rememberCheckbox = document.getElementById('remember');

            if (rememberCheckbox.checked) {
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;

                saveToLocalStorage('username', username);
                saveToLocalStorage('password', password);
            } else { 
                removeFromLocalStorage('username');
                removeFromLocalStorage('password');
            }

            var loggedInUser = getFromLocalStorage('username');
            if (loggedInUser) {
                alert('Logged in as ' + loggedInUser);
                var existingButton = document.createElement('button');
                existingButton.id = 'existing';
                existingButton.textContent = 'Login as existing user';
                document.body.appendChild(existingButton);

                existingButton.addEventListener('click', function() {
                    alert('Logged in as ' + loggedInUser);
                });
            }
        });