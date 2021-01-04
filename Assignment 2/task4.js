var totalMarks = prompt("Enter total marks:");
var sub1 = prompt("Enter first subject marks:");
var sub2 = prompt("Enter second subject marks:");
var sub3 = prompt("Enter third subject marks:");
var obtainedMarks = parseInt(sub1 ) + parseInt (sub2) + parseInt (sub3);
var percentage = (obtainedMarks/totalMarks)*100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total Marks:"+totalMarks);
document.write("<br>Marks Obtained: " +obtainedMarks);
if (percentage >= 80){
    document.write("<br>Percentage:" +percentage);
    document.write("<br>Grade : A-one");
    document.write("Remarks : Excellent");
}
else if(percentage >= 70){
    document.write("<br>Percentage:" +percentage);
    document.write("<br>Grade : A");
    document.write("<br>Remarks : Good<br>");
}
else if (percentage >= 60){
    document.write("<br>Percentage" +percentage);
    document.write("<br>Grade : B");
    document.write("<br>Remarks : You need to improve<br>");
}
else {
    document.write("<br>Percentage:" +percentage);
    document.write("<br>Grade : Fail");
    document.write("<br>Remarks : Sorry<br>");
}