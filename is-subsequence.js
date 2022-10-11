// add whatever parameters you deem necessary
function isSubsequence(subStr, str) {
  //get first character from substr
  let subtrIdx = 0;
  //traverse str to find firststr
  for (let s of str) {
    // if found move to next char in substr
    if (subStr[subtrIdx] === s) {
      subtrIdx++;
    }
    //return true if all charcters in substr done first
    if (subtrIdx >= subStr.length) {
      return true;
    }
  }
  // return false if str done first
  return false;
}

module.exports = isSubsequence;
