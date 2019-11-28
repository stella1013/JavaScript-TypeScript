
const getResults = () => fetch("js/data.json")
  .then(response => response.json())
  .then(json => json);
/*
.then((data) => {
   return data.message.map(node => console.log(node))
.catch('something went wrong');
});
    */

let sortedData = async () =>{
return getResults()
.then((data) => data.message.drugs)
.then(drugs => {
    let sorted = drugs.sort((a, b)=> a.pricing.price > b.pricing.price);
    console.log(sorted);
    })
} 


    console.log(sortedData());

   // const sortByHighestSalary = (nbaPlayers) => nbaPlayers.sort((a, b)=> b.salary - a.salary);
    // console.log(sortByHighestSalary(nbaPlayers));

   // const sortByEarliestDebut = (nbaPlayers) => nbaPlayers.sort((a, b) => new Date(a.debut) - new Date(b.debut));
   // console.log(sortByEarliestDebut(nbaPlayers));