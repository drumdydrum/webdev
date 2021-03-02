const colorBtn = document.querySelector('#colorBtn');

function randomNum() {
    return Math.floor(Math.random() * (256)) + 1;
}

function randomColor(){
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}

const body = document.querySelector("body");


// let h1Created = false;
// if (!h1Created){
//     colorBtn.onclick = () => {
//         const newH1 = document.createElement("h1");
//         newH1.innerText = `RGB${randomColor().slice(3)}`;
//         document.querySelector("#main").prepend(newH1);
//         h1Created = true;
//     };
// } else {
//     colorBtn.addEventListener("click", () => {
//     body.style.backgroundColor = randomColor();
    
//     console.log("clicked");
//     });
// }

let h1Created = false;
let newH1 = 0;
colorBtn.addEventListener("click", () => {
    if (!h1Created) {
        newH1 = document.createElement("h1");
        const randColor = randomColor();
        body.style.backgroundColor = randColor;
        newH1.innerText = `RGB${randColor.slice(3)}`;
        document.querySelector("#main").prepend(newH1);
        h1Created = true;
    } else {
        randColor = randomColor();
        body.style.backgroundColor = randColor;
        newH1.innerText = `RGB${randColor.slice(3)}`;
        console.log("clicked");
    }

});


