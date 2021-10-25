//function declarations//
function totalSquare1 (num1, num2){
        return ((num1 * num1) + (num2 * num2)) * 2;
    }
    totalSquare1(2, 3);

//functions expressions//
const totalSquare2= function(num1, num2) {
    return ((num1 * num1) + (num2 * num2)) * 2;
}
totalSquare2(2, 3);
 
//Arrow functions//
const totalSquare3 = (num1,num2) => {
    return ((num1 * num1) + (num2 * num2)) * 2;
    };
    totalSquare3(2, 3);
