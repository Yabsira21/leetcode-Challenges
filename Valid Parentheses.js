var isValid = function (s) {
  let Converter = {
    "(": 1,
    "[": 10,
    "{": 100,
    ")": 2,
    "]": 11,
    "}": 101,
  };
  let array = [];
  let open = [1, 10, 100];
  for (let i = 0; i < s.length; i++) {
    array.push(Converter[s[i]]);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (open.includes(array[i]) && array[i] + 1 == array[i + 1]) {
      array.splice(i, 2);
    }
  }
  if (array.length == 0) return true;
  else return false;
};
