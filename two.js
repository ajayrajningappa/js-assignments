//pop
var fruits=["banana","orange","grapes","mango"];
console.log(fruits.pop());
//the last fruit which is mango will be popped

//push
var fruits=["banana","orange","grapes","mango"];
fruits.push("kiwi");
console.log(fruits);
//the new item will be pushed into the array

//shifting

var fruits=["banana","orange","grapes","mango"];
console.log(fruits.shift());
//removes the first element from the fruits

//unshift
var fruits=["banana","orange","grapes","mango"];
console.log(fruits.unshift());
//returns the length of the elements present in the array

//deleting

var fruits=["banana","orange","grapes","mango"];
delete fruits[0];
console.log(fruits);
//delete's the element based on the index and names it undefined

//splice

var fruits=["banana","orange","grapes","mango"];
fruits.splice(0,1);
console.log(fruits);
//removes the first element of fruits

var girls=["abc","def","ghi"]
var boys=["mno","pqr","xyz"]
var childrens=girls.concat(boys);
console.log(childrens);
//joins two arrays girls and boys

//var fruits=["banana","orange","grapes","mango","lemon"];
//var  citrus=fruits.slice(1);
//createsa new array

//string methods
var txt="abcdefghijkl";
console.log(txt.length);
//returns the length of the text

//search
var str="please locate where 'locate' occurs";
console.log(str.search("locate"));
//searches the word

//slice() methods
var str="apple, banana, kiwi";
console.log(str.slice(7, 13));

console.log(str.slice(-12, -6));

//substring() methods
var str="apple, banana, kiwi";
console.log(str.substr(7));
console.log(str.substr(-4));
str1="please eat grapes";

//replace()
console.log(str1.replace("grapes","plum"));
//replaces grapes with plum

//trim()
var str2="     hello people     ";
alert(str2.trim());
//reomoves whitespaces from both side of the string

//char() and chaCodeAt() methods
var str="HELLO WORLD";
console.log(str.charAt(0));
//returns character at a specified index position in a string

var str="HELLO WORLD";
console.log(str.charCodeAt(0));
//returns 72
//returns unicode of character at the specified index in a string

