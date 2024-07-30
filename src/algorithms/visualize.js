export function visualize(arr) {
  reset();
  d3.select("#container").append("svg");
  createTree(arr);
}

function reset() {
  d3.selectAll("svg").remove();
}

function insertIntoBST(root, value, index) {
  if (!root) {
    return new TreeNode(value, index);
  }
  if (value < root.value) {
    root.left = insertIntoBST(root.left, value, index);
  } else {
    root.right = insertIntoBST(root.right, value, index);
  }
  return root;
}

function createBST(arr) {
  let root = null;
  arr.forEach((value, index) => {
    root = insertIntoBST(root, value, index);
  }); 
  
  return root;
}

function TreeNode(value, index) {
  this.cx = 0;
  this.cy = 0;
  this.value = value;
  this.index = index
  this.left = null;
  this.right = null;
}

function positionNodes(root, x, y, xSpacing, ySpacing, positions) {
  if (root) {
    root.cx = x;
    root.cy = y;
    positions.push(root);
    if (root.left) {
      positionNodes(root.left, x - xSpacing, y + ySpacing, xSpacing / 2, ySpacing, positions);
    }
    if (root.right) {
      positionNodes(root.right, x + xSpacing, y + ySpacing, xSpacing / 2, ySpacing, positions);
    }
  }
}

//Visualizes tree from given array
function createTree(arr = []) {
  const root = createBST(arr);
  if (!root) return;
  
  const positions = [];
  const maxWidth = 1200; // Maximum width for the SVG
  const xSpacing = arr.length >= 8 ? 300 : 200;
  const ySpacing = arr.length >= 8 ? 100 : 80;
  const radius = arr.length > 12 ? 20 : 25;
  const svgWidth = Math.min(arr.length * xSpacing, maxWidth);
  const svgHeight = (Math.floor(Math.log2(arr.length)) + 1) * ySpacing;

  // Calculate node positions
  positionNodes(root, svgWidth / 2, radius + 10, xSpacing / 2, ySpacing, positions);

  // Create SVG element
  let svg = d3
    .select("svg")
    .attr("height", svgHeight + radius * 2 + 20)
    .attr("width", svgWidth)
    .attr("class", "tree-container");

  // Draw nodes and edges
  for (let node of positions) {
    if (node.left) {
      svg.append("line")
        .attr("x1", node.cx)
        .attr("y1", node.cy)
        .attr("x2", node.left.cx)
        .attr("y2", node.left.cy)
        .attr("stroke", "black")
        .attr("class", "tree-line");
    }
    if (node.right) {
      svg.append("line")
        .attr("x1", node.cx)
        .attr("y1", node.cy)
        .attr("x2", node.right.cx)
        .attr("y2", node.right.cy)
        .attr("stroke", "black")
        .attr("class", "tree-line");
    }

    svg.append("circle")
      .attr("cx", node.cx)
      .attr("cy", node.cy)
      .attr("r", radius)
      .attr("fill", "green")
      .attr("stroke", "black")
      .attr("class", `c${node.index} flex items-center justify-center`)
      .on("click", () => addHighlight(node.index));

    svg.append("text")
      .attr("x", node.cx - node.value.toString().length * 4 - 2)
      .attr("y", node.cy + 4)
      .attr("fill", "white")
      .text(node.value)
      .attr("class", `t${node.index} node-text font-bold ${arr.length > 12 ? 'text-xs translate-x-[3px]' : 'text-sm translate-x-[2px]'}`);
  }
}

export function addHighlight(index) {
  let currCircle = document.querySelector(`.c${index}`);
  let currCText = document.querySelector(`.t${index}`);
  let currRect = document.querySelector(`.a${index}`);
  let currRText = document.querySelector(`.at${index}`);

  let removeHighlight = currCircle.getAttribute("fill") === "aqua";

  let allCircles = document.querySelectorAll("circle");
  let allRect = document.querySelectorAll("rect");
  let allTexts = document.querySelectorAll("text");
  for (let node of allCircles) node.setAttribute("fill", "green");
  for (let node of allRect) node.setAttribute("fill", "green");
  for (let text of allTexts) text.setAttribute("fill", "white");
  if (!removeHighlight) {
    currCircle.setAttribute("fill", "aqua");
    currCText.setAttribute("fill", "black");
    if (currRect) {
      currRect.setAttribute("fill", "aqua");
      currRText.setAttribute("fill", "black");
    }
  }
}

export function addHighlight2(index) {
  let currCircle = document.querySelector(`.c${index}`);
  let currCText = document.querySelector(`.t${index}`);
  let currRect = document.querySelector(`.a${index}`);
  let currRText = document.querySelector(`.at${index}`);
  let currRect2 = document.querySelector(`.aq${index}`);
  let currRText2 = document.querySelector(`.aqt${index}`);

  let removeHighlight = currCircle.getAttribute("fill") === "aqua";

  let allCircles = document.querySelectorAll("circle");
  let allRect = document.querySelectorAll("rect");
  let allTexts = document.querySelectorAll("text");
  for (let node of allCircles) node.setAttribute("fill", "green");
  for (let node of allRect) node.setAttribute("fill", "green");
  for (let text of allTexts) text.setAttribute("fill", "white");
  if (!removeHighlight) {
    currCircle.setAttribute("fill", "aqua");
    currCText.setAttribute("fill", "black");
    if (currRect) {
      currRect.setAttribute("fill", "aqua");
      currRText.setAttribute("fill", "black");
    }
    if (currRect2) {
      currRect2.setAttribute("fill", "aqua");
      currRText2.setAttribute("fill", "black");
    }
  }
}