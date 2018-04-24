var el;

function countCharacters(e) {
    // Declare the variables
    var textEntered, countRemaining, counter;
    // Get the text that was entered by the element's ID
    textEntered = document.getElementById('comments').value;
    // Set the counter
    counter = (64 - (textEntered.length));
    // If the counter is at 0 then no more characters can be entered
    if (counter == 0) {
        countRemaining = document.getElementById('charLimit');
        countRemaining.textContent = counter + " of 64 characters left";
        countRemaining.style.color = "red";
    } else if (counter != 0) {
        countRemaining = document.getElementById('charLimit');
        countRemaining.textContent = counter + " of 64 characters left";
        countRemaining.style.color = "green";
    }

}

el = document.getElementById('comments');
el.addEventListener('keyup', countCharacters, false);
