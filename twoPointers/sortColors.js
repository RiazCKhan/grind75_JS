// Use the Two Pointers Pattern + 1 Pointer

// Start, Current, End

// WHILE Current <= End
// IF Current is 0; swap with Start
// -- Increment Cur and Start

// ELSE Current is 1, increment Current

// ELSE Current is 2; swap with End
// -- decrement End


const variableSwap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const sortColors = (colors) => {
  let start = 0;
  let current = 0;
  let end = colors.length - 1;

  while (current <= end) {
    if (colors[current] === 0) {
      variableSwap(colors, current, start);
      current = current + 1;
      start = start + 1;
    } else if (colors[current] === 1) {
      current = current + 1;
    } else if (colors[current] === 2) {
      variableSwap(colors, current, end);
      end = end - 1;
    }
  }
  return colors;
}


let testcase = [1, 2, 0, 2, 1];
console.log(sortColors(testcase));