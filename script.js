//Program to write fizz buzz

for(n=1;n<=100;n++){
    if (n % 3 == 0 && n % 5 == 0)
        console.log("FizzBuzz");
    else if (n % 3 == 0)
        console.log("Fizz");
    else if (n % 5 == 0)
        console.log("Buzz");
    else
        console.log("Invalid");
}


// Program to find palindrome or  not

let palindrome = "malayalam";
function palin(p) {
    let rev = "";
    for (let i = p.length - 1; i >= 0; i--) {
        rev += p[i];
    }
    if (rev == p) {
        return "Palindrome";
    } else {
        return "Not palindrome";
    }
}
console.log(palin(palindrome));




//Program to find largest element in array
let arr = [8, 17, 3, 88, 50];
function high(num) {
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (max < num[i])
            max = num[i];
    }
    return max;
}
console.log(high(arr));



//Program that takes a string and returns an object

let str = 'sampath';
function program(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (result[ch] != null) {
            result[ch] += 1;
        } else {
            result[ch] = 1;
        }
    }
    return result;
}
console.log(program(str));




//5
//Program to find factorial of a number

function factorial(fact) {
    let f = 1;
    for (let i = 1; i <= fact; i++) {
        f = f * i;
    }
    return f;
}
console.log(factorial(5));


//Program to change celcius to farenheit

function heat(h) {
    return (h * (9 / 5)) + 32;
}
console.log(heat(32));


//8
