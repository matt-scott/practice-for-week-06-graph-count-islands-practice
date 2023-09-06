function getNeighbors(row, col, graph) {
  let neighbors = [];
  let top;
  let topRight;
  let topLeft;
  let bottom;
  let bottomRight;
  let bottomLeft;
  let left;
  let right;

  // Check top
  // row - 1, col
  if (row - 1 !== -1) {
    if (graph[row - 1][col] === 1) {
      top = [[row - 1,col]];
      neighbors = neighbors.concat(top);
    }
  }

  // Check top right
  // row - 1, col + 1
  if ((row - 1 !== -1) && (col + 1 !== graph[0].length)) {
    if (graph[row - 1][col + 1] === 1) {
      topRight = [[row - 1,col + 1]];
      neighbors = neighbors.concat(topRight);
    }
  }

  // Check right
  // row, column + 1
  if (col + 1 !== graph[0].length) {
    if (graph[row][col + 1] === 1) {
      right = [[row,col + 1]];
      neighbors = neighbors.concat(right);
    }
  }

  // Check bottom right
  // row + 1, col + 1
  if ((row + 1 !== graph.length) && (col + 1 !== graph[0].length)) {
    if (graph[row + 1][col + 1] === 1) {
      bottomRight = [[row + 1,col + 1]];
      neighbors = neighbors.concat(bottomRight);
    }
  }

  // Check bottom
  // row + 1, col
  if (row + 1 !== graph.length) {
    if (graph[row + 1][col] === 1) {
      bottom = [[row + 1,col]];
      neighbors = neighbors.concat(bottom);
    }
  }

  // Check bottom left
  // row + 1, col - 1
  if ((row + 1 !== graph.length) && (col - 1 !== -1)) {
    if (graph[row + 1][col - 1] === 1) {
      bottomLeft = [[row + 1,col - 1]];
      neighbors = neighbors.concat(bottomLeft);
    }
  }

  // Check left
  // row, col - 1
  if (col - 1 !== -1) {
    if (graph[row][col - 1] === 1) {
      left = [[row,col - 1]];
      neighbors = neighbors.concat(left);
    }
  }

  // Check top left
  // row - 1, col - 1
  if ((row - 1 !== -1) && (col - 1 !== -1)) {
    if (graph[row - 1][col - 1] === 1) {
      topLeft = [[row - 1,col - 1]];
      neighbors = neighbors.concat(topLeft);
    }
  }

  // Return neighbors
  return neighbors;

}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  let visited = new Set();

  // Initialize count to 0
  let islandCount = 0;

  // Iterate through all indices in matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      let currentIndex = [i,j];
      let indexString = currentIndex.toString();

      // If an index contains a 1 and has not been visited, 
      if ((!visited.has(indexString)) && (matrix[currentIndex[0]][currentIndex[1]] === 1)) {
  
      // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        islandCount++;
        // Initialize a stack with current index
        let stack = [];
        stack.push(currentIndex);
        
        // Add stringified version of current index to the visited set
        visited.add(indexString);

        // While stack contains elements
        while (stack.length > 0) {
          // Pop element from stack
          let currentIndexWhileLoop = stack.pop();

          // Get valid neighbors of current element
          let neighbors = getNeighbors(currentIndexWhileLoop[0], currentIndexWhileLoop[1], matrix);
          // Iterate over neigbors
          neighbors.forEach (element => {
            stringNode = element.toString();
            // If neighbor has not been visited
              if (!visited.has(stringNode)) {
              // Add neighbor to stack
              stack.push(element);
              // Mark neighbor as visited
              visited.add(stringNode);
              }
          });

        }
      }

    }
  }



  // Return island count
  return islandCount;
  
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];