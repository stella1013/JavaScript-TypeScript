var nums = [3,2,3];
var target = 6;
var targetMet;
var finalArray = [];
/*
Complexity Analysis

Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n)O(n) time. Therefore, the time complexity is O(n^2).

Space complexity : O(1).
*/
var twoSum = function(nums, target) {
	for (var i = 0; i < nums.length; i++) {
		for (var j = 1; j < nums.length; j++) {
			console.log(nums[j]);
			targetMet = nums[i] + nums[j];
			console.log(nums[i] + ' ' + nums[j]);
			if (targetMet === target) {
				finalArray = [i, j];
				return finalArray;
			}
		}
	}
};
/*
Complexity Analysis:

Time complexity : O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1), the time complexity is O(n).

Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.
*/
var twoSum_fast = function(nums, target) {
	let hash = {}; //practice creating objects
	let needthisValue;
	let answer = [];
	for (var i = 0; i < nums.length; i++) {
        hash[i] = nums[i];
    }
    for (var j = 0; j < nums.length; j++) {
        needthisValue = target - hash[j];
        if (Object.values(hash).includes(needthisValue)) { 
            if(Object.values(hash).indexOf(needthisValue) !== j){
                hashIndex =  Object.values(hash).indexOf(needthisValue);
                answer = [hashIndex, j];
                return answer;
            }
            
        }
    }
};
/*
Complexity Analysis:

Time complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.

Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.
*/
var twoSum_faster = function(nums, target) {
	let hash = {}; //practice creating objects
	let needthisValue;
	let answer = [];
	for (var i = 0; i < nums.length; i++) {
        needthisValue = target - nums[i];
        if (Object.values(hash).includes(needthisValue)) { 
            if(Object.values(hash).indexOf(needthisValue) !== i){
                hashIndex =  Object.values(hash).indexOf(needthisValue);
                answer = [hashIndex, i];
                return answer;
            }
        }
        hash[i] = nums[i];
    }
};
console.log(twoSum_faster(nums, target));
