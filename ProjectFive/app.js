// Setting Up Variables
let theInput = document.querySelector(".add-task input"),
  theAddButton = document.querySelector(".add-task .plus"),
  tasksContainer = document.querySelector(".tasks-content"),
  noTakssMsg = document.querySelector(".no-task-message"),
  tasksCount = document.querySelector(".tasks-count span"),
  tasksCompleted = document.querySelector(".tasks-completed span");

//   Focus on Input Field
window.onload = () => {
  theInput.focus();
};

// Addimg The Task

theAddButton.addEventListener("click", () => {
  // If Input is Empty

  if (theInput.value === "") {
    Swal.fire("Input is Empty Please Add Value");
  } else {
    let mainSpan = document.createElement("span");
    // create span Element
    let text = document.createTextNode(theInput.value);
    mainSpan.appendChild(text);
    mainSpan.classList.add("task-box");
    // -------------------------------------
    // Dom Element Create
    let deleteElement = document.createElement("span");
    let deleteText = document.createTextNode("Delete");
    deleteElement.appendChild(deleteText);
    deleteElement.classList.add("delete");
    mainSpan.appendChild(deleteElement);
    tasksContainer.appendChild(mainSpan);
    // ====================================
    console.log(`Done Add the Task :'${theInput.value}'`);

    swalSuccess();
    // Remove no-task-message
    noTakssMsg.remove();
    // set input Valur
    theInput.value = "";
  }
});

function swalSuccess() {
  return Swal.fire({
    icon: "success",
    title: "Done",
    text: `The Tasks Content: ${theInput.value}`,
  });
}
