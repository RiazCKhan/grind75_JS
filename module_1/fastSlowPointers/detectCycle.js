// Initialize both fast and slow pointers to the head of the linked list
// Move the slow pointer one node ahead and the fast pointer two nodes ahead
// Check if both pointers point to the same node -- return True
// Else if the fast pointer reaches the end of the linked list return False


const detectCycle = (head) => {

  let slow = head;
  let fast = head;

  while (fast && fast.next) {

    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true
    }
  }
  return false
}