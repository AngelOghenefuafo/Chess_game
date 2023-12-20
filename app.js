const gameBoard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const width = 8
let playerGo = 'black'
playerDisplay.textContent = 'black'

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook

]

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece
        //drag and drop
        square.firstChild?.setAttribute('draggable', true)
        square.setAttribute('square-id', i)
        //square.classList.add('grey')

        //This will set the color pattern of the board
        const row = Math.floor( (63 - i) /8) + 1
         if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "grey" : "burlywood")
         } else {
            square.classList.add(i % 2 === 0 ? "burlywood" : "grey")
         }
         //For making the peices black and white, the i <= 15 will occur in the first 16 squares
         if ( i <= 15) {
            square.firstChild.firstChild.classList.add('black')
         }
         if ( i >= 48) {
            square.firstChild.firstChild.classList.add('white')
         }
        gameBoard.append(square)
    })
}
createBoard()
//grab every square
const allSquares = document.querySelectorAll(".square")

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let startPostitionId
let draggedElement

function dragStart(e) {
    startPostitionId = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.stopPropagation()
    console.log(e.target)
    const taken = e.target.classList.contains('piece')

    //e.target.parentNode.append(draggedElement)
    //e.target.remove()
    //e.target.append(draggedElement)
    changePlayer()
}

function changePlayer() {
    if (playerGo === "black") {
        playerGo = "white"
        playerDisplay.textContent = 'white'
    } else {
        playerGo = "black"
        playerDisplay.textContent = 'black'
    }
}

function reverseIds() {
    const allSquares = document.querySelectorAll(".square")
}