let listcontainerelement = document.getElementById("list-container");

//new div element for task item container
let taskitemcontainer = document.createElement("div");

//new input element of type checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";

//create new span element for task description
let taskdesc = document.createElement("span");
taskdesc.textContent = "My first task";

//add checkbox and taskdesc to task item container
taskitemcontainer.appendChild(checkbox);
taskitemcontainer.appendChild(taskdesc);

//add entire task item container to list container
listcontainerelement.appendChild(taskitemcontainer);

//function to check off task when we click the checkbox
function checkoff() {
   if (checkbox.checked) {
      taskdesc.style.textDecoration = "line-through";
   } else {
      taskdesc.style.textDecoration = "none";
   }
}

checkbox.addEventListener("click", checkoff);

//deletng task
let deletetask = document.createElement("button");
deletetask.textContent = "delete";

taskitemcontainer.appendChild(deletetask);

function deleteitemelement() {
   taskitemcontainer.remove();
}

deletetask.addEventListener("click", deleteitemelement);

//adding tasks
let addtaskform = document.getElementById("addtask");

addtaskform.addEventListener("submit", (event) => {
   event.preventDefault();

   let newtaskitem = document.createElement("div");

   let checkbox2 = document.createElement("input");
   checkbox2.type = "checkbox";

   let taskdesc2 = document.createElement("span");
   taskdesc2.textContent = addtaskform.addtask.value;

   function checkoff2() {
      if (checkbox2.checked) {
         taskdesc2.style.textDecoration = "line-through";
      } else {
         taskdesc2.style.textDecoration = "none";
      }
   }

   checkbox2.addEventListener("click", checkoff2);

   let deletetask2 = document.createElement("button");
   deletetask2.textContent = "delete";

   function deleteitemelement2() {
      newtaskitem.remove();
   }

   deletetask2.addEventListener("click", deleteitemelement2);

   newtaskitem.appendChild(checkbox2);
   newtaskitem.appendChild(taskdesc2);
   newtaskitem.appendChild(deletetask2);

   listcontainerelement.appendChild(newtaskitem);

   addtaskform.reset();
});
