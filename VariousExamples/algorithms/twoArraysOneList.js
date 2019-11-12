const bigData = require('./data.json');
let sortedFacilities = [];
// console.log(bigData);

// use the premium object as the one to iterate over since there are less objects than all.
// let premiumObj = [];


// console.log(premiumIds);
//look up data facility id with premium object key
let premiumObj = async(arr) => {
  return arr;
}
async function loadData() {
  return premiumObj(bigData)
  .then(results => { return premiumObj.map((premium)=> Object.keys(premium.premiumContent)})
  .then(results => premId.map(id => premiumObj.find(fac => fac.data.id === id? sortedFacilities.push(fac):null)))
  .then(results => results.map(id => premiumObj.find(fac => fac.data.id !== id? sortedFacilities.push(fac):null))))
  .catch('error');
  };

console.log(loadData());
//remove them from array into another array

// merge both together so that  the premium is in front