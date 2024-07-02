function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

function checkLocalStorage(key) {
    return localStorage.getItem(key) !== null;
}

function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    var rememberCheckbox = document.getElementById('checkbox');

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
    alert('Logged in as ' + loggedInUser);
    var loggedInUser = getFromLocalStorage('username');
  
});