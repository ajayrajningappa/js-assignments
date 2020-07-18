marks=prompt("enter the avg marks");

if(marks<60){
    console.log("Grade:F");
}
else if(marks<70){
    console.log("Grade :D");
}
else if(marks<80){
    console.log("Grade :C");
}
else if(marks<90){
    console.log("Grade :B");
}
else if(marks<100){
    console.log("Grade :A");
}

//using switch statements

let marks=22;
switch (true){
    case marks>=100:
        console.log("Grade A");
        break;
    case marks>=90:
         console.log("Grade B");
         break;
    case marks>=80:
        console.log("Grade C");
        break;
    case marks>=70:
        console.log("Grade D");
        break;
    case marks>=60:
        console.log("Grade F");
        break;
    default:
        console.log("Grade E");
        break;
}