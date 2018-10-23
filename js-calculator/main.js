document.addEventListener('DOMContentLoaded', start)

let display = document.getElementsByClassName("inDisplay");
let operation = "";
let calcMemory = 0;


function start() {
    let buttons = document.getElementsByClassName("button-primary")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", onClickButton)
    }
}

function onClickButton() {

    //Clear Calculator display and memory
    if (this.innerHTML === "AC") {
        display[0].placeholder = "";
        calcMemory = 0;
        operation = "";
    }

    //Process arithmetic buttons
    else if (this.innerHTML === "÷" || this.innerHTML === "x" || this.innerHTML === "-" || this.innerHTML === "+" || this.innerHTML === "=") {
        if (calcMemory === 0) {
            calcMemory = display[0].placeholder;
        }

        if (this.innerHTML === "÷") {
            operation = "divide";
        } else if (this.innerHTML === "+") {
            operation = "add";
        } else if (this.innerHTML === "x") {
            operation = "multiply";
        } else if (this.innerHTML === "-") {
            operation = "subtract";
        }

        if (this.innerHTML !== "=") {
            display[0].placeholder = "";
        }

        processAnswer(this.innerHTML, calcMemory);
    }

    //Display number on display
    else
        display[0].placeholder += this.innerHTML;
}

function processAnswer(val, mem) {

    if (val === "=") {
        let cald = Number(display[0].placeholder);
        let memz = Number(mem);

        if (operation === "divide") {
            display[0].placeholder = memz / cald;
        } else if (operation === "add") {
            display[0].placeholder = memz + cald;
        } else if (operation === "multiply") {
            display[0].placeholder = memz * cald;
        } else if (operation === "subtract") {
            display[0].placeholder = memz - cald;
        }
        calcMemory = display[0].placeholder;
    }

}