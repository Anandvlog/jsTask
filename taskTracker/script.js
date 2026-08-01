let from = document.querySelector("form");
let taskWrapper = document.querySelector("#task_wrapper");
let taskFilter = document.querySelector("#taskFilter");

let taskData = JSON.parse(localStorage.getItem("taskData")) || [];

let handleTaskData = (data) => {
  taskWrapper.innerHTML = "";
  data?.forEach((val) => {
    taskWrapper.innerHTML += `
            <div class="card">
            <h2>${val.taskName}</h2>
            <p>${val.status}</p>
            <span>${val.dueDate}</span>
         </div>
        `;
  });
};

handleTaskData(taskData);

from.addEventListener("submit", (e) => {
  e.preventDefault();

  let taskName = e.target[0].value;
  let status = e.target[1].value;
  let dueDate = e.target[2].value;

  let tasksData = {
    taskName,
    status,
    dueDate,
  };

  taskData.push(tasksData);
  localStorage.setItem("taskData", JSON.stringify(taskData));
  handleTaskData(taskData);
  console.log("from", taskData);

  from.reset();
});

taskFilter.addEventListener("change", (e) => {
  let selectedStatus = e.target.value.toLowerCase();

  if (selectedStatus === "all") {
    handleTaskData(taskData);
    return;
  }

  let taskfilterData = taskData.filter((val) => {
    return val.status.toLowerCase().includes(selectedStatus);
  });

  if (taskfilterData.length === 0) {
    taskWrapper.innerHTML = "<p>Task not found</p>";
    return;
  }

  handleTaskData(taskfilterData);
});
