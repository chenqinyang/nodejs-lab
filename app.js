// const tFunc = require('./arrayTest');
const arrT = require('./arrayTest');
const mapT = require('./mapTest');

const tArr = [ 2, 54, 7, 9, 34, 66];
arrT.testLoop(tArr);

console.log('++++Test: after sort , ', arrT.testSort(tArr));

arrT.testLoop(tArr);

console.log('++++Test: after filter, ', arrT.testFilter(tArr));

console.log('================================================================')

const tMap = new Map ();
tMap.set('QY', {id: 443322});
tMap.set('Siri', {id: 223355});
tMap.set('Steven', {id: 88599});
tMap.set('Liz', {id: 112233});

mapT.testLoop(tMap);
mapT.testLoopKeys(tMap);
mapT.testLoopEntry(tMap);
mapT.testLoopValue(tMap);
mapT.testLoopSimple(tMap);