import { arrayToBSTSequence } from "./convert";
import { addHighlight, addHighlight2 } from "./visualize";

export const bfsTraversal = (arr) => {
  let levelArr = [];
  for (let i = 0; i < arr.length; i++) levelArr.push(i);
  animateBfsArray(levelArr, arr);
};

export const levelOrderTraversal = (arr) => {
  let levelArr = [];
  for (let i = 0; i < arr.length; i++) levelArr.push(i);
  animateArray(levelArr, arr);
};

function animateBfsArray(arr, mainArr) {
  document.querySelector("#array-container").innerHTML = "";
  let svg = createArrayContainer(arr.length);

  document.querySelector("#queue-container").innerHTML = "";
  let queueSvg = createQueueContainer(arr.length);

  let queueText = document.querySelector("#queue-info-text")
  let bst = arrayToBSTSequence(mainArr)

  let current = bst[0]
  let currentIndex = 0
  let filterBst = []
  window.scroll({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

  let currRect, currCircle, currRText, currCText;
  console.log(bst)

  for (let i = 0; i <= arr.length; i++) {
    let index = arr[i];
    let val = mainArr[index]
    setTimeout(() => {
      if (i > 0) {
        currCircle.setAttribute("fill", "green");
        currRect.setAttribute("fill", "green");
        currCText.setAttribute("fill", "white");
        currRText.setAttribute("fill", "white");
      }

      if (i < arr.length) {
        svg
          .append("rect")
          .attr("x", i * 50)
          .attr("y", 0)
          .attr("width", 50)
          .attr("height", 50)
          .attr("fill", "green")
          .attr("stroke", "black")
          .attr("class", `a${index}`)
          .on("click", () => addHighlight2(index));
        svg
          .append("text")
          .text(mainArr[index])
          .attr("x", i * 50 + 25 - arr[i].toString().length * 5)
          .attr("y", 25 + 5)
          .attr("fill", "white")
          .attr("class", `at${index} node-text`);

        queueSvg
          .append("rect")
          .attr("x", i * 50)
          .attr("y", 0)
          .attr("width", 50)
          .attr("height", 50)
          .attr("fill", "green")
          .attr("stroke", "black")
          .attr("class", `aq${index}`)
          .on("click", () => addHighlight2(index));
        queueSvg
          .append("text")
          .text(mainArr[index])
          .attr("x", i * 50 + 25 - arr[i].toString().length * 5)
          .attr("y", 25 + 5)
          .attr("fill", "white")
          .attr("class", `aqt${index} node-text`);

        currCircle = document.querySelector(`.c${index}`);
        currCText = document.querySelector(`.t${index}`);
        currRect = document.querySelector(`.a${index}`);
        currRText = document.querySelector(`.at${index}`);
        currCircle.setAttribute("fill", "aqua");
        currRect.setAttribute("fill", "aqua");
        currCText.setAttribute("fill", "black");
        currRText.setAttribute("fill", "black");
      }

      if(i == arr.length){
        queueText.innerHTML = `Removed all leaf nodes from queue since traversal is complete`
        arr.filter((item) => !filterBst.includes(item)).map((index) => {
          document.querySelector(`.aq${index}`).classList.add('!hidden')
          document.querySelector(`.aqt${index}`).classList.add('!hidden')
        })
      } else {
        if(current.parent.index != 0){
          current = {
            ...current,
            parent: {
              ...current.parent,
              visited: true
            }
          }
        }
  
        if(!current.parent.visited){
          queueText.innerHTML = `Adding parent node of ${current.parent.value} and visiting it's children`
          current = {
            ...current,
            parent: {
              ...current.parent,
              visited: true
            }
          }
        } else if (current.children.length == 2){
          if(!current.children[0].visited){
            queueText.innerHTML = `Visiting left child ${current.children[0].value} of parent node ${current.parent.value}`
            let child = {
              ...current.children[0],
              visited: true
            }
            current = {...current, children: [child, current.children[1]]}
          } else if(!current.children[1].visited){
            queueText.innerHTML = `Visiting right child ${current.children[1].value} of parent node ${current.parent.value}`
            let child = {
              ...current.children[1],
              visited: true
            }
            current = {...current, children: [current.children[0], child]}
            document.querySelector(`.aq${current.parent.index}`).classList.add('!hidden')
            document.querySelector(`.aqt${current.parent.index}`).classList.add('!hidden')
            if(bst[current.parent.index + 1] && bst[current.parent.index + 1].children.length == 0){
              document.querySelector(`.aq${current.parent.index + 1}`).classList.add('!hidden')
              document.querySelector(`.aqt${current.parent.index + 1}`).classList.add('!hidden')
            }
            filterBst = [...filterBst, current.parent.index]
            if(bst[current.parent.index + 1] && bst[current.parent.index + 1].children.length == 0){
              current = bst[currentIndex + 2]
              currentIndex += 2
            } else {              
              current = bst[currentIndex + 1]
              currentIndex += 1
            }
          } 
        } else if(current.children.length == 1){
          if(!current.children[0].visited){
            queueText.innerHTML = `Visiting only child ${val}`
            let child = {
              ...current.children[0],
              visited: true
            }
            current = {...current, children: [child]}
            document.querySelector(`.aq${current.parent.index}`).classList.add('!hidden')
            document.querySelector(`.aqt${current.parent.index}`).classList.add('!hidden')
            if(bst[current.parent.index + 1] && bst[current.parent.index + 1].children.length == 0){
              document.querySelector(`.aq${current.parent.index + 1}`).classList.add('!hidden')
              document.querySelector(`.aqt${current.parent.index + 1}`).classList.add('!hidden')
            }
            filterBst = filterBst.filter((_, index) => index !== current.parent.index)
            
            if(bst[current.parent.index + 1] && bst[current.parent.index + 1].children.length == 0){
              current = bst[currentIndex + 2]
              currentIndex += 2
            } else {              
              current = bst[currentIndex + 1]
              currentIndex += 1
            }
          }
        } 
      }
    }, (i + 1) * 2000);
  }
}

function animateArray(arr, mainArr) {
  document.querySelector("#array-container").innerHTML = "";
  let svg = createArrayContainer(arr.length);

  window.scroll({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

  let currRect, currCircle, currRText, currCText;
  for (let i = 0; i <= arr.length; i++) {
    let index = arr[i];
    setTimeout(() => {
      if (i > 0) {
        currCircle.setAttribute("fill", "green");
        currRect.setAttribute("fill", "green");
        currCText.setAttribute("fill", "white");
        currRText.setAttribute("fill", "white");
      }

      if (i < arr.length) {
        svg
          .append("rect")
          .attr("x", i * 50)
          .attr("y", 0)
          .attr("width", 50)
          .attr("height", 50)
          .attr("fill", "green")
          .attr("stroke", "black")
          .attr("class", `a${index}`)
          .on("click", () => addHighlight(index));
        svg
          .append("text")
          .text(mainArr[index])
          .attr("x", i * 50 + 25 - arr[i].toString().length * 5)
          .attr("y", 25 + 5)
          .attr("fill", "white")
          .attr("class", `at${index} node-text`);

        currCircle = document.querySelector(`.c${index}`);
        currCText = document.querySelector(`.t${index}`);
        currRect = document.querySelector(`.a${index}`);
        currRText = document.querySelector(`.at${index}`);
        currCircle.setAttribute("fill", "aqua");
        currRect.setAttribute("fill", "aqua");
        currCText.setAttribute("fill", "black");
        currRText.setAttribute("fill", "black");
      }
    }, (i + 1) * 1000);
  }
}

function createArrayContainer(n) {
  let svg = d3
    .select("#array-container")
    .append("svg")
    .attr("height", 50)
    .attr("width", 50 * n)
    .attr("class", "array-container");
  return svg;
}

function createQueueContainer(n) {
  let svg = d3
    .select("#queue-container")
    .append("svg")
    .attr("height", 50)
    .attr("width", 50 * n)
    .attr("class", "queue-container");
  return svg;
}