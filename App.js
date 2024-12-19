let display = document.getElementById("display");

function buttons(input) {
    display.value += input;

}


function clearDisplay() {
    display.value = "";
}

function equal() {
    display.value = eval(display.value)
}
