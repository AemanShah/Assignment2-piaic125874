var signal = prompt("Enter road traffic signal:");
if (signal === "red"){
    document.write("<b>Must Stop</b>");
}
else if (signal === "yellow"){
    document.write("<b>Ready To Move</b>")
}
else if (signal === "green"){
    document.write("<b>Move Now</b>")
}