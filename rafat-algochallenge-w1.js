/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//There is 2 ways to solve this question

//Solution #1 using HashMap with one for loop:
var twoSum = function(nums, target) {
    var myHash = new Map();
    for(let i=0;i<nums.length;i++){
        var seconde = target - nums[i]
        if(myHash.has(seconde)){
            return [i, myHash.get(seconde)];
        }
        myHash.set(nums[i],i);
    }
    
};
console.log(twoSum([2,5,5,15],10));

//Solution #2 using 2 for loop:
var twoSum1 = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j =1;j<nums.length;j++){
            if(nums[i]+nums[j] == target && i != j){
                return [i, j];
            }
        }
        
    }
    
};
console.log(twoSum1([2,5,5,15],10));