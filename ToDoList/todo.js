let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  createTaskElement(taskText);
  taskInput.value = "";
}

function createTaskElement(text) {

  let div = document.createElement("div");
  div.classList.add("todo-item");

  div.innerHTML = `
    <span class="todo-text">${text}</span>
    <div class="actions">
      <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
      <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

  // Delete
  div.querySelector(".delete-btn").addEventListener("click", () => {
    div.remove();
  });

  // Edit
  div.querySelector(".edit-btn").addEventListener("click", () => {
    let span = div.querySelector(".todo-text");

    if (div.classList.contains("editing")) {
      let input = div.querySelector("input");
      span.textContent = input.value;
      div.replaceChild(span, input);
      div.classList.remove("editing");
    } else {
      let input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      input.style.width = "60%";
      div.replaceChild(input, span);
      input.focus();
      div.classList.add("editing");
    }
  });

  taskList.appendChild(div);
}