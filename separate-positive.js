// add whatever parameters you deem necessary
function separatePositive(arr) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  while (startIdx <= endIdx) {
    if (arr[startIdx] < 0 && arr[endIdx] > 0) {
      const temp = arr[startIdx];
      arr[startIdx] = arr[endIdx];
      arr[endIdx] = temp;
    }
    if (arr[startIdx] > 0) {
      startIdx++;
    }
    if (arr[endIdx] < 0) {
      endIdx--;
    }
  }
  return arr;
}

module.exports = separatePositive;
