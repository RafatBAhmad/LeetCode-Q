/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    let romanNum  = {
        'I':1,
        'V':5,
        'X':10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let num = s.split('')
    for(let i=0;i<num.length;i++){
        switch(num[i]){   
            case "I":
                if(i != num.length && (num[i+1] != "V" && num[i+1] != "X")){
                    result += romanNum[num[i]];
                }else if(i == num.length){
                    result += romanNum[num[i]];
                }else if((num[i+1] == "V" || num[i+1] == "X")){
                    result += romanNum[num[i+1]] - romanNum[num[i]];
                }
                break;
                
            case "V":
                if(i != 0 && num[i-1] == "I"){
                    break;
                }else if(i != 0 && num[i-1] != "I"){
                    result += romanNum[num[i]];
                }else if(i == 0){
                    result += romanNum[num[i]];
                }
                break;
           
            case "X":
                if(i != num.length && (num[i+1] != "L" && num[i+1] != "C")){
                    if(i != 0 && num[i-1] == "I"){
                        break;
                    }else if(i != 0 && num[i-1] != "I"){
                        result += romanNum[num[i]];
                    }else if(i == 0){
                        result += romanNum[num[i]];
                    }
                }else if(i == num.length){
                    if(num[i-1] == "I"){
                        break;
                    }else{
                        result += romanNum[num[i]];
                    }
                }else if((num[i+1] == "L" || num[i+1] == "C")){
                    result += romanNum[num[i+1]] - romanNum[num[i]];
                }
                break;
            
            case "L":
                if(i != 0 && num[i-1] == "X"){
                    break;
                }else if(i != 0 && num[i-1] != "X"){
                    result += romanNum[num[i]];
                }else if(i == 0){
                    result += romanNum[num[i]];
                }
                break;
                
            case "C":
                if(i != num.length && (num[i+1] != "D" && num[i+1] != "M")){
                    if(i != 0 && num[i-1] == "X"){
                        break;
                    }else if(i != 0 && num[i-1] != "X"){
                        result += romanNum[num[i]];
                    }else if(i == 0){
                        result += romanNum[num[i]];
                    }
                }else if(i == num.length){
                    if(num[i-1] == "X"){
                        break;
                    }else{
                        result += romanNum[num[i]];
                    }
                }else if((num[i+1] == "D" || num[i+1] == "M")){
                    result += romanNum[num[i+1]] - romanNum[num[i]];
                }
                break;
                
            case "D":
                if(i != 0 && num[i-1] == "C"){
                    break;
                }else if(i != 0 && num[i-1] != "C"){
                    result += romanNum[num[i]];
                }else if(i == 0){
                    result += romanNum[num[i]];
                }
                break;
               
            case "M":
                if(i != 0 && num[i-1] == "C"){
                    break;
                }else if(i != 0 && num[i-1] != "C"){
                    result += romanNum[num[i]];
                }else if(i == 0){
                    result += romanNum[num[i]];
                }
                break;
        }
    }
    return result;
};

console.log(romanToInt("MCMXCIV"));