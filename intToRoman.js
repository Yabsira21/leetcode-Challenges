let data = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let toNumberedArr = function (s) {
  s = s.toUpperCase();
  s = s.split('');
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(data[s[i]]);
  }
  return arr;
};

let sum = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    ans += s[i];
  }
  return ans;
};

var romanToInt = function (s) {
  let numArr = toNumberedArr(s);
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < numArr[i + 1]) {
      let temp = numArr[i + 1] - numArr[i];
      numArr[i] = temp;
      numArr.splice(i + 1, 1);
    }
  }
  return sum(numArr);
};
