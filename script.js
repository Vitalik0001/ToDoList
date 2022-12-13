document.addEventListener("DOMContentLoaded", () => {
  const tasksList = document.querySelector(".tasks__list"),
    addForm = document.querySelector("form.add"),
    addInput = document.querySelector(".adding__input"),
    tasksItem = document.querySelector(".tasks__item"),
    inputForLine = document.querySelectorAll("[type='checkbox']");

  const tasksDB = {
    tasks: [],
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTask = addInput.value;

    if (newTask) {
      tasksDB.tasks.push(newTask);
      createTasksList(tasksDB.tasks, tasksList);
    }

    event.target.reset();
  });

  function createTasksList(tasks, parent) {
    parent.innerHTML = "";

    tasks.forEach((task, i) => {
      parent.innerHTML += `
    <li class="tasks__item">
      <input class="delete-task-line" type="checkbox">
      ${'📌'}<p>${task}</p>
      <div class="delete"><img id="trash" src="img/bin.png" alt="Trash"></div>
    </li>`;
    });

    // document.querySelectorAll(".delete-task-line").forEach((btn, i) => {
    //   btn.addEventListener("change", () => {
    //     btn.parentElement.classList.add("crossed");
    //   });
    // });

    function lineThrough(event) {

      if (event.target.type === 'checkbox') {
  
          if (!event.target.checked) {
              event.target.nextElementSibling.style.textDecoration = '';
              event.target.nextElementSibling.style.paddingLeft = '10px';
          } else {
  
              event.target.nextElementSibling.style.textDecoration = 'line-through';
              event.target.nextElementSibling.style.textDecorationThickness = '2px';
              event.target.nextElementSibling.style.textDecorationColor = 'red';
              event.target.nextElementSibling.style.paddingLeft = '20px';
          }
      }
    }
    tasksList.addEventListener('click', lineThrough);

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        tasks.splice(i, 1);
      });
    });

    document.querySelectorAll(".footer__clear-page").forEach((task, i) => {
      task.addEventListener("click", () => {
        parent.innerHTML = "";
        tasks.length = 0;
      });
    });
  }

  const button1 = document.getElementById('btn1');


  button1.addEventListener("click", () => {
    document.querySelector(".wrapper").style.backgroundColor = "#292828";
    document.querySelector(".wrapper").parentElement.classList.add("night-mode");
    document.getElementById("night-mode-text").parentElement.classList.add("night-mode-header");
    document.getElementById("night-mode-footer").parentElement.classList.add("night-mode-footer");
  });

  const button2 = document.getElementById('btn2');

  button2.addEventListener("click", () => {
    document.querySelector(".wrapper").style.backgroundColor = "#e7eaf0";
    document.querySelector(".wrapper").parentElement.classList.remove("night-mode");
    document.getElementById("night-mode-text").parentElement.classList.remove("night-mode-header");
  });

});

