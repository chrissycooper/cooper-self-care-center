var messageDiv = document.querySelector(".messagediv");
var messageButton = document.querySelector("#recieve");
var clearButton = document.querySelector("#clear");
var deleteButton = document.querySelector("#delete");
var radioButtons = document.querySelectorAll(".radio");
var deleteMessageDiv = document.querySelector(".delete-message");

messageButton.addEventListener("click", preventDefault);
messageButton.addEventListener("click", displaySentiment);
clearButton.addEventListener("click", resetView);
deleteButton.addEventListener("mouseover", showDeleteMessage);
deleteButton.addEventListener("mouseout", hideDeleteMessage);
deleteButton.addEventListener("click", deleteCurrentMessage);

function displaySentiment() {
    if(radioButtons[0].checked) {
        randomAff = affirmations[getRandomIndex(affirmations)];
        messageDiv.innerText = randomAff; 
    } else if (radioButtons[1].checked) {
        randomMantra = mantras[getRandomIndex(mantras)];
        messageDiv.innerText = randomMantra;
    }
    show(clearButton);
    show(deleteButton);
};

function resetView() {
    hide(clearButton);
    hide(deleteButton);
    messageDiv.innerText = "";
    messageDiv.innerHTML = `<img id ="logo" class="logo" src="assets/meditate.svg" alt="a pictogram of a person meditating"/>`;
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

function preventDefault(event) {
    event.preventDefault();
};

function hide(element){
    element.classList.add("hidden");
};

function show(element) {
    element.classList.remove("hidden");
};

function showDeleteMessage() {
   show(deleteMessageDiv);
};

function hideDeleteMessage() {
    hide(deleteMessageDiv);
};

function deleteCurrentMessage() {
    if(radioButtons[0].checked) {
        for (i = 0; i < affirmations.length; i++) {
            if (affirmations[i] === messageDiv.innerText) {
            affirmations.splice(i, 1);
            }
        }
    } else if (radioButtons[1].checked) {
        for (i = 0; i < mantras.length; i++) {
            if (mantras[i] === messageDiv.innerText) {
            mantras.splice(i, 1);
            }
        } 
    }
};