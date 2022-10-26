var mergeTwoLists = function(list1, list2) {
  // create a new tmpNode to start appending on it,
  // save ref to head of new node for return later
  // loop through while list1 != null & list2 != null
      // compare, if list1.val < list2.val, 
      // make tmpNode.next = list1
      // else, tmpNode.next = list2
      // tmpNode = tmpNode.next
      // move list1/list2 to next
  
  // outside of loop, check for any remaining elements in lists
  // if (list1 != null),
  // tmpNode.next = list1 to append
  // else tmpNode.next = list2
  
  // return not tmpNode, but head.next to skip the initial value we placed in there
  
  var tmpNode = new ListNode(-1);
  var head = tmpNode
  
  while (list1 !== null && list2  !== null) {
      if (list1.val < list2.val) {
          tmpNode.next = list1
          list1 = list1.next
      } else {
          tmpNode.next = list2;
          list2 = list2.next;
      }
      tmpNode = tmpNode.next
  }
  
  if (list1 !== null) {
      tmpNode.next = list1
  } else {
      tmpNode.next = list2
  }
  
  return head.next
  
};