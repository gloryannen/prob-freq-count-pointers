// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valueArr) {
  const obj = {};
  for (let i = 0; i < keyArr.length; i++) {
    if (valueArr[i]) obj[keyArr[i]] = valueArr[i];
    else obj[keyArr[i]] = null;
  }
  return obj;
}

module.exports = twoArrayObject;
