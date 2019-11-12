/**
 * inputs
 * 1. integer Array
 *
 * output
 * contiguous sub array containing atleast one number which has the largest sum.. return sum
 *
 * ex.
 * input: [-2,1,-3,4,-1,2,1,-5,4].
 * output: 6
 * explanation: [4,-1,2,1] the largest sum=6
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSum_naive = function(nums, window) {
	var maxSum;
	//var window = 4;
	let j = window;
	for (var i = 0; i < window; i++) {
		let val = parseInt(nums[i]);
		if (maxSum === undefined) {
			maxSum = val;
		}

		maxSum = maxSum + val;

		while (j < nums.length) {
			let previousLeft = parseInt(nums[j - window]);
			let nextRight = parseInt(nums[j]);

			maxSum = maxSum - previousLeft;
			maxSum = maxSum + nextRight;
			j++;
			//console.log('nums[j-window]', nums[j-window]);
			// console.log('nums[j]', nums[j]);
			// console.log('maxSum', maxSum);
		}

		console.log('realMaxSum', maxSum);
	}

	return maxSum;
};
function crossSum(arr, left, right, p) {
	if (left === right) {
		return arr[left];
	}

	var leftSubsums = Number.MIN_VALUE;
	var rightSubsums = Number.MIN_VALUE;
	var curRightSubsums;
	var curLeftSubsums;
	var curSum = 0;

	for (var i = p; i > left - 1; i--) {
		curSum = curSum + parseInt(arr[i]);
		curLeftSubsums = Math.max(leftSubsums, curSum);
	}
	for (var j = p; j < right + 1; j++) {
		curSum = curSum + parseInt(arr[j]);
		curRightSubsums = Math.max(rightSubsums, curSum);
	}
	console.log('curSum  ', curSum);
	return curLeftSubsums + curRightSubsums;
}

function helper(arr, left, right) {
	let p = (left + right) / 2;

	if (left === right) {
		return arr[left];
	}

	let leftSum = maxSubArray(arr, left, p);
	let rightSum = maxSubArray(arr, p + 1, right);
	let crossSumV = crossSum(arr, left, right, p);
	return Math.max(Math.max(leftSum, rightSum), crossSumV);
}
function maxSubArray(nums) {
	return helper(nums, 0, nums.length - 1);
}

console.log(maxSubArray(nums));

function maxSubArrayLoop(nums) {
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
		let startTotal; //tracks math
		let window = [];
		let endTotal;
		let sum = 0;
		if (nums.length <= 2) {
			if (nums.length <= 1) {
				window.push(nums[0]);
            }else{
                if( nums[0] > nums[1]){
                    window.push(nums[0]);
                    if((nums[0] + nums[1]) > nums[0]){
                        window.push(nums[1]);
                    }
                }else{
                    if((nums[1] + nums[0]) > nums[1]){
                        window.push(nums[0]);
                    }
                    window.push(nums[1]);
                }
            }
            
            
		} else if (nums.length > 2) {
			for (let i = 0; i < nums.length; i++) {
				if (startTotal === undefined) {
					startTotal = nums[i];
				} else {
					startTotal += nums[i];
				}
				if (endTotal === undefined) {
					endTotal = nums[nums.length - 1];
				}

				window.push(nums[i]);

				if (nums[i - 1] > startTotal) {
					window = [nums[i - 1]];
					startTotal = nums[i - 1];
				}
			}

			for (let j = window.length-1; j >=0; j--) {
				endTotal += window[j + 1];

				if (window[j + 1] < endTotal) {
					window.pop(j + 1);
				}
			}
		}

		console.log(window);
		for (let k = 0; k < window.length; k++) {
			sum += window[k];
		}

		return sum;
	};

