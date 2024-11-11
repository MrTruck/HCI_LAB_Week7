//1. Print out all odd numbers between 10 and 40. Write two solutions: one with a while loop and one with a for loop

for (let i = 11; i < 40; i+=2) {
    console.log(i);
}

let i = 10;
while (i < 40) {
    i += 2;
    console.log(i-1);
}


//2. Write a function printReverse()

function printReverse(x){
    for(let i = x.length - 1; i >= 0; i--){
    console.log(x[i]);
    }    
}

let j = ["a","b"];
printReverse(j);

let k = [1,2,3,4,5];
printReverse(k);


//3. Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties.






//4. Write a function is Uniform() which takes an array as an argument and returns true if all elements in the array are identical. Otherwise, it should return false

function isUniform(u){
    const element1 = u[0];
    for (let i = 1; i < u.length; i++) {        
        if (u[i] !== element1) {
            return false;
        }

    }
    return true;
}

console.log(isUniform([1,1,1]));

let g = [1,2,1];
console.log(isUniform(g)); //for some reason it won't return if i type "isUniform(g)" without console.log().



//5. Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array.

function sumArray(rray) {
    var sum = 0;
    for (let i = 0; i < rray.length; i++) {
        sum += rray[i];
    }
    console.log(sum);
}

let r = [1,2,3,4,5];
sumArray(r);


//6. Palindrome check

function checkPalindrome(x) {

    const string_array = x.split("");
    const reversed = string_array.toReversed();
    
    const a = string_array.join("");
    const b = reversed.join("");


    console.log(Boolean(a == b));

    /* inefficient alternative ;^; :

    if (a == b) {
        console.log("True");
    }

    else {
        console.log("False");
    }

    */
}

checkPalindrome('racecar');
checkPalindrome('cat');