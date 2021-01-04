var time =parseInt(prompt("Enter time in 24 hours clock:"));
if(time >= 0000 && time < 1200){
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700){
    alert ("Good Afternoon");
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening");
}
else if(time >= 2100 && time <=2359){
    alert("Good night");
}
else{
    alert("Enter again");
}