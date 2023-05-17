function validate(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");

 

    if(username.value.trim() === ""){
        alert("Username required")
            
        return false;
    }

    if(password.value.length < 4){
        alert("Password must be at least 4 charaters")
        return false;
    }

    if(password.value.length >10){
        alert("Password must be less than 10 charaters")
        return false;
    }

       
    else{
        return true;
    }
    }
    

