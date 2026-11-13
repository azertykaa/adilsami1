
var globalVar = "Test"; // Code Smell: tst3mal dyal var qdim

function calculateSum(a, b) {
    x = a + b; 
    return x;
}


function runUserCode(userString) {
    return eval(userString); 
}

console.log(calculateSum(5, 10));