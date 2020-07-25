// function ask Your Name
document.querySelector(".control-button span").onclick = function() {
  // prompt Window To Ask For YOur Name
  let yourName = prompt("What is Your Name");
  if (yourName == null || yourName == "") {
    //   Set Name To UnKnown
    document.querySelector(".name span").textContent = "UnKnown";
    //  Name is Not Empty UnKnown
  } else {
    //   Set Name To Your name
    document.querySelector(".name span").textContent = yourName;
  }
  //  Remove Splash Screen
  document.querySelector(".control-button").style.display = "none";
};
// create Duration
let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

// invof shuffle fun
shuffle(orderRange);

// Add Order Css property TO Game Blocks
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener("click", () => {
    //
    flipBlock(block);
  });
});

function flipBlock(selectedBlocks) {
  // Add Class is-Flipped
  selectedBlocks.classList.add("is-flipped");
}

// shffle fucntion to Random Element
function shuffle(array) {
  // Settings Vars
  let current = array.length,
    temp,
    rendom;
  // loop
  
  while (current > 0) {
    // get Random Number
    rendom = Math.floor(Math.random() * current);
    current--;
    temp = array[current];

    array[current] = array[rendom];
    array[rendom] = temp;
  }
  return array;
}
