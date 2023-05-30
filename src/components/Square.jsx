const Square = ({ value, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className="square">
        {value}
      </button>
    </div>
  )
}

export default Square
