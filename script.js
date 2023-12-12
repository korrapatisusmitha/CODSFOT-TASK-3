//clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
//displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
//evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is a number or an operator
    if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/'].includes(event.key)) {
        display(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if ((event.key === 'Escape') || (event.key ==='Backspace')) {
        clearScreen();
    }
});

// Event listener for mouse input
document.addEventListener("click", function(event) {
    // Assuming you have buttons with values on your HTML, you can get the clicked button's value
    if (event.target.tagName === 'BUTTON') {
        display(event.target.value);
    }
});
