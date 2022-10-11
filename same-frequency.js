// add whatever parameters you deem necessary
function sameFrequency(no1, no2) {
  const no1Map = createObj(no1.toString());
  const no2Map = createObj(no2.toString());
  if (no1Map.size !== no2Map.size) return false;
  for (let key of no1Map.keys()) {
    if (!(no1Map.get(key) === no2Map.get(key))) {
      return false;
    }
  }
  return true;
}

function createObj(str) {
  const strArr = str.split("");
  const map = new Map();
  for (let el of strArr) {
    if (!map.has(el)) {
      map.set(el, 1);
    } else {
      map.set(el, map.get(el) + 1);
    }
  }
  return map;
}

module.exports = sameFrequency;
