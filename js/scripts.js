// Business Logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

// User Interface Logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($(".First-Number").val());
    const number2 = parseInt($(".Second-Number").val());
    const result = add(number1, number2);
    $(".result").text(result); 
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($(".First-Number-sub").val());
    const number2 = parseInt($(".Second-Number-sub").val());
    const result = subtract(number1, number2);
    $(".result").text(result); 
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($(".First-Number-mult").val());
    const number2 = parseInt($(".Second-Number-mult").val());
    const result = multiply(number1, number2);
    $(".result").text(result); 
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($(".First-Number-div").val());
    const number2 = parseInt($(".Second-Number-div").val());
    const result = divide(number1, number2);
    $(".result").text(result); 
  });
});

