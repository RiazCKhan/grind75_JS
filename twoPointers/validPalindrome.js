const isPalindrome = (s) => {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false;

    p1++
    p2--
  }

  return true;
}

let testcase = 'h e l l o'
console.log(isPalindrome(testcase))