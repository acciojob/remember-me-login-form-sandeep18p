//your JS code here. If required.
if (localStorage.getItem('username') && localStorage.getItem('password')) {
    var existingButton = document.getElementById('existing');
   existingButton.style.display = "block";
existingButton.addEventListener('click', function() {
    var username = localStorage.getItem('username');
    alert('Logged in as .');
});


}
else{

document.getElementById('existing').style.display = 'none';
}
document.getElementById("submit").addEventListener("click",(e)=>{
e.preventDefault();
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
var rememberMe = document.getElementById('checkbox').checked;

if (rememberMe) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
} else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
}

alert('Logged in as username');	
});
if (localStorage.getItem('username') && localStorage.getItem('password')) {

}