function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    var number;
    expr = expr.trim();
    array = expr.split(' ');
    if (array.length === 1) {
        array = [];
        for (let j = 0; j < expr.length; j++) {
            array.push(expr[j]);
        }
    }

    function simpleOperands(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ')' || arr[i] == '(') {
                array = 0;
                return array;
            }
            if (arr[i] == "*") {
                number = (arr[i - 1] * arr[i + 1]);
                array.splice(0, 3, number);

                return array;
            } else if (arr[i] == "/") {
                if (arr[i + 1] == 0) {
                    throw "TypeError: Division by zero.";
                }
                number = (arr[i - 1] / arr[i + 1]);
                array.splice(0, 3, number);

                return array;
            } else if (arr[i] == "+") {
                number = (Number(arr[i - 1]) + Number(arr[i + 1]));
                array.splice(0, 3, number);

                return array;
            } else if (arr[i] == "-") {
                number = (arr[i - 1] - arr[i + 1]);
                array.splice(0, 3, number);

                return array;
            }
        }
    }

    while (array.length > 1) {
        simpleOperands(array);
    }

    return (Number(array.join()));
}

module.exports = {
    expressionCalculator
}