const tiles = document.querySelectorAll('.tile')
const gameBoard = document.querySelector('main')
let winner = 12345678

let gamePosition = [
    [tiles[0], tiles[1], tiles[2]],
    [tiles[3], tiles[4], tiles[5]],
    [tiles[6], tiles[7], tiles[8]]
]

const render = (gameBoard, gamePosition) => {
    gamePosition.forEach(row => {
        row.forEach(column => {
            gameBoard.appendChild(column)
        })
    })
}

gameBoard.addEventListener('click', (e) => {
    target = e.target

    let x, y
    gamePosition.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if (column === target) {
                x = rowIndex
                y = columnIndex
            }
        })
    })

    let emptyX, emptyY
    gamePosition.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if (column.innerHTML === '') {
                emptyX = rowIndex
                emptyY = columnIndex
                column.style.backgroundColor = 'darkslategray'
            }
        })
    })

    if (
        (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
        (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))
    ) {
        const temporary = gamePosition[x][y]
        gamePosition[x][y] = gamePosition[emptyX][emptyY]
        gamePosition[emptyX][emptyY] = temporary

        render(gameBoard, gamePosition)

        let tem = Number(gameBoard.textContent.replace(/ /g, ''))
        if (tem === winner) {
            alert('Correct positioning')
        }
    }

})