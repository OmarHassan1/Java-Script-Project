// Setting Up Variables
let theInput = document.querySelector(".add-task input"),
  theAddButton = document.querySelector(".add-task .plus"),
  tasksContainer = document.querySelector(".tasks-content"),
  noTakssMsg = document.querySelector(".no-task-message"),
  tasksCount = document.querySelector(".tasks-count span"),
  tasksCompleted = document.querySelector(".tasks-completed span");

// Focus on Input Field
window.onload = () => {
  theInput.focus();
};

theAddButton.addEventListener("click", () => {
  if (theInput.value == "") {
    console.log("pleas add value");
  } else {
    // create span Element

    let mainSpan = document.createElement("span");
    let deleteElement = document.createElement("span");
    // Create paragraph
    // Text Value
    let text = document.createTextNode(theInput.value);
    mainSpan.appendChild(text);
    mainSpan.classList.add("task-box");

    // -------------------------------------
    // Dom Element Create
    let deleteText = document.createTextNode("Delete");
    deleteElement.appendChild(deleteText);
    deleteElement.classList.add("delete");
    mainSpan.appendChild(deleteElement);
    tasksContainer.appendChild(mainSpan);
    // ====================================

    swalSuccess();
    // Remove no-task-message
    theInput.value = "";

    noTakssMsg.remove();
    // set input Valur
    theInput.focus();
  }
});

function swalSuccess() {
  return Swal.fire({
    icon: "success",
    title: "Done",
    text: `The Tasks Content: ${theInput.value}`,
  });
}

function swalErorr() {
  return Swal.fire({
    icon: "error",
    title: "Some Value",
    text: `Please Enter New Task`,
  });
}

document.addEventListener("click", (e) => {
  // delete
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }

  // Finish Class
  if (e.target.classList == "task-box") {
    e.target.classList.toggle("finished");
  }
});

// Function To Create No Tasks Message
function createNoTasks() {
  // Create Message Span Element
  let msgSpan = document.createElement("span");

  // Create The Text Message
  let msgText = document.createTextNode("No Tasks To Show");

  // Add Text To Message Span Element
  msgSpan.appendChild(msgText);

  // Add Class To Message Span
  msgSpan.className = "no-tasks-message";

  // Append The Message Span Element To The Task Container
  tasksContainer.appendChild(msgSpan);
}
