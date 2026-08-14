//Event
//Event Loop
console.log("Synchronous Task");
const f1=()=>{
console.log("f1");
}
const f2=()=>{
console.log("f2");
}
function main(){
    console.log("This Event Loop");
    setTimeout(f1,1000);
    setTimeout(f2,1000);
    new Promise((resolve,reject)=>{
    resolve("I am Inevitable");
    }).then((result)=>{
        console.log(result);
    })
    new Promise((resolve,reject)=>{
        resolve("I am Iron Man");
    }).then((result)=>{
        console.log(result);
    })
}
main();
