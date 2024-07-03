const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Empty task is cheating!")
    }
    else {
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        listContainer.appendChild(task);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // cross/delete icon
        task.appendChild(span);  // add span as the child element to task.
    }
    inputBox.value = '';
    saveTasks();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {    // this function returns the tag name in capital letters
        e.target.classList.toggle("checked"); // If the element has the “checked” class, it is removed; if it does not have the class, it is added.
        saveTasks();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  // the parent element is task.
        saveTasks();
    }
}, false);  // false means don't do anything on the ancestor element of the clicked element

function saveTasks() {   // save tasks' data to browser and call this function when tasks are updated (including addition, deletion, check)
    localStorage.setItem("data", listContainer.innerHTML) // tasks are saved in "data"
}

function getTasks() {
    listContainer.innerHTML = localStorage.getItem("data")
}

getTasks();