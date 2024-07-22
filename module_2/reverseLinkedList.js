// Initial 3 Pointers, Prev, Cur, Next



const reverse = (head) => {

  let prev = null;
  let cur = head;
  let next = cur;

  while (cur !== null) {

    // save the node ahead of cur
    next = cur.next;

    // assign head pointer to tail null or next node
    cur.next = prev;

    // move prev to current
    prev = cur;

    // move cur to next (cannot use cur because 'link' was reassigned)
    cur = next;

    // increment current for next iteration
    cur = cur.next;


  }
  head = prev;

  return head;
}