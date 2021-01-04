var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
}
/*this condition shows alert because in variable "a" there is a pre increment first it increments then 
this "a" becomes 5 and satisfies the condition*/

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
/*this condition dosnot shows alert because there is a post increment first it will check the condition which
becomes false then the variable incremented by 1 and becomes 83 we can check this by 
showing the result of b*/

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if (c === 14){
    alert("condition 4 is true");
}
/*here 2 conditions are true first C is 12 after checking the condition because of post increment it becomes 13
 then checking second condition it becomes true and display the alert then in third  because of pre increment
 it first increment the C then check condition it becomes false because of less than operator 
 then checking last condition it becomes true because the value of C satisfies the condition so 2 conditions
 become true*/

var materialCost =20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === materialCost + laborCost){
    alert("the cost equals");
} 
/*in totalcost we are adding both of the previous cost then in condition we are checking same condition which
which becomes equal*/

if (true){
    alert("True");
}
if (false){
    alert("False");
}
/*here true becomes 1 and false becomes 0 so condition becomes true and in second false condition becomes
true also but this condition is false so it will not execute*/

if ("car" < "cat"){
    alert("car is smaller than cat");
}
// here car is lessthan cat because we are comparing here by the ascii code