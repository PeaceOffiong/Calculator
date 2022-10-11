import { useGlobalContext } from '../context';
export default function App() {
  const { HandleClick, handleEvaluate, handleDelete } = useGlobalContext()
  return (
    <>
      <div className="cell grey " onClick={(e) => HandleClick(e)}>AC</div>
      <div className="cell grey " onClick={handleDelete}>DEL</div>
      <div className="cell grey operand" onClick={(e) => HandleClick(e)}>%</div>
      <div className="cell brown operand" onClick={(e) => HandleClick(e)}>/</div>
      <div className="cell " onClick={(e) => HandleClick(e)}>7</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>8</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>9</div>
      <div className="cell brown operand" onClick={(e) => HandleClick(e)}>*</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>4</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>5</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>6</div>
      <div className="cell brown operand" onClick={(e) => HandleClick(e)}>-</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>1</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>2</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>3</div>
      <div className="cell brown operand" onClick={(e) => HandleClick(e)}>+</div>
      <div className="cell" onClick={(e) => HandleClick(e)}>0</div>
      <div className="cell" onClick={ (e) =>HandleClick(e)}>.</div>
      <div className="cell span-two" onClick={handleEvaluate}>=</div>
    </>
  )
}