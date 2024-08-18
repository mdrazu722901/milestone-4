function evenify(elements) {
    if (elements % 2 == 0) {
        console.log(elements, ": this is even number");
    }
    else {
        console.log(elements, "this is orde Number");
    }
}
function loopify(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var elements = numbers[i];
        evenify(elements);
    }
}
var numbers = [20, 10, 30, 2, 3, 6, 38, 31, 39, 37];
loopify(numbers);
