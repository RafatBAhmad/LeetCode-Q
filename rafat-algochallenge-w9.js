/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    var arr = s.split("");
    const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
    var stack = [];
    
    for(var c in arr){
        if(vowels.has(arr[c])){
            stack.push(arr[c]);
        }       
    }
    for(let i=0;i<arr.length;i++)
    {
        if(vowels.has(arr[i])) 
        {
            arr[i] = stack.pop();
        }
    }
    return arr.join("").toString();
    
};

console.log(reverseVowels("hello"));