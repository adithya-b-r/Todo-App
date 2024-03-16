var NewTask = document.getElementById("task");
var TaskContainer = document.getElementById("tasks");
var idCounter = 0;

function AddTask() {
    if (NewTask.value === '') {
        alert("Task can't be empty");
    } else {
        let li = document.createElement("li");
        let box = document.createElement("div");
        box.className = "toggle";
        box.id = "toggle_" + idCounter++;
        let label = document.createElement("label");
        let span = document.createElement("span");

        label.appendChild(box);
        label.appendChild(document.createTextNode(NewTask.value));
        span.innerHTML = "\u00d7";

        li.appendChild(label);
        li.appendChild(span);

        TaskContainer.appendChild(li);
    }
    NewTask.value = "";
    saveData();
}

TaskContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LABEL") {
        toggleBackground(e.target);
        saveData();
    }

    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function toggleBackground(label) {
    let div = label.querySelector(".toggle");

    if (div.style.backgroundColor === "lightgreen") {
        div.style.backgroundColor = "red";
    } else {
        div.style.backgroundColor = "lightgreen";
    }
}

function saveData() {
    localStorage.setItem("data", TaskContainer.innerHTML);
}

function LoadData() {
    TaskContainer.innerHTML = localStorage.getItem("data");
}

LoadData();
