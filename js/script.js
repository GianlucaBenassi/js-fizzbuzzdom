const numbers = document.getElementById("numbers");

for (let i = 1; i <= 100; i++) {

    let text;

    // check multiples of 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
        text = "fizzbuzz";
    } else if (i % 3 == 0) {
        text = "fizz";
    } else if (i % 5 == 0) {
        text = "buzz";
    } else {
        text = i;
    }

    // add number element to ul
    numbers.innerHTML += `<li>${text}</li>`;

}