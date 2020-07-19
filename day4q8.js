// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }

// ask(
//     "do you agree?",
//     function(){alert("you agreed.");},
//     function(){alert("you cancelled the execution.");}

// );
let a=prompt("do you agree");
let ask=(yes,no)=>yes+no;
let question=ask();
if(ask==yes){
alert("you agreed")

}
else if(ask==no){
alert("you cancelled the excecution");

}
