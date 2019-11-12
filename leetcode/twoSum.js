var nums = [
	572,
	815,
	387,
	418,
	434,
	530,
	376,
	190,
	196,
	74,
	830,
	561,
	973,
	771,
	640,
	37,
	539,
	369,
	327,
	51,
	623,
	575,
	988,
	44,
	659,
	48,
	22,
	776,
	487,
	873,
	486,
	169,
	499,
	82,
	128,
	31,
	386,
	691,
	553,
	848,
	968,
	874,
	692,
	404,
	463,
	285,
	745,
	631,
	304,
	271,
	40,
	921,
	733,
	56,
	883,
	517,
	99,
	580,
	55,
	81,
	232,
	971,
	561,
	683,
	806,
	994,
	823,
	219,
	315,
	564,
	997,
	976,
	158,
	208,
	851,
	206,
	101,
	989,
	542,
	985,
	940,
	116,
	153,
	47,
	806,
	944,
	337,
	903,
	712,
	138,
	236,
	777,
	630,
	912,
	22,
	140,
	525,
	270,
	997,
	763,
	812,
	597,
	806,
	423,
	869,
	926,
	344,
	494,
	858,
	519,
	389,
	627,
	517,
	964,
	74,
	432,
	730,
	843,
	673,
	985,
	819,
	397,
	607,
	34,
	948,
	648,
	43,
	212,
	950,
	235,
	995,
	76,
	439,
	614,
	203,
	313,
	180,
	760,
	210,
	813,
	920,
	229,
	615,
	730,
	359,
	863,
	678,
	43,
	293,
	978,
	305,
	106,
	797,
	769,
	3,
	700,
	945,
	135,
	430,
	965,
	762,
	479,
	152,
	121,
	935,
	809,
	101,
	271,
	428,
	608,
	8,
	983,
	758,
	662,
	755,
	190,
	632,
	792,
	789,
	174,
	869,
	622,
	885,
	626,
	310,
	128,
	233,
	82,
	223,
	339,
	771,
	741,
	227,
	131,
	85,
	51,
	361,
	343,
	641,
	568,
	922,
	145,
	256,
	177,
	329,
	959,
	991,
	293,
	850,
	858,
	76,
	291,
	134,
	254,
	956,
	971,
	718,
	391,
	336,
	899,
	206,
	642,
	254,
	851,
	274,
	239,
	538,
	418,
	21,
	232,
	706,
	275,
	615,
	568,
	714,
	234,
	567,
	994,
	368,
	54,
	744,
	498,
	380,
	594,
	415,
	286,
	260,
	582,
	522,
	795,
	261,
	437,
	292,
	887,
	405,
	293,
	946,
	678,
	686,
	682,
	501,
	238,
	245,
	380,
	218,
	591,
	722,
	519,
	770,
	359,
	340,
	215,
	151,
	368,
	356,
	795,
	91,
	250,
	413,
	970,
	37,
	941,
	356,
	648,
	594,
	513,
	484,
	364,
	484,
	909,
	292,
	501,
	59,
	982,
	686,
	827,
	461,
	60,
	557,
	178,
	952,
	218,
	634,
	785,
	251,
	290,
	156,
	300,
	711,
	322,
	570,
	820,
	191,
	755,
	429,
	950,
	18,
	917,
	905,
	905,
	126,
	790,
	638,
	94,
	857,
	235,
	889,
	611,
	605,
	203,
	859,
	749,
	874,
	530,
	727,
	764,
	197,
	537,
	951,
	919,
	24,
	341,
	334,
	505,
	796,
	619,
	492,
	295,
	380,
	128,
	533,
	600,
	160,
	51,
	249,
	5,
	837,
	905,
	747,
	505,
	82,
	158,
	687,
	507,
	339,
	575,
	206,
	28,
	29,
	91,
	459,
	118,
	284,
	995,
	544,
	3,
	154,
	89,
	840,
	364,
	682,
	700,
	143,
	173,
	216,
	290,
	733,
	525,
	399,
	574,
	693,
	500,
	189,
	590,
	529,
	972,
	378,
	299,
	461,
	866,
	326,
	43,
	711,
	460,
	426,
	947,
	391,
	536,
	26,
	579,
	304,
	852,
	158,
	621,
	683,
	901,
	237,
	22,
	225,
	59,
	52,
	798,
	262,
	754,
	649,
	504,
	861,
	472,
	480,
	570,
	347,
	891,
	956,
	347,
	31,
	784,
	581,
	668,
	127,
	628,
	962,
	698,
	191,
	313,
	714,
	893
];
var target = 101;
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
			if (Object.values(hash).indexOf(needthisValue) !== j) {
				hashIndex = Object.values(hash).indexOf(needthisValue);
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

///helper method pattern recursion inner and outer function
//var nums = [3, 2, 4];
//var target = 6;
//56ms runtime 35.3mb O(nlogn)
// variables needed 
/*
mainFunction(array, targetNumber)
Variables needed
    - empty array for answer array
    - -1 int index for recursion.
    - cache to hold numbers for memoization
    - and the value I'm looking for
innerRecursionFunction(index that is 1 more than main index)
main index acts as outer loop
inner index acts a inner loop
Conditionals
    -if index is still within input length
        find value I'm looking for by targt - current element
        -if value is in the cache:
            -if in cache 
            then return answer
        -else if not in the cache:
            if the value I'm looking for is in the array
            then return it in answer array
            else if not in answer array
            then cache it
        - increment beginning index
        -re-run helper function with new incrmented beginning + 1
END
innerHelper re runs each time inner index reaches the end then increaments outer index.
Keeps going in a loop of cacheing until it find the right number.
What happens if ther is no answer and outer i reaches the end. I guess I need to put in a safe guard.
Though it could just run an empty loop since none of the conditions have been met. Still not good.
*/
var twoSum_faster = function(nums, target) {
	let answer = [];
	let needthisValue;
	let i = -1;
	let cache = {};
	innerHelper = innerIndex => {
		if (innerIndex <= nums.length) {
			needthisValue = target - nums[i];
			let find = nums[i];
			if (cache[find] !== undefined) {
				if (cache[needthisValue] !== i) {
					answer = [cache[find], i];
					return answer;
				}
			} else {
				if (needthisValue === nums[innerIndex]) {
					answer = [i, innerIndex];

					return answer;
				} else {
					cache[needthisValue] = i;
				}
			}
			i++;
			innerHelper(i + 1);
		}
	};
	if (i === -1) {
		i = 0;
		innerHelper(i + 1);
	}
	return answer;
};
var twoSum_es6 = (nums, target) => {
	let answer = [];
	let needthisValue;
	let i = -1;
	let cache = {};
	innerHelper = innerIndex => {
		if(innerIndex <= nums.length) {
			needthisValue = target - nums[i];
			let find = nums[i];
            (cache[find] !== undefined) 
            ? 
            ((cache[needthisValue] !== i) && (answer = [cache[find], i]))
            : 
            ((needthisValue === nums[innerIndex]) ? (answer = [i, innerIndex]) : (cache[needthisValue] = i))
			i++;
			innerHelper(i + 1);
        }
	};
	if (i === -1) {
		i = 0;
		innerHelper(i + 1);
	}
	return answer;
};
console.log(twoSum_es6(nums, target));
