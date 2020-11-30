const split = (str, delim) => {
  // write code for strings.split
  let array = str.split("-");
  return array;
}

const pairs = (str) => {
  // write code for strings.pairs
  
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitArr = str.split("")
  return str.split("").reverse().join("")
}

module.exports = {
  split,
  pairs,
  reverse
}