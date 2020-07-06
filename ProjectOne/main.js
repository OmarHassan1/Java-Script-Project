document.body.classList.add(localStorage.getItem("pageColor") || "red");

const el = document.querySelectorAll(".color-switcher li");
let classList = [];

// Loop on Elements

for (let i = 0; i < el.length; i++) {
  // Get Class List
  classList.push(el[i].getAttribute("data-color"));
  el[i].addEventListener(
    "click",
    function() {
      // remove old classes
      document.body.classList.remove(...classList);
      document.body.classList.add(this.getAttribute("data-color"));
      localStorage.setItem("pageColor", this.getAttribute("data-color"));
    },
    false
  );
}
