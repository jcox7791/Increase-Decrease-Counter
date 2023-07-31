const load = () => {
    createIncDecCounter();
}

let count = 0;
let root = document.getElementById('root');

const createIncDecCounter = () => {
    document.getElementById('reset').addEventListener("click", (e) => {
        console.log("Im the reset btn!");
        root.innerHTML = count = 0;
    });
    document.getElementById('increase').addEventListener("click", (e) => {
        console.log("Im the increase btn!");
        root.innerHTML = count++;
    });
    document.getElementById('decrease').addEventListener("click", (e) => {
        console.log("Im the decrease btn!");
        root.innerHTML = count--;
    });
}

// document.getElementById('reset').addEventListener("click", (e) => {
//     console.log("Im the reset btn!");
//         root.innerHTML = count = 0;
// });
// document.getElementById('increase').addEventListener("click", (e) => {
//     console.log("Im the increase btn!");
//         root.innerHTML = count++;
// });
// document.getElementById('decrease').addEventListener("click", (e) => {
//     console.log("Im the decrease btn!");
//         root.innerHTML = count--;
// });

window.onload = load();