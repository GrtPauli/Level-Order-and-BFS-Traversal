export const getBinaryTree = (value) => {
  let arr = value.split(",");
  for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);
  return arr;
};

export const getMaxHeap = (value) => {
  let arr = value.split(",");
  let n = arr.length;
  for (let i = 0; i < n; i++) arr[i] = parseInt(arr[i]);
  for (let i = Math.floor((n - 2) / 2); i >= 0; i--) heapify(arr, i, n);
  return arr;
};

const leftChild = (i) => 2 * i + 1;
const rightChild = (i) => 2 * i + 2;

export const getBST = (value) => {
  let arr = value.split(",").map(Number);
  if (arr.length === 0) return [];

  let bst = [];
  bst[0] = arr[0]; // Set the first element as the root

  for (let i = 1; i < arr.length; i++) {
    let currentIndex = 0;
    while (true) {
      if (arr[i] < bst[currentIndex]) {
        // Go to the left child
        let leftIndex = leftChild(currentIndex);
        if (bst[leftIndex] === undefined) {
          bst[leftIndex] = arr[i];
          break;
        } else {
          currentIndex = leftIndex;
        }
      } else {
        // Go to the right child
        let rightIndex = rightChild(currentIndex);
        if (bst[rightIndex] === undefined) {
          bst[rightIndex] = arr[i];
          break;
        } else {
          currentIndex = rightIndex;
        }
      }
    }
  }

  // Removing `undefined` values by filtering the array
  bst = bst.filter(value => value !== undefined);

  // console.log(bst); // Log the bst array
  return bst;
};

function heapify(arr, i, n) {
  let lc = leftChild(i) >= n ? -Infinity : arr[leftChild(i)];
  let rc = rightChild(i) >= n ? -Infinity : arr[rightChild(i)];
  if (arr[i] >= lc && arr[i] >= rc) return;
  let gI;
  if (lc > rc) gI = leftChild(i);
  else gI = rightChild(i);
  let temp = arr[i];
  arr[i] = arr[gI];
  arr[gI] = temp;
  heapify(arr, gI, n);
}

function fillBst(arr, bst, low, high, ind) {
  // let mid = Math.floor((low + high + 1) / 2);
  // console.log(mid);

  // bst[ind] = arr[mid];
  // if (low >= high) return;
  // if (leftChild(ind) < arr.length)
  //   fillBst(arr, bst, low, mid - 1, leftChild(ind));
  // if (rightChild(ind) < arr.length)
  //   fillBst(arr, bst, mid + 1, high, rightChild(ind));
}


export function arrayToBSTSequence(sequence) {
  class Node {
      constructor(value, index) {
          this.value = value;
          this.index = index;
          this.visited = false;
          this.left = null;
          this.right = null;
      }
  }

  function insert(root, value, index) {
      if (root === null) return new Node(value, index);
      if (value < root.value) root.left = insert(root.left, value, index);
      else root.right = insert(root.right, value, index);
      return root;
  }

  function buildBST(sequence) {
      let root = null;
      sequence.forEach((value, index) => {
          root = insert(root, value, index);
      });
      return root;
  }

  function levelOrderTraversal(root) {
      if (!root) return [];

      const queue = [];
      const result = [];

      queue.push(root);

      while (queue.length > 0) {
          const levelSize = queue.length;

          for (let i = 0; i < levelSize; i++) {
              const node = queue.shift();

              const children = [];
              if (node.left) {
                  children.push({
                      value: node.left.value,
                      index: node.left.index,
                      visited: node.left.visited
                  });
                  queue.push(node.left);
              }
              if (node.right) {
                  children.push({
                      value: node.right.value,
                      index: node.right.index,
                      visited: node.right.visited
                  });
                  queue.push(node.right);
              }

              // Include nodes with no children, but add an empty children array
              result.push({
                  parent: {
                      value: node.value,
                      index: node.index,
                      visited: node.visited
                  },
                  children
              });
          }
      }

      return result;
  }

  const root = buildBST(sequence);
  return levelOrderTraversal(root);
}
// export function arrayToBSTSequence(sequence) {
//   class Node {
//       constructor(value, index) {
//           this.value = value;
//           this.index = index;
//           this.visited = false;
//           this.left = null;
//           this.right = null;
//       }
//   }

//   function insert(root, value, index) {
//       if (root === null) return new Node(value, index);
//       if (value < root.value) root.left = insert(root.left, value, index);
//       else root.right = insert(root.right, value, index);
//       return root;
//   }

//   function buildBST(sequence) {
//       let root = null;
//       sequence.forEach((value, index) => {
//           root = insert(root, value, index);
//       });
//       return root;
//   }

//   function levelOrderTraversal(root) {
//       if (!root) return [];

//       const queue = [];
//       const result = [];

//       queue.push(root);

//       while (queue.length > 0) {
//           const levelSize = queue.length;
//           const currentLevel = [];

//           for (let i = 0; i < levelSize; i++) {
//               const node = queue.shift();

//               const children = [];
//               if (node.left) {
//                   children.push({
//                       value: node.left.value,
//                       index: node.left.index,
//                       visited: node.left.visited
//                   });
//                   queue.push(node.left);
//               }
//               if (node.right) {
//                   children.push({
//                       value: node.right.value,
//                       index: node.right.index,
//                       visited: node.right.visited
//                   });
//                   queue.push(node.right);
//               }

//               if (children.length > 0) {
//                   result.push({
//                       parent: {
//                           value: node.value,
//                           index: node.index,
//                           visited: node.visited
//                       },
//                       children
//                   });
//               }
//           }
//       }

//       return result;
//   }

//   const root = buildBST(sequence);
//   return levelOrderTraversal(root);
// }

export function sequenceToAllNodes(sequence) {
  class Node {
      constructor(value, index) {
          this.value = value;
          this.index = index;
          this.left = null;
          this.right = null;
      }
  }

  function insert(root, value, index) {
      if (root === null) return new Node(value, index);
      if (value < root.value) root.left = insert(root.left, value, index);
      else root.right = insert(root.right, value, index);
      return root;
  }

  function buildBST(sequence) {
      let root = null;
      sequence.forEach((value, index) => {
          root = insert(root, value, index);
      });
      return root;
  }

  function levelOrderTraversalAllNodes(root) {
      if (!root) return [];

      const queue = [];
      const result = [];

      queue.push(root);

      while (queue.length > 0) {
          const node = queue.shift();

          result.push({
              value: node.value,
              index: node.index
          });

          if (node.left) {
              queue.push(node.left);
          }
          if (node.right) {
              queue.push(node.right);
          }
      }

      return result;
  }

  const root = buildBST(sequence);
  return levelOrderTraversalAllNodes(root);
}


// export function arrayToBSTSequence(sequence) {
//   class Node {
//       constructor(value, index) {
//           this.value = value;
//           this.index = index;
//           this.visited = false;
//           this.left = null;
//           this.right = null;
//       }
//   }

//   function insert(root, value, index) {
//       if (root === null) return new Node(value, index);
//       if (value < root.value) root.left = insert(root.left, value, index);
//       else root.right = insert(root.right, value, index);
//       return root;
//   }

//   function buildBST(sequence) {
//       let root = null;
//       sequence.forEach((value, index) => {
//           root = insert(root, value, index);
//       });
//       return root;
//   }

//   function traverse(node) {
//       if (node === null) return [];
//       const children = [];
//       if (node.left !== null) children.push({ value: node.left.value, index: node.left.index, visited: node.left.visited });
//       if (node.right !== null) children.push({ value: node.right.value, index: node.right.index, visited: node.right.visited });
//       const result = [];
//       if (children.length > 0) {
//           result.push({ parent: { value: node.value, index: node.index, visited: node.visited }, children });
//       }
//       result.push(...traverse(node.left));
//       result.push(...traverse(node.right));
//       return result;
//   }

//   const root = buildBST(sequence);
//   return traverse(root);
// }