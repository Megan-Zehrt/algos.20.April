// 938. Range Sum Of BST

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

var rangeSumBST = function(root, low, high) {
    let sum = 0;

    function dfs(node) {
        if (node == null){
            return
        }; // Base case: if node is null, return

        // If current node's value is within the range, add it to sum
        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }

        // If current node's value is greater than low, explore the left subtree
        if (node.val > low) {
            dfs(node.left);
        }
        // If current node's value is less than high, explore the right subtree
        if (node.val < high) {
            dfs(node.right);
        }
    }

    dfs(root); // Start DFS from the root
    return sum; // Return the accumulated sum
};