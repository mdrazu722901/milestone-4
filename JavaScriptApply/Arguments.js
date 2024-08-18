function MultiplePramiter(num1, num2, num3){
            // var sum = num1 + num2 + num3;
            // return sum;
            var sumValue = 0;
            var totalParamiter = arguments; // it`s Given Object..............
            for (let i = 0; i < totalParamiter.length; i++) {
                const element = totalParamiter[i];
                sumValue = sumValue + element;
            }
            return sumValue;
}

var result = MultiplePramiter(3, 4, 5, 10, 20);
console.log(result);

