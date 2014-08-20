/**
 * Primality Checker script
 *
 * @author Adam Heins
 */


/**
 * Removes non-numeric digits from a string.
 *
 * @param {String} str The string from which to remove non-digits.
 *
 * @return {String} The string with all non-numeric digits removed.
 */
function stripNonDigits(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        if ('0123456789'.indexOf(str.charAt(i)) > -1)
            result = result.concat(str.charAt(i));
    }
    return result;
}


/**
 * Validates that key input is a numeric digit. Does not allow the event to trigger if the key
 * pressed was not a numeric digit.
 *
 * @param {Event} event The key event that was triggered.
 */
function validateNumericKeyInput(event) {
    var e = event || window.event;
    var charCode = e.charCode || e.keyCode;
    var ch = String.fromCharCode(charCode);

    // Allow backspace, delete, tab, ctrl keys.
    if (event.keyCode === 8 || event.keyCode === 0 || event.keyCode === 127 || event.keyCode === 9
            || event.ctrlKey)
        return;

    // Limit to just numeric digits.
    if ('0123456789'.indexOf(ch) === -1)
        e.preventDefault(e);
}


/**
 * Checks if a character is a numeric digit.
 *
 * @param  {String} ch A single-character string.
 *
 * @return {Boolean} True if the character is a digit, false otherwise.
 */
function isDigit(ch) {
    return ('0123456789'.indexOf(ch) > -1);
}


$(document).ready(function() {

    // Ensure only numbers are entered.
    $('#number').keypress(function(event){
        validateNumericKeyInput(event);

        // If enter was pressed, fire a click event on the 'Check' button.
        if (event.which === 13) {
            $(id).change();
            $('#check').click();
        }
    });

    // Respond to 'Check' button being pressed.
    $('#check').click(function() {
        var value = $('#number').val();

        // If the value is empty, do nothing and return.
        if (value === '')
            return;

        // Remove non-numeric digits from the string. This allows users to include common delimiters
        // such as spaces or commas without affecting the result.
        value = stripNonDigits(value);

        // Convert to a BigInteger.
        var number = new BigInteger(value);

        // Check primality and print corresponding message.
        if (number.isPrime())
            $('#message').val('Number is prime.');
        else
            $('#message').val('Number is not prime.');
    });
});
