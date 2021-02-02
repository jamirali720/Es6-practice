const numbers = [39, 10, 50, 32, 13, 53, 65, 18];
numbers[1] = 43;
numbers[3] = 45
console.log(numbers[numbers.length -1]);


function add(num1, num2 = 10){
    num2 = num2 || 20
    return num1 + num2;
}
const total = add (10);
console.log(total);