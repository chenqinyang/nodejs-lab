const testLoop = (tMap) => {
  tMap.forEach(
    (v, idx, oMap) => {
      console.log('++++Test: map value = ', v, idx);
      console.log('++++Test: the oMap is ', oMap);
    }
  )
};

const testLoopKeys = (tMap) => {
  const kIter = tMap.keys();
  for (let i=0; i<tMap.size; i++) {
    console.log('++++Test: tMap key ' + i + ' = ', kIter.next().value);
  }
}

const testLoopEntry = (tMap) => {
  const kIter = tMap.entries();
  for (let i=0; i<tMap.size; i++) {
    console.log('++++Test: tMap entry ' + i + ' = ', kIter.next().value);
  }
}

const testLoopValue = (tMap) => {
  const vIter = tMap.values();
  for (let i=0; i<tMap.size; i++) {
    console.log('++++Test: tMap value ' + i + ' = ', vIter.next().value);
  }
}

const testLoopSimple = (tMap) => {
  var iterator1 = tMap[Symbol.iterator]();

  for (let item of iterator1) {
    console.log('++++Test: map item = ', item );
  }
}

module.exports = {testLoop, testLoopKeys, testLoopEntry, testLoopValue, testLoopSimple};