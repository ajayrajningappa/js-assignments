var arr=[];
var size=10;
for(var i=0;i<size;i++){
    arr[i]=prompt('enter element' +(i+1));
}
console.log(arr);
var odd=function(num){
    return num%2 ==0;
};
var myArray=arr;
var myArray=arr.filter(odd);
console.log(myArray);

var a=myArray;
for(var i=0;i<a.length;i++){
    a[i]=a[i]*a[i]*a[i];
}
console.log(a);