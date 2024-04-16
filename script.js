let inputBox = document.querySelector("#input-box");
let addBtn = document.querySelector(".add-task-btn");
let listContainer = document.querySelector("#task-list");
let listItems = document.querySelectorAll("li");


function addTaskFunction() {
  if (inputBox.value === "") {
    alert("Type a task to be added");
  } 
  else {
    let task = document.createElement("li");

    task.innerHTML = `<i class="fa-regular fa-circle" style="color: #ff912b"></i> <p> ${inputBox.value} </p> <button class="remove-task-btn">x</button>`;

    listContainer.appendChild(task);
    inputBox.value = "";

    task.addEventListener("click",function checkFun(){
        task.classList.toggle("checked");
        
    });

    task.querySelector("button").addEventListener("click", function removeFun(){
       task.remove();
    })
   

  }
}

addBtn.addEventListener("click", addTaskFunction);

