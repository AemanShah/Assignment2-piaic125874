var secret = 4;
var guess = prompt("Guess the secret number from 1 to 10:");
if (secret === guess){
    document.write("Bingo! Correct Answer");
}
else if(++guess === secret){
    document.write("close enough");
}
else{
    document.write("Try Again");
}