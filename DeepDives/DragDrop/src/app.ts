import { Product } from './product.model';
import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';



const p1 = new Product('A Book', 12.99);
console.log(p1.getInformation());


const products = [
	{ title: 'A Carpet', price: 29.88 },
	{ title: 'A Book', price: 12.99 }
]


const loadedProducts = products.map(prod =>{
	return new Product(prod.title, prod.price);
})

for(const prod of loadedProducts){
	console.log(prod.getInformation());
}
//Class transformer helps minimize the above. JSON has no object linker..so a lot of code is used.
//Class Validator  don't have reinvent validation.
//npm install class-transformer --save
//npm install reflect-metadata --save



//connect to html elements, form, divs
//create autobind decorator.
//create singleton
//validation object
//!= includes  undefined so could just do != null
//practice template literals
//manage lists of listeners
//drag and drop event

declare var GLOBAL: string;
console.log(GLOBAL);

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

