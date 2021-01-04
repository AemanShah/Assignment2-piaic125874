var password = "mangopeople";
var newPassword = prompt("Enter your password:");
if (newPassword === null || newPassword === ""){
    newPassword = prompt("Please enter your password:");
    if(password === newPassword){
        alert("Correct! The password you entered is the original password")
    }
    else{
        alert("Incorrect password");
    }
}
else if( password === newPassword){
    alert("Correct! The password you entered is the original password");
}
else{
    alert("Incorrect password");
}