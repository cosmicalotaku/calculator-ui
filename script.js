function AppendToDisplay(value) {
    document.getElementById('primary-screen').value += value;
}

function ClearResult() {
    document.getElementById('primary-screen').value = null;
    document.getElementById('secondary-screen').value = null;
}

function EvaluateResult() {
    if (document.getElementById('primary-screen').value == "") {
        document.getElementById('primary-screen').value = null;
        document.getElementById('secondary-screen').value = "Kindly Enter a Number First";
    } else {
        const expression = document.getElementById('primary-screen').value
        const result = eval(expression)
        document.getElementById('primary-screen').value = result
        document.getElementById('secondary-screen').value = expression;
    }
}