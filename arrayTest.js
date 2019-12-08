
const testSort = (arr) => {
  arr.sort((a,b)=>a-b);
  return arr;
}

const testLoop = (arr) => {
  arr.map(
    (v, idx) => console.log('++++Test: each = ', v, idx) 
  )
}

const testFilter = (arr) => {
  return arr.filter ( v => v > 30);
}

module.exports = {testSort, testLoop, testFilter};
