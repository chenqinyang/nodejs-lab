
const testSort = (arr) => {
  arr.sort((a,b)=>a-b);
  return arr;
}

const testLoop = (arr) => {
  arr.map(
    (v) => console.log('++++Test: each = ', v) 
  )
}

module.exports = {testSort, testLoop};
