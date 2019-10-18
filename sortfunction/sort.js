[1,2,3,9,2].sort();
// console.log([1,2,3,9,2].sort());

// console.log([1, "a", function(){}, {}, 12, "c"].sort());

[
	{ name: "Robin Van Persie", age: 28 },
	{ name: "Theo Walcott", age: 22 },
	{ name: "Bacary Sagna", age: 26  }
].sort(function(obj1, obj2) {
	// Ascending: first age less than the previous
	return obj1.age - obj2.age;
});

const nbaPlayers = [
    {name: 'LeBron James', salary: 35650000, debut: '10-29-2003'},
    {name: 'Michael Jordan', salary: 33100000, debut: '10-26-1984'},
    {name: 'Stephen Curry', salary: 37460000, debut: '10-28-2009'},
    {name: 'Kobe Bryant', salary: 25000000, debut: '11-03-1996'},
    {name: 'Magic Johnson', salary: 2500000, debut: '10-12-1979'}
    ];

    const sortByName = (nbaPlayers) => nbaPlayers.sort((a, b)=> a.name > b.name);

    // console.log(sortByName(nbaPlayers));

    const sortByHighestSalary = (nbaPlayers) => nbaPlayers.sort((a, b)=> b.salary - a.salary);
    // console.log(sortByHighestSalary(nbaPlayers));

    const sortByEarliestDebut = (nbaPlayers) => nbaPlayers.sort((a, b) => new Date(a.debut) - new Date(b.debut));
   // console.log(sortByEarliestDebut(nbaPlayers));

var letters = ["R","O","F","L"];
    
const letterSort = (letters) => letters.sort(function(a, b)
{
    var x = a.toLowerCase(), y = b.toLowerCase();
    
    return x < y ? -1 : x > y ? 1 : 0;
});

// console.log(letterSort(letters));

var shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"]
    ];

const multidi1 = (shapes) => shapes.sort(function(a, b)
{
    return a[0] - b[0];
});

// console.log(multidi1(shapes));

// sorting arrays with addition futher condiotional logic
var shapes2 = [
    [4, "Trapezium"],
    [5, "Pentagon"],
    [3, "Triangle"],
    [4, "Rectangle"],
    [4, "Square"]
    ];
const multidi2 = (shapes) => shapes.sort(function(a, b)
{
    if(a[0] === b[0])
    {
        var x = a[1].toLowerCase(), y = b[1].toLowerCase();
        
        return x < y ? -1 : x > y ? 1 : 0;
    }
    return a[0] - b[0];
});

console.log(multidi2(shapes2));
// sorting by specificity(rule strength), index(rule position), depth( depth of inheritance chain)
// only drawback of sorting like this is stable sort. to achieve stable sort no two objects should be exactly the same
//even assigning a numeric index propery to each reflecting initial order would ensure stable sort.
rules.sort(function(a, b)
{
    if(a.specificity.toString() === b.specificity.toString()) 
    { 
        if(a.index === b.index) 
        { 
            return b.depth - a.depth; 
        }
        return a.index - b.index; 
    }
    
    if(a.specificity[0] !== b.specificity[0]) 
    { 
        return a.specificity[0] - b.specificity[0]; 
    }
    if(a.specificity[1] !== b.specificity[1]) 
    { 
        return a.specificity[1] - b.specificity[1]; 
    }
    if(a.specificity[2] !== b.specificity[2]) 
    { 
        return a.specificity[2] - b.specificity[2]; 
    }
    return a.specificity[3] - b.specificity[3];
});