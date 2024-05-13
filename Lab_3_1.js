let K = 0.01;
let L = 3;
let x = 0;
let y = 0;
let a = 0;
let b = 0;

console.log("Please enter a value for X:");
x = parseFloat(prompt());

a = 7.002 * Math.sqrt(K) - 1 + 0.1 * (Math.exp(x) + Math.exp(-x));
if (a <= 0) {
    console.log("ERROR: Negative value in square root calculation for 'a'.");
} else {
    a = Math.exp((1.0 / 5.0) * (Math.log(a)));
    console.log("Result for A is:", a);

    b = Math.log10(L) * (Math.cos(Math.PI / 5) + Math.cos(3 * Math.PI / 5));
    console.log("Result for B is:", b);

    if (Math.pow(a, 2) + Math.pow(b, 2) > 0.1) {
        y = Math.atan(5 * Math.pow(a, 2) + 7 * Math.pow(b, 2));
    } else {
        if (1 - Math.pow(5 * Math.pow(a, 2) + 7 * Math.pow(b, 2), 2) == 0) {
            console.log("ERROR: Division by zero");
        } else {
            y = Math.atan((5 * Math.pow(a, 2) + 7 * Math.pow(b, 2)) / (Math.sqrt(1 - Math.pow(5 * Math.pow(a, 2) + 7 * Math.pow(b, 2), 2))));
        }
    }
    console.log("Result for Y is:", y);
}

