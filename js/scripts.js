//back end

var convertToRomanNumerals = function(userInput) {
  var tens = ['I', 'X', 'C', 'M'];
  var fives = ["V", "L", "D", "filler"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var isNumber = true;
  var splitInput = userInput.split("");
  // var digit = parseInt(splitReverseInput[splitInput.length -1]);

// all digit
var multiConvert = function(userInput) {
  var splitReverseInput = splitInput.reverse();
  var answer = [];
  for (i = 0; i < splitReverseInput.length; i++) {
    if (splitReverseInput[i] === "1" || splitReverseInput[i] === "2" || splitReverseInput[i] === "3") {
      answer.unshift(tens[i].repeat(splitReverseInput[i]));
    }  else if (splitReverseInput[i] === "4") {
      answer.unshift(tens[i] + fives[i]);
    } else if (splitReverseInput[i] === "5") {
      answer.unshift(fives[i]);
    } else if (splitReverseInput[i] === "6" || splitReverseInput[i] === "7" || splitReverseInput[i] === "8") {
      answer.unshift(fives[i] + (tens[i].repeat(parseInt(splitReverseInput[i])-5)));
    } else if (splitReverseInput[i] === "9") {
      answer.unshift(tens[i] + tens[i+1]);
    }
  }
  return answer.join('');
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
    return "Your number is " + multiConvert(userInput);
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










// // single
//   var singleConvert = function(splitInput) {
//     var singleDigit = parseInt(splitInput[splitInput.length -1]);
//     if (singleDigit === 1 || singleDigit === 2 || singleDigit === 3 ) {
//       return "X".repeat(singleDigit);
//     } else if (singleDigit === 4) {
//       return "XL";
//     } else if (singleDigit === 5) {
//       return "L";
//     } else if (singleDigit === 6 || singleDigit === 7 || singleDigit === 8) {
//       return "v" + "I".repeat(singleDigit-5);
//     } else if (singleDigit === 9) {
//       return "XC";
//     } else {
//       return "";
//     }
//   }
// // double
//   var doubleConvert = function(splitInput) {
//     var doubleDigit = parseInt(splitInput[splitInput.length -2]);
//     if (doubleDigit === 1 || doubleDigit === 2 || doubleDigit === 3 ) {
//       return "X".repeat(doubleDigit);
//     } else if (doubleDigit === 4) {
//       return "XL";
//     } else if (doubleDigit === 5) {
//       return "L";
//     } else if (doubleDigit === 6 || doubleDigit === 7 || doubleDigit === 8) {
//       return "L" + "X".repeat(doubleDigit-5);
//     } else if (doubleDigit === 9) {
//       return "XC";
//     } else {
//       return "";
//     }
// }
