// // make lemon water

// Async behavior in JavaScript is often handled using callbacks, which can lead to "callback hell" when there are multiple nested callbacks. Here's an example of how making lemon water can lead to callback hell:
// function step1() {
//     setTimeout(() => {
//         console.log("Glass of water")
//     }, 5000);
// }
// function step2() {
//     setTimeout(() => {
//         console.log("squeeze lemon")
//     }, 3000);
// }
// function step3() {
//     setTimeout(() => {
//         console.log("add sugar")
//     }, 2000);
// }

// function step4() {
//     setTimeout(() => {
//         console.log("Stir it and drink it")
//     }, 6000);
// }

// step1();
// step2();
// step3();
// step4();


// changing into synchronous code
function step1(callback) {
    setTimeout(() => {
        console.log("Glass of water");
        callback();
    }, 5000);
}
function step2(callback) {
    setTimeout(() => {
        console.log("squeeze lemon");
        callback();
    }, 3000);
}
function step3(callback) {
    setTimeout(() => {
        console.log("add sugar");
        callback();
    }, 2000);
}



function step4() {
    setTimeout(() => {
        console.log("Stir it and drink it")
    }, 6000);
}
async function makeLemonWater() {
    await step1();
    await step2();
    await step3();
    await step4();
}

makeLemonWater();