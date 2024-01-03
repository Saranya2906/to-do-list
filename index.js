const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load input value from local storage on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedInput = localStorage.getItem("inputText");
    if (savedInput) {
        inputBox.value = savedInput;
    }

    showTask();
});

// Listen for input changes and save to local storage
inputBox.addEventListener('input', function () {
    localStorage.setItem('inputText', this.value);
});

function addTask() {
    if (inputBox.value === '') {
        alert("Type something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Save task list to local storage
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    // Save task list to local storage
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
