const numbers = document.getElementById("numbers");

for (let i = 1; i <= 100; i++) {

    let text, liClass;

    // check multiples of 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
        text = "fizzbuzz";
        liClass = "red";
    } else if (i % 3 == 0) {
        text = "fizz";
        liClass = "green";
    } else if (i % 5 == 0) {
        text = "buzz";
        liClass = "yellow";
    } else {
        text = i;
        liClass = "blue";
    }

    // add number element to ul
    numbers.innerHTML += `<li class="box ${liClass}">${text}</li>`;

}