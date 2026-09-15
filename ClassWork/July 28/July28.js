//A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that is not ready yet but will be resolved in the future.
// js is a single threaded programming language
//Three Stages of Promises :-
// 1. pending
// 2. fulfill
// 3. rejected
// const promiseOne = new Promise((resolve, reject) => {
//   console.log("Promise Task 1");
//   resolve("Promise resolved by using resolve");

//   let msg = true;
//   if (!msg == true) {
//     console.log("messages using promises failed");
//   } else {
//     console.log("error");
//   }
//   setTimeout(()=>{
//     console.log(resolve());
//   }, 2000);
// });

// promiseOne.then((result) => {
//   console.log(result);   
// }).catch((error) => {
//   console.log(error);    
// });

//Async Await
// console.log("1");
// async function test()
// {
// await console.log("2");
// console.log("3");
// console.log("4");
// }
// test();
// console.log("5");
//create promises that will print username and password using resolve amd if username and passwrod not found then it will call reject state and print error
// new Promise((resolve, reject)=>{
// setTimeout(function(){
//     console.log("This is a promise");
//     let err = false;
//     if(!err){
//         resolve("user:ABC, password:123");
//     }
//     else{
//         reject("error: user not found");
//     }
// }, 2000);
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=> {
//     console.log(error);
// });

async function test() {
  console.log("message:1");

  try {
    const response = await fetch("./student.json");
    const stdn = await response.json();
    console.log(stdn);
    console.log("message 3");
    return stdn;
  } catch (error) {
    console.error("Error:", error);
  }
}

test();

