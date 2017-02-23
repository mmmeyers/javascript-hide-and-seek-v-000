function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

// function increaseRankBy(n) {
//   var rankedList = document.querySelectorAll('.ranked-list')
//
//   for(let i = 0; i < rankedList.length; i++) {
//     let children = rankedList[i].children
//
//     for(let j = 0; k = children.length; j < k; j++) {
//       children[j].innerHTML.parseInt(children[j].innerHTML) + n
//     }
//   }
// }

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
