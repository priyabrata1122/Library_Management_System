document.addEventListener("DOMContentLoaded",function(){
    const toggle_box = document.getElementById("category_box");
    const toggle_pannel = document.getElementById("category_panel");

    toggle_box.addEventListener('click',function(){
        toggle_pannel.classList.toggle('active');
    })

    //hide the box when click outside

    document.addEventListener('click',function(event){
        if (!toggle_pannel.contains(event.target) && !toggle_box.contains(event.target)) {
            toggle_pannel.classList.remove('active');
        }
    });
});


const signup_btn = document.getElementById("btn_signup");
signup_btn.addEventListener('click',function(){
    alert("You are being redirected to an external website.");
});

// Signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get signup form data
    var formData = new FormData(this);
    // Send signup form data to server for processing
    // Example: You can use fetch() or XMLHttpRequest to send data to the server
    console.log('Signup form data:', formData);
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get login form data
    var formData = new FormData(this);
    // Send login form data to server for authentication
    // Example: You can use fetch() or XMLHttpRequest to send data to the server
    console.log('Login form data:', formData);
});

document.getElementById("login_button").addEventListener('click',function(){
    alert("Welcome");
});