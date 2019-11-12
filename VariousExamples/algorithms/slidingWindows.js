// ##########  SLIDING WINDOWS  #############
/*
Useful for solving problems in array or string. Could reduce complexity from O(n2) to O(n)

2 types of sliding windows
    -fixed window length k:
    -Two pointers + criteria

FIXED WINDOW LENGTH K - window size is fixed
    Keywords:
        find something in the window such as:
            `the maximum sum of all the windows`
            `the maximum sum of all the windows`
            `the maximum or median number of each window`

    Output:
        integer
        list,
        queue
        deque

TWO POINTERS + CRITERIA - window size is not fixed
    Keywords:
        find subarray that meets the criteria:
            `subarray whose sum equals a target value`

    Output:
        integer
        list,
        queue
        deque

*/

/**
 * Examples.
 * Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.
 * 
 * Fixed Window Length K since the length of the window is fixed.
 *  1. find the first window with size k.
 *  2. var curSum - which equals the sum of all the element within current window
 *  3. var maxSum - maximum sum among all the windows we have examined.
 *  4. incrementing one unit at a time(moving left to right)
 *  5. subtract the left element in current window 
 *  6. and add the next element of array until end of array
 *  7. return maxSum divided by k whichs is the maximum average among all the windows of length k.
 */

var nums = [-2,1,-3,4,-1,2,1,-5,4];
var windowLength = 4;

function findMaxAverage(nums, winLength){
    var numOfElements = nums.length;
    var curSum; //2.
    var maxSum; //3.

    for(var i=0; i < winLength; i++){ // 1.
        if(curSum !== undefined){
            curSum = curSum + parseInt(nums[i]);
        }else{
            curSum = parseInt(nums[i]);
        }
        //2.
        console.log('curSum', curSum);
    }
    console.log('maxSum', maxSum);
    if(maxSum !== undefined){
        maxSum = Math.max(maxSum, curSum);
    }else{
        maxSum = curSum;
    }
    
    for(var j=windowLength; j < numOfElements; j++){ //4.
            let previousLeft;
            if( j === 0){
                previousLeft = parseInt(nums[0]);
                
            } else {
                previousLeft = parseInt(nums[j-winLength]);
            }
            let nextRight = parseInt(nums[j]);
            curSum = curSum - previousLeft; //5.
            console.log('curSum previousLeft', curSum);
            curSum = curSum + nextRight; //6
            console.log('curSum nextRight', curSum);
            console.log('j', j);
            maxSum = Math.max(maxSum, curSum);
    
    }
    return maxSum/windowLength; //7
}

console.log(findMaxAverage(nums, windowLength));

/**
 * Examples.
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.
 * 
 * Fixed Window Length K since the length of the window is fixed.
 *  1. find the first window with size k.
 *  2. incrementing one unit at a time(moving left to right)
 *  3. subtract the left element in current window 
 *  4. and add the next element of array until end of array
 *  5. sort numbers within the window
 *  6. new and oldest elements need sorting.
 *  7. removal - remove oldest shift everything down 1.
 *  8. insert - add to end.
 *  6. find the median.
 *  7. return median array.
 */

function remove(sorted, removeIndex){
    let i = 0;
            while((i < sorted.length) && (sorted[i] < removeIndex)){
                sorted[i] = sorted[i + 1]; //everything right of index shifts left one spot
                i++;
            }
}
function insert(sorted, insertIndex){
    let i = 0;
    while((i <=0) && (sorted[i] > insertIndex)){
        sorted[i + 1] = sorted[i]; //everything right of index shifts left one spot
        i++;
    }
}
function medianSlidingWindow(nums, winLength){
    var numOfElements = nums.length;
    var sorted = []; //2.
    var median = []; //3.
    var res = [];

    for(var i=0; i < winLength; i++){ // 1.
      sorted.push(nums[i]);
        console.log('sorted', sorted);
    }
    
    sorted.sort();
    var middleOfWindow = Math.floor(winLength/2);
    if(winLength %2 === 0){
        let middle1 = sorted[middleOfWindow -1];
        let middle2 = sorted[middleOfWindow];
        median = (middle1 + middle2)/2;
    }else{
        median = sorted[middleOfWindow];
    }
  
    console.log('median', median);

    for(var j=windowLength; j < numOfElements; j++){ //4.
            let previousLeft;
            if( j === 0){
                previousLeft = parseInt(nums[0]);
                
            } else {
                previousLeft = parseInt(nums[j-winLength]);
            }
            let nextRight = parseInt(nums[j]);
            //remove
            remove(sorted, previousLeft);
            //insert
            insert(sorted, nextRight);

            if(winLength %2 === 0){
                let middle1 = sorted[middleOfWindow -1];
                let middle2 = sorted[middleOfWindow];
                median = (middle1 + middle2)/2;
            }else{
                median = sorted[middleOfWindow];
            }
            res.push(median);
    }
    return res; //7
}

console.log(medianSlidingWindow(nums, windowLength));

/**
 * Examples.
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn’t one, return 0 instead.
 * 
 * Two Pointer + criteria since the length of the window isn't fixed.
 *  1. find the first window that meets the criteria using two pointer technique
 *  2. move start pointer one step ahead until pointer is not true.
 *  3. update global min_len - records minimum subarray length that satisfies criteria.

 */
var nums2 = [2,1,3,4,1,2,1,5,4];
 var target = 8;
 function minSubArrayLen(nums, target){
     var numOfElements = nums.length;
     var minLen = Number.MAX_VALUE;;
     var i=0;
     var sum=0;

     for(j=0; j<numOfElements; j++){
         sum = sum + nums[j];
         while(sum >= target){
             minLen = Math.min(minLen, j-i+1);
             sum = sum - nums[i++];
         }
     }
     return minLen === Number.MAX_VALUE ? 0 : minLen;
 }

 console.log(minSubArrayLen(nums2, target));

 /**
 * Examples.
 * Given a string, find the length of the longest substring T that contains at most k distinct characters.
 * [e,c,e,b,a], k = 2, the first window is [e, c, e], the next starting index should be 2
 * [e,c,c,b,a], k = 2, the first window is [e, c, c], the next starting index should be 1
 * 
 * Two Pointer + criteria since the length of the window isn't fixed.
 *  1. Hash Table, where the key is the character and the value is the last index of in the string
 *  2. when Hash Table is larger than k remove oldest element from map and start from next index.

 */
 var target2 = 4;
 function lengthOfLongestSubstringKDistict(nums, target){
     var map = {};
     var maxLen = 0;
     var j=0;
     for(var i=0; i<nums.length; i++){
         map[i]= nums[i];
         console.log('map', map);
         if(Object.keys(map).length > target){
             while(j < i && map[nums[j]] !== j){
                 delete map[nums[j+1]];
                 j++;
             }
         }
         maxLen = Math.max(maxLen, i-j+1);
         console.log('maxLen', maxLen);
     }
     return maxLen;
 }
 lengthOfLongestSubstringKDistict(nums2, target2);