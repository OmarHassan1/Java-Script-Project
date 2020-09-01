function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}
function getOutput() {
  return document.getElementById("output-value");
}
function printOutput(num) {
  if ((num = "")) {
    document.getElementById("output-value").innerText;
  } else {
    document.getElementById("output-value").innerHTML = gerFormattedNumber(num);
  }
}
function gerFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

printOutput("44");
