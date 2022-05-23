/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, counter= 0) {

    result = false;
    if(counter < 8){
        let nToStr = n.toString().split('').map(n => n*n);
        let sum = nToStr.reduce((a,b) => a+b,0);
        if(sum === 1){
            return result = true;
        }else{
            counter++;
            isHappy(sum, counter)
        }
    }
    return result;
    
};

console.log(isHappy(19))