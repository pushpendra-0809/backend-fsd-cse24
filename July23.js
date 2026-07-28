//Synchronous and Asynchronous Functions
// console.log("Task 3");
// function hello()
// {
//     console.log("Hello Task 1");
// }
// hello();
// console.log("Task 2");

//Arrow Function
// function hello()
// {
//     console.log("Task 1");
//     setTimeout(function(){
//         console.log("Task 2");
//     },2000)
//     setTimeout(function(){
//         console.log("Task 4");
//     },4000)
// }
// hello();
// console.log("Task 3");

//CALLBACK:passed as an argument to another function and called inside that function
function hello(n1,n2,cb)
{
    console.log("task 1");
    return n1+n2;
    cb();
}

let a = 10;
let b = 20;
console.log(hello(a,b));
hello(a,b,hi());
hello(a,b,demo());
hello(a,b,text());

function hi()
{
    console.log("say hi");
}
function demo()
{
    console.log("Demo");
}


function text()
{
    console.log("Learning FSD");
}

