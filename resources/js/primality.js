/**
 * Primality Checker script
 * Adam Heins
 * 2014-07-01
 */
 

$(document).ready(function(){
			
	// Ensure only numbers are entered.
	$("#number").keypress(function(event){
		validateNumericKeyInput(event);
	});

	// Respond to 'Check' button being pressed.
	$("#check").click(function(){
	  var value = $("#number").val();
		if (value === "")
		  return;
		var number = parseInt(value);
		var factor = isPrime(number);
		if (factor == -1) {
			$("#message").val("Number is prime.");
		} else {
			$("#message").val("Number is not prime, it is divisible by " + factor + ".");
		}	  
	});	  
});


/**
 * Algorithm to determine if a number is prime.
 * Returns -1 if the number is prime, otherwise
 * returns the lowest divisor of the number.
 */
function isPrime(n) {

	// Immediately return false if number is divisible by 2 or 3.
	if (n % 2 == 0)
		return 2;
  if (n % 3 == 0)
	  return 3;
		
	var nsqrt = Math.floor(Math.sqrt(n));

	// Check for factors up to the square root of the number.
	// Only primes need be checked, and all primes > 3 are +/-1
	// of multiples of 6.
	for (var i = 5; i < nsqrt; i+=6) {
		if (n % i  == 0)
				return i;
	  if (n % (i + 2) == 0)
			return (i + 2);
	}
	return -1;
} 


/**
 * Validate that the key input is a numeral.
 */
function validateNumericKeyInput(event) {
	var e = event || window.event; 
	var charCode = e.charCode || e.keyCode; 
	var ch = String.fromCharCode(charCode);

	// Allow backspace, delete, tab, ctrl keys.
	if (event.keyCode === 8 || event.keyCode === 0 || event.keyCode === 127 || event.keyCode === 9 || event.ctrlKey)
		return;

	// Limit to just numeric digits.
	if ("0123456789".indexOf(ch) === -1)
		e.preventDefault(e);
}