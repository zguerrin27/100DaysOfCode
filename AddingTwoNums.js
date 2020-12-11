var addTwoNumbers = function(l1, l2) {
  let head = new ListNode();
  let node = head;
  let carry = 0;
  
  while(l1 || l2){
      let l1Val = l1 ? l1.val : 0;
      let l2Val = l2 ? l2.val : 0;
      
      let sum = l1Val + l2Val + carry;
      carry = 0;
      let newVal = sum
      
      if(sum > 9){
          newVal = sum % 10    //strips first char off if its two digits
          carry = 1
      }
      
      // insert into LL
      node.next = new ListNode(newVal)
      node = node.next;
      
      if(l1) l1 = l1.next;
      if(l2) l2 = l2.next;
  };
  
  if(carry) node.next = new ListNode(carry)
  
  return head.next;
  
};