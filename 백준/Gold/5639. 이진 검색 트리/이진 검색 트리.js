const input = require('fs')
  .readFileSync(process.platform == 'linux' ? 'dev/stdin' : 'test/test.txt')
  .toString()
  .trim()
  .split('\n');

const preorderResult = input.map(Number);

const preorderToTree = (preorder) => {
  if (preorder.length === 0) return null;

  const parent = preorder[0];
  const tree = { parent: parent, children: [null, null] };

  const left = preorder.filter((v) => v < parent);
  const right = preorder.filter((v) => v > parent);

  tree.children[0] = preorderToTree(left);
  tree.children[1] = preorderToTree(right);

  return tree;
};

const postorder = (tree) => {
  if (tree === null) return;

  postorder(tree.children[0]);
  postorder(tree.children[1]);
  console.log(tree.parent);
};

const tree = preorderToTree(preorderResult);
postorder(tree);
