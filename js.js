function createSquareDivs(number) {
    const gridcontainer = document.querySelector(".grid-container");
    gridcontainer.innerHTML = "";

    for (let s = (number * number); s >= 1; s--) {
        let square = document.createElement("div");
        square.setAttribute("style", "border: 1px solid lightgrey;");
        gridcontainer.appendChild(square).className = "grid";
    }

    const squares = document.querySelectorAll(".grid");
    squares.forEach((square) => {
        square.style.flex = `0 0 calc(100% / ${number})`;
        square.style.height = `calc(100% / ${number})`;
    });
}

function createHoverEffect() {
    const squares = document.querySelectorAll (".grid");

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getColor();
        });
    });

   squares.forEach((square) => {
        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = getColor();
        });
    });
}

function getColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) 
        color+= letter[Math.floor(Math.random() * 16)]; 
    return color;
}

function getUserInput() {
    const btn = document.querySelector("button");

    btn.onclick= () => {
        let answer = prompt(" Tell me a number (between 1 and 100) of squares per side for new grid");

        answer = parseInt(answer); 

        processingAnswer(answer);
    };
}

function processingAnswer(number) {

    if (number <= 0 || number > 100 || isNaN(number)) 
        alert("Please choose a number between 1 and 100");
    if (number > 0 && number <= 100)
        createSquareDivs(number);
    createHoverEffect();

}

createSquareDivs(16);
createHoverEffect();
getUserInput();