function checkFizzBuzz() {
    // var Fizz = document.createElement("IMG");
    // Fizz.setAttribute("src", "Buzz-logo.png");
    // Fizz.setAttribute("width", "200");
    // Fizz.setAttribute("height", "200");

    // var Buzz;
    //  = document.createElement("IMG");
    // Buzz.setAttribute("src", "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi9qYDYlLDiAhVY7J4KHUjKAY0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.zazzle.co.uk%2Fbuzzing%2Bbadges&psig=AOvVaw1llulInyXi7HfJT-VyCSX2&ust=1558649678925509");
    // Buzz.setAttribute("width", "200");
    // Buzz.setAttribute("height", "200");

    // var FizzBuzz;
    //  = document.createElement("IMG");
    // FizzBuzz.setAttribute("src", "Buzz-logo.png");
    // FizzBuzz.setAttribute("width", "200");
    // FizzBuzz.setAttribute("height", "200");

    var inputValue = document.getElementById("myNumber").value;

    if ((inputValue % 3) === 0) {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "Fizz";
        return(output);
    }
    else if ((inputValue % 5) == 0) {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "Buzz";
        return(output);
    }
    else if ((inputValue % 3) == 0 && (inputValue % 5) == 0) {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "FizzBuzz";
        return(output);
        // document.getElementById("displayValue").appendChild(FizzBuzz);   
    }
    else {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "Not a Fizz or Buzz or FizzBuzz";
        return(output);
        // console.log("Not a Fizz or Buzz or FizzBuzz");
        //print it's not fizz or buzz or fizzbuzz
    }
}

checkFizzBuzz();



