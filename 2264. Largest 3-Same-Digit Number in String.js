/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  const result = [];
  num.split("").forEach((val, inx, arr) => {
    if (val === arr[inx + 1] && val === arr[inx + 2]) {
      result.push(val);
    }
  });
  if (result.length === 0) {
    return "";
  }
  return String(Math.max(...result)).repeat(3);
};
