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
    // function flipBlocks
    flipBlock(block);
  });
});

// flip block
function flipBlock(selectedBlock) {
  // Add Class is-Flipped
  selectedBlock.classList.add("is-flipped");

  // collect All fliped Cards
  let allflippedblocks = blocks.filter((flippedblock) =>
    flippedblock.classList.contains("is-flipped")
  );

  //  if there two selected Block
  if (allflippedblocks.length === 2) {
    // stop clicking function
    stopclicking();

    checkMatchedBlocks(allflippedblocks[0], allflippedblocks[1]);
  }
}

// stop Clicking Function
function stopclicking() {
  blocksContainer.classList.add("no-clicking");

  setTimeout(() => {
    // remove class no clicking The Duration
    blocksContainer.classList.remove("no-clicking");
  }, duration);
}

// Check  Matched Blocks
function checkMatchedBlocks(firstBlock, secondBlock) {
  let triesElement = document.querySelector(".tries span");
  if (firstBlock.dataset.fruits === secondBlock.dataset.fruits) {
    // remove class is flipped
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    // add class is has match

    firstBlock.classList.add("has-match");
    secondBlock.classList.add("has-match");

    document.getElementById("correct").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
    document.getElementById("wrong").play();
  }
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
