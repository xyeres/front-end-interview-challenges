function reverseLinkedList(head) {
  // loop through list
  // saving head.next to next
  // swapping head.next for prev
  // moving prev to head
  // head to next

  var next = null;
  var prev = null;

  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev

}