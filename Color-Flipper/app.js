const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// var
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  current = colors.length;
  rendom = Math.floor(Math.random() * current);
  document.body.style.backgroundColor = colors[rendom];

  color.textContent = colors[rendom];
});
