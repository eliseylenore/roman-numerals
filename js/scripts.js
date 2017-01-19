//back end

var convertToRomanNumerals = function(userInput) {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var splitInput = userInput.split('');
  var isNumber = true;

  splitInput.forEach(function(number) {
    var numQuery = numbers.indexOf(number);
    if (numQuery === -1) {
      isNumber = false;
    }
  });
  if (!isNumber) {
    return "Please only enter numbers."
  } else {
    return "Your number is " + userInput;
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
