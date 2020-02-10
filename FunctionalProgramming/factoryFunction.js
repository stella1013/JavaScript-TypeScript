//a function that produces another function


function createTaxCalculator(taxRate){
   function calculateTax(amount){// every function in javascript is closure. outer function can't access inner function. the have different 'lexical environements'

    return amount * taxRate;
    } 

    return calculateTax; ///this is a pointer to the function.
}
const vatAmount = calculateTax(100, 0.19);

const incomeTax = calculateTax(100, 0.25);


const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));

console.log(calculateIncomeTaxAmount(200));

/**
 * const and let have block scope
 * var has global scope
 * 
 */