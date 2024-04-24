import { Trees } from "./tree";

export const preOrderTraversal = (node: Trees | undefined) => {
  // console.log("node", node);
  if (!node) return;
  console.log(node.value);
  if (node.leftNode) {
    preOrderTraversal(node.leftNode);
  }
  if (node.rightNode) {
    preOrderTraversal(node.rightNode);
  }
};

export const postOrderTraversal = (node: Trees | undefined) => {
  // console.log("node", node);
  if (!node) return;
  if (node.leftNode) {
    postOrderTraversal(node.leftNode);
  }
  if (node.rightNode) {
    postOrderTraversal(node.rightNode);
  }
  console.log(node.value);
};

export const inOrderTraversal = (node: Trees | undefined) => {
  // console.log("node", node);
  if (!node) return;
  if (node.leftNode) {
    inOrderTraversal(node.leftNode);
  }
  console.log(node.value);
  if (node.rightNode) {
    inOrderTraversal(node.rightNode);
  }
};

export const levelOrderTraversal = (node: Trees | undefined) => {
  if (!node) return;
  const levelList = [[1]]
  const tempList = [node]
  let traverseList = []
  while(tempList.length){
    const item = tempList[0]
    if(item.leftNode){
      traverseList.push(item.leftNode)
    }
    if(item.rightNode){
      traverseList.push(item.rightNode)
    }
    tempList.shift();
    if(tempList.length === 0 && traverseList.length){
      tempList.push(...traverseList)
      levelList.push(traverseList.map(item => item.value))
      traverseList = []
    }
  }
  console.log('depth of tree - ',levelList.length)
  console.log(levelList.flat())
}

