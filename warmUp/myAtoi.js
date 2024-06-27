function myAtoi(s) {

  // To store the final integer result
  let result = 0;

  // To store the sign which would determine whether the result should be positive (1) or negative (-1)
  let sign = 1;

  // Index for iterating through the string
  let i = 0;

  // Ignore any leading whitespaces
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // Check for sign
  if (i < s.length && (s[i] === '-' || s[i] === '+')) {

    // Set sign to negative if a minus sign is found
    if (s[i] === '-') {
      sign = -1;
    }

    // Then, move to the next character
    i++;
  }

  // Read the digits
  while (i < s.length && ('0' <= s[i] && s[i] <= '9')) {

    // Convert the current character to an integer
    const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

    // Check for overflow
    if (result > ((2 ** 31) - 1 - digit) / 10) {

      // If there's an overflow, return the maximum or minimum 32-bit integer value
      return sign === 1 ? (2 ** 31) - 1 : -(2 ** 31);
    }

    // Update the result by multiplying it by 10 and adding the current digit
    result = result * 10 + digit;

    // Move to the next character
    i++;
  }

  // Return the final result, adjusted for the sign
  return sign * result;
}