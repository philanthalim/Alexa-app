let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
});

function openNav() {
  //opens side navbar by 70 percent
  document.getElementById("mySidenav").style.width = "70%" 

 //opens overlay display
  document.getElementById('backdrop').style.display = "block" 
}

function closeNav() {
  //closes side navbar totally
  document.getElementById("mySidenav").style.width = "0"

  //removes overlay display
  document.getElementById('backdrop').style.display = "none"
}