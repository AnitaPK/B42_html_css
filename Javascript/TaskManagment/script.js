tasks = [
  {
    id: 23456789456,
    taskName: "FrontEnd",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatem.",
    status: "running",
  },
  {
    id: 2234523434,
    taskName: "BackEnd",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptatem.",
    status: "started",
  },
];

function renderTask() {
  document.querySelector("#taskList").innerHTML = tasks.map(
    (kapil, index) => `
                    <tr>
            <th scope="row">${index + 1}</th>
            <td>${kapil.taskName}</td>
            <td>${kapil.discription}</td>
            <td>${kapil.status}</td>
            <td>
                 <button class='btn btn-success' onclick='openEditModal(${kapil.id})'>Edit</button>
                <button class='btn btn-danger' onclick='deleteTaskWithIndex(${
                    index
                })'>DeleteWithIndex</button>
                <button class='btn btn-danger' onclick='deleteTaskByID(${
                  kapil.id
                })'>DeleteByID</button>

                </td>
          </tr>
        `
  );
}

function openEditModal(taskId) {
  let task = tasks.find((t) => t.id === taskId);
  if (!task) {
    alert("Task not found");
    return;
  }
// Populate modal inputs
document.getElementById("editTaskId").value = task.id;
document.getElementById("editTaskName").value = task.taskName;
document.getElementById("editTaskDescription").value = task.discription;
document.getElementById("editTaskStatus").value = task.status;

// Show modal
$("#editTaskModal").modal("show");
}
function updateTask() {
  let taskId = parseInt(document.getElementById("editTaskId").value);
  let updatedName = document.getElementById("editTaskName").value;
  let updatedDescription = document.getElementById("editTaskDescription").value;
  let updatedStatus = document.getElementById("editTaskStatus").value;

  let taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    alert("Task not found");
    return;
  }

  tasks[taskIndex].taskName = updatedName;
  tasks[taskIndex].discription = updatedDescription;
  tasks[taskIndex].status = updatedStatus;

  // Hide modal and re-render tasks
  $("#editTaskModal").modal("hide");
  renderTask();
}


deleteTaskWithIndex = (INDEX) => {
  console.log("deleted successfully");
  console.log(INDEX);
  tasks.splice(INDEX, 1);
  console.log(tasks);
  renderTask();
};
deleteTaskByID = (ID) => {
  console.log(ID);
  IfIndex = tasks.findIndex((t) => t.id == ID);
  console.log(IfIndex);
  if (IfIndex == -1) {
    alert("task not found");
  } else {
    tasks.splice(IfIndex, 1);
    renderTask();
  }
};

function addNewTask() {
  newTask = document.getElementById("newTaskName").value;
  newDiscription = document.getElementById("discription").value;
  console.log(newTask, newDiscription);
  newTask = {
    id: Date.now() + Math.floor(Math.random()),
    taskName: newTask,
    discription: newDiscription,
    status: "yet to start",
  };
  console.log(newTask);
  tasks.push(newTask);
  renderTask();
}

renderTask();
// CreatReadUpdateDelete
// PostGetPut/PatchDelete
