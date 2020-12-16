
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		let currentNode = this;
		while(true){
			if(value < currentNode.value){
				if(currentNode.left === null){
					currentNode.left = new BST(value);
					break;
				} else {
					currentNode = currentNode.left;
				}
			} else {
				if(currentNode.right === null){
					currentNode.right = new BST(value);
					break;
				} else {
					currentNode = currentNode.right;
				}
			}
		}
  }

  contains(value) {
    let currentNode = this;
		while (currentNode !== null){
			if (value < currentNode.value){
				currentNode = currentNode.left;
			} else if (value > currentNode.value){
				currentNode = currentNode.right;
			} else {
				return true;
			}
		}
		return false;
  }

  remove(value, parentNode = null) {
    let currentNode = this;
		while (currentNode !== null){
			if(value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value){
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else {
				if(currentNode.left !== null && currentNode.right !== null){
					currentNode.value = currentNode.right.getMinValue();
					currentNode.right.remove(currentNode.value, currentNode);
				} else if (parentNode === null){
					if(currentNode.left !== null){
						currentNode.value = currentNode.left.value;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					} else if ( currentNode.right !== null){
						currentNode.value = currentNode.right.value;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					} else {
						
					}
				} else if (parentNode.left === currentNode) {
					parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
				} else if (parentNode.right === currentNode){
					parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
				}
				break;
			}
		}
  }
	
	getMinValue() {
		let currentNode = this;
		while(currentNode.left !== null){
			currentNode = currentNode.left;
		}
		return currentNode.value;
	}
	
}

/*

With the Remove method. First we find the node, then we remove it.

- While iterrating through tree we must track the parent node. That is so we can connect the left and right sub nodes / trees to the parent node of the node we are removing 



The first case is going to be handling the removal of a node when there are two children nodes present
- first step is to check if currentNode left and right are !== null
- if so...set currentNode value to the smallest, left most value of the right subtree
- so that is currentNode.value = currentNode.right.getMinValue() we create a helper method to find the smallest value in right tree.
- then remove the value at the bottom left of right tree(smallest value of that tree) by calling the remove method on it like so: currentNode.right.remove(currentNode.value, currentNode) currentNode acts a parent node

Next case is going to be handling the root node
- if 

Next case is parentNode.left === currentNode

Next case is parentNode.right === currentNode


*/