//Problem Solving 1
function findOppositeNumber(n, inputNumber) {
  const half = n / 2;
  if (inputNumber >= 0 && inputNumber < half) {
    return inputNumber + half;
  } else if (inputNumber >= half && inputNumber <= n - 1) {
    return inputNumber - half;
  } else alert("out of range from 0 to " + n - 1);
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));

//Problem Solving 2
function merge2String(string1, string2) {
  let stringLength;
  if (string1.length >= string2.length) {
    stringLength = string1.length;
  } else {
    stringLength = string2.length;
  }

  let mergedString = "";
  for (let i = 0; i < stringLength; i++) {
    if (i < string1.length) {
      mergedString += string1[i];
    }
    if (i < string2.length) {
      mergedString += string2[i];
    }
  }
  return mergedString;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));
