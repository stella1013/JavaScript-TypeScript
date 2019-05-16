//simple generic

function echo(data:any){
    return data;
}
console.log(echo("Max"));
console.log(echo(27));

//better generic

function betterEcho<T>(data:T) {
    return data;
}
console.log(betterEcho("Max"));
console.log(betterEcho(27));

//built in generic

const testResults:Array<number> = [1.94, 2.33];
testResults.push(-2.99);

//generic arrays

function printAll<T>(args: T[]) {
    args.forEach((element)=> console.log(element));
}
printAll<string>(["Apple", "Banna"]);


///generic function types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

//generic class 
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate():number{
        return +this.baseValue * +this.multiplyValue;
    }
    
}
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue="5";
simpleMath.multiplyValue =10;
console.log(simpleMath.calculate());

class MyMap {
setItem(key: string, item: T) // should create a new key-value pair
 
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
