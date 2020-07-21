function Capitalize_Letter(string) {
  let oldArray = string.split(" ");
  let newArray = [];

  for (let i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
  }
  return newArray.join(" ");
}

console.log(Capitalize_Letter("omar khaled hassan"));
