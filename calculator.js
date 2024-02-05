document.addEventListener("DOMContentLoaded", function () {
    // Get the input box
    const inputBox = document.getElementById("inputbox");

    // Get all the buttons
    const buttons = document.querySelectorAll("button");

    // Add click event listeners to all buttons
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the button's text content
            const buttonText = button.textContent;

            // Handle button clicks based on the button's class
            switch (button.className) {
                case "main":
                    handleMainButton(buttonText);
                    break;
                case "operator":
                    handleOperatorButton(buttonText);
                    break;
                case "enter":
                    handleEnterButton();
                    break;
                default:
                    handleNumberButton(buttonText);
                    break;
            }
        });
    });

    // Function to handle main buttons (AC and DE)
    function handleMainButton(buttonText) {
        if (buttonText === "AC") {
            // Clear the input box
            inputBox.value = "";
        } else if (buttonText === "DE") {
            // Delete the last character
            inputBox.value = inputBox.value.slice(0, -1);
        }
    }

    // Function to handle operator buttons (+, -, *, /, %)
    function handleOperatorButton(operator) {
        // Append the operator to the input box
        inputBox.value += operator;
    }

    // Function to handle number buttons (0-9, .)
    function handleNumberButton(number) {
        // Append the number to the input box
        inputBox.value += number;
    }

    // Function to handle the equal (=) button
    function handleEnterButton() {
        try {
            // Evaluate the expression in the input box
            const result = eval(inputBox.value);

            // Display the result in the input box
            inputBox.value = result;
        } catch (error) {
            // Handle errors (e.g., division by zero)
            inputBox.value = "Error";
        }
    }
});
