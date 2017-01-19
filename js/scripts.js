//back end

var convertToRomanNumerals = function(userInput) {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var splitInput = userInput.split('');
  var isNumber = true;

// single digits
  var singleConvert = function(userInput) {
    var singleDigit = parseInt(splitInput[splitInput.length -1]);
    if (singleDigit === 1 || singleDigit === 2 || singleDigit === 3 ) {
      return "I".repeat(singleDigit);
    } else if (singleDigit === 4) {
      return "IV";
    } else if (singleDigit === 5) {
      return "V";
    } else if (singleDigit === 6 || singleDigit === 7 || singleDigit === 8) {
      return "V" + "I".repeat(singleDigit-5);
    } else if (singleDigit === 9) {
      return "IX";
    } else {
      return "X";
    }
  }

// determines if input is convertable
  splitInput.forEach(function(number) {
    var numQuery = numbers.indexOf(number);
    if (numQuery === -1 || (parseInt(userInput) >= 4000)){
      isNumber = false;
    }
  });

  if (!isNumber) {
    return "Your input cannot be converted. Check input";
  } else {
    return "Your number is " + singleConvert(userInput);
  }

}







//front-end
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = convertToRomanNumerals(userInput);
    $("#result").text(result);
  });
});
