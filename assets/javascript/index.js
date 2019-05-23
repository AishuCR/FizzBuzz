function checkFizzBuzz() {
    

    var inputValue = document.getElementById("myNumber").value;

    if (((inputValue % 3) == 0) && ((inputValue % 5) == 0)) {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "FizzBuzz";
        return(output);
    }
    else if ((inputValue % 5) == 0) {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "Buzz";
        return(output);
    }
    else if ((inputValue % 3) == 0) {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "Fizz";
        return(output);
           
    }
    else {
        output = document.getElementById("displayValue").innerHTML;
        document.getElementById("displayValue").innerHTML = "The number entered is not divisible by 3 or 5";
        return(output);
        
    }
}

checkFizzBuzz();



