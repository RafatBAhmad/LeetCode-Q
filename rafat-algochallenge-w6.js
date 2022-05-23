/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(let item of s){
        t = t.replace(item, '');
    }
    return t;
};

console.log(findTheDifference('ae','aea'));

/* pseudo code:

FOR all the characters in s
Replace the character in t with ''
return t

*/
