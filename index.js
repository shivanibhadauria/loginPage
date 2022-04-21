function login(){
    let username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    if (username == "shivani" && password=="123") {
        location.assign("http://127.0.0.1:5500/page.html");
        
    }
    else{
        window.alert("login failed");
    }

}