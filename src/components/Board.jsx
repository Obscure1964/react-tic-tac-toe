import Square from "./Square"
import { useState } from "react"

const Board = () => {
  const [xTurn, setXTurn] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => {
    const nextSquares = squares.slice()
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    if (xTurn) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }

    setSquares(nextSquares)

    setXTurn(!xTurn)
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xTurn ? "X" : "O")
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setXTurn(true)
  }
  if (!winner) {
    return (
      <>
        <div className="board-row">
          <Square handleClick={() => handleClick(0)} value={squares[0]} />
          <Square handleClick={() => handleClick(1)} value={squares[1]} />
          <Square handleClick={() => handleClick(2)} value={squares[2]} />
        </div>
        <div className="boar-row">
          <Square handleClick={() => handleClick(3)} value={squares[3]} />
          <Square handleClick={() => handleClick(4)} value={squares[4]} />
          <Square handleClick={() => handleClick(5)} value={squares[5]} />
        </div>
        <div className="board-row">
          <Square handleClick={() => handleClick(6)} value={squares[6]} />
          <Square handleClick={() => handleClick(7)} value={squares[7]} />
          <Square handleClick={() => handleClick(8)} value={squares[8]} />
        </div>
      </>
    )
  }
  return (
    <>
      <div className="status">
        <div>{status}</div>
        <div>
          <button onClick={resetGame}>RESET</button>
        </div>
      </div>
    </>
  )
}

export default Board
