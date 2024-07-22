// Initial 3 Pointers, Prev, Cur, Next
// Loop while cur !== null
// Use Next to save 'Save' the location of the next node 
// Change Cur pointer to previous (reverse)
// Move Prev pointer to Cur
// Move Cur pointer to Next, aka the saved next node

const reverse = (head) => {
  let prev = null;
  let cur = head;
  let next = null;

  while (cur !== null) {
    // save the node ahead of cur
    next = cur.next;
    // reverse cur pointer to prev
    cur.next = prev;
    // move prev pointer to current
    prev = cur;
    // move cur to next (cannot use cur.next because 'link' was reassigned)
    cur = next;
  }
  // return the new head; prev
  return prev;
}