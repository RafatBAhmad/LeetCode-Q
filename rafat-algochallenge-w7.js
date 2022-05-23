/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var appears = nums.length/2;
    
    var majority_element = [];
    var map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }     
    }
    for (let [key, value] of map){
        
        if(value > appears){
            majority_element.push(key); 
        }
    }
    return majority_element;
};
console.log(majorityElement([3,2,3]));
