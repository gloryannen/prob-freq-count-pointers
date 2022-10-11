// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  let startPtr = 0;
  let endPtr = arr.length - 1;
  while (startPtr < endPtr) {
    const currAvg = (arr[startPtr] + arr[endPtr]) / 2;
    const result = currAvg - avg;
    if (result === 0) {
      return true;
    } else if (result < 0) {
      startPtr++;
    } else if (result > 0) {
      endPtr--;
    }
  }
  return false;
}
module.exports = averagePair;
