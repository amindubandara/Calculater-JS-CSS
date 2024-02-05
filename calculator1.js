
document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("inputbox");

    document.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
            handleButtonClick(button.innerText);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case "AC":
                clearInput();
                break;
            case "()":
                openBrackt();
                break;
            case "=":
                calculateResult();
                break;
             case "DE":
                DeleteFirstEntry();
                break;
            default:
                appendToInput(value);
                break;
        }
    }

    function clearInput() {
        inputBox.value = "";
    }
    function DeleteFirstEntry() {
        
        let currentValue = inputBox.value;
        currentValue = currentValue.slice(0, -1);
        inputBox.value = currentValue;
    }

    function openBrackt() {
        inputBox.value = inputBox.value.slice(0, -1);
    }

    function appendToInput(value) {
        inputBox.value += value;
    }

    function calculateResult() {
        try {
            inputBox.value = eval(inputBox.value);
        } catch (error) {
            inputBox.value = "Error";
        }
    }
});
