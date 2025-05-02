function addTask() {
    const input = document.getElementById("task");
    const taskText = input.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement("li");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onclick = function () {
        li.classList.toggle("completed");
      };
  
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(taskText));
      document.getElementById("todo-list").appendChild(li);
      input.value = "";
    }
}
  
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
}
  
window.onload = () => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      document.body.classList.add(savedMode);
    }
};
  