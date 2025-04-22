function validateLogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "1234")
    {
        window.location.href = "home.html";
        //return false;
    }
    else{
        alert("invalid username or password");
        //return false;
    }
}

