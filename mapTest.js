const testLoop = (tMap) => {
  tMap.forEach(
    (v, idx, oMap) => {
      console.log('++++Test: map value = ', v, idx);
      console.log('++++Test: the oMap is ', oMap);
    }
  )
};

module.exports = {testLoop};