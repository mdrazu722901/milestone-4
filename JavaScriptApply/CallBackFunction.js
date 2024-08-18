//normal way to work function//

// function CallBack(name, age, task){
//         console.log(name);
//         console.log(age);

// }
//  CallBack("razu", 20);

// another way to work function.//

//  function CallBack(name, age, task){
//     console.log(name);
//     console.log(age);
//     takeShawer();
//     washHand();

// }
// function takeShawer(){
//     console.log("Please take a shawer");
// }
// function washHand(){
//     console.log("right now i`m washing my hand");
// }

// CallBack("razu", 20);
// CallBack("rashed", 30);




 function CallBack(name, age, task){
    console.log(name);
    console.log(age);
    task();

}
function takeShawer(){
    console.log("Please take a shawer");
}
function washHand(){
    console.log("right now i`m washing my hand");
}

CallBack("razu", 23, washHand);
CallBack("rashed", 17, takeShawer);





