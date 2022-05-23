/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const cnt={};
    for(let i=0;i<S.length;i+=1){
        if(!cnt[S[i]]){
            cnt[S[i]]=1;
        }else{
            cnt[S[i]]+=1;
        }
    }
  
    let sum=0;
    for(let i=0;i<J.length;i+=1){
        if(cnt[J[i]]){
            sum+=cnt[J[i]];
        }
    }
    return sum;
};

var result = numJewelsInStones("aA","aAAbbbb");
console.log(result);