function passwordformValidation(){
    var firstName = document.getElementById("firstName").value;
    var password = document.getElementById("password").value;
    var retype = document.getElementById("Re-type").value;
    var message = document.getElementById("demo");

    if(firstName === ""){
        message.innerHTML = "First name has to be entered";
        return false;
    }

    if(password !== retype){
        message.innerHTML = "Passwords do not match";
        return false;
    }

    else{
        message.innerHTML = "Form Submitted Successfully";
        return true;
    }

}