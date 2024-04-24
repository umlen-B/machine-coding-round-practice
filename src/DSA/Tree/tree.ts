import {
    preOrderTraversal,
    postOrderTraversal,
    inOrderTraversal,
    levelOrderTraversal,
  } from "./01-treeTraversal";
  export class Trees {
    value;
    leftNode: Trees | undefined;
    rightNode: Trees | undefined;
    constructor(val: number) {
      this.value = val;
    }
  }
  
  export const execute = () => {
    const root = new Trees(1);
    const leftNode = new Trees(2);
    const rightNode = new Trees(3);
  
    root.leftNode = leftNode;
    root.rightNode = rightNode;
  
    leftNode.leftNode = new Trees(4);
    leftNode.rightNode = new Trees(5);
    rightNode.leftNode = new Trees(6);
    rightNode.rightNode = new Trees(7);
  
    console.log("preOrderTraversal");
    preOrderTraversal(root);
    console.log("postOrderTraversal");
    postOrderTraversal(root);
    console.log("inOrderTraversal");
    inOrderTraversal(root);
    console.log("levelOrderTraversal");
    levelOrderTraversal(root);
  };
  