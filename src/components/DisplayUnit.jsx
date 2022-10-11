import { useGlobalContext } from '../context';
export default function DisplayUnit() {
  const { currentOperand, previousOperand, operation } = useGlobalContext();
  return (
    <>
    <div className="input">
      <aside className="result">{previousOperand} {operation}</aside>
      <aside className="text">{currentOperand}</aside>
    </div>
    </>
  )
}