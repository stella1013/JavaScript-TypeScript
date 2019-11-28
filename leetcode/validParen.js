/**
 * @param {string} s
 * @return {boolean}
 */

 var st = "()[]{}";
var helper = function(left, right){
    let i=0;
    let j=0;
    console.log('left: '+left+' right: '+right);

    while(i<left.length && j<right.length){
       if(left[i] === '(' && right[j] === ')'){
           return true;
       }else if(left[i] === '[' && right[j] === ']'){
           return true;
       }else if(left[i] === '{' && right[j] === ']'){
           return true;
       }
       
        i++;
        j++;
    }

    return false;
    
}

var isValid = function(s) {
    let arr = [];
    if(s.length <= 1){
        return s;        
    }
    function helper(arr){
        for(var i=0; i< arr.length-1; i++){
            if((arr[i] === '(' && arr[i+1] === ')') || (arr[i] === '[' && arr[i+1] === ']') || (arr[i] === '[' && arr[i+1] === ']')){
                let temp = arr.split(i, i+1);
                return helper(arr.split(i, i+1));
            }else{return false}
        }
        return true
    }
    return helper(s);
};

console.log(isValid(st));