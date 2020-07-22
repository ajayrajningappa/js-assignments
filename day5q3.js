// let todos=[];
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res=>res.json())
// .then(data=>todos=data)
// .catch(err=>console.log(err));
// console.log(fetch);

function req1(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>response.json())
    .then(json=>console.log(json))

    var title=response.data.title;
    var body=response.data.body
    document.getElementById("printTitle").innerHTML=title;
    document.getElementById("printbody").innerHTML=body;
}
req1();