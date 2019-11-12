//simple generic

function echo(data:any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name:"Max", age:27}));