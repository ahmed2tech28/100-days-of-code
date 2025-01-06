class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseKGroup(head, k) {
  if (!head || k <= 1) return head;

  // Function to reverse a portion of the linked list
  const reverse = (start, end) => {
    let prev = null;
    let current = start;
    let next = null;
    while (current !== end) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev; // New head after reversal
  };

  // Dummy node to simplify edge cases
  const dummy = new ListNode(0);
  dummy.next = head;
  let groupPrev = dummy;

  while (true) {
    // Locate the end of the current group
    let groupEnd = groupPrev;
    for (let i = 0; i < k && groupEnd; i++) {
      groupEnd = groupEnd.next;
    }
    if (!groupEnd) break; // Not enough nodes to form a group

    // Reverse the group
    const groupStart = groupPrev.next;
    const nextGroup = groupEnd.next;
    reverse(groupStart, groupEnd.next);

    // Update the connections
    groupPrev.next = groupEnd;
    groupStart.next = nextGroup;

    // Move groupPrev to the end of the current group
    groupPrev = groupStart;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  return result;
}

// Example usage
let head = createLinkedList([1, 2, 3, 4, 5]);
let k = 2;
let result = reverseKGroup(head, k);
console.log(linkedListToArray(result)); // Output: [2, 1, 4, 3, 5]
