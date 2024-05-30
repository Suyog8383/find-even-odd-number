
function Main(input) {
    var values = input.split(" ");
    console.log(values)
    var numbers = values.map(num => parseInt(num));
    console.log(numbers)
    var a = numbers[0];
    var b = numbers[1];
    var sum = a * b;
    
    if (sum % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

console.log(Main("5 1"))
