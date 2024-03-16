var NewTask = document.getElementById("task");
var TaskContainer = document.getElementById("tasks");

function AddTask(){
    if(NewTask.value === ''){
        alert("Task can't be empty");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = NewTask.value;
        span.innerHTML = "\u00d7";

        TaskContainer.appendChild(li);
        li.appendChild(span);
    }
    NewTask.value = "";
    saveData();
}

TaskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        
    }

    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", TaskContainer.innerHTML);
}

function LoadData(){
    TaskContainer.innerHTML = localStorage.getItem("data");
}

LoadData();