import './App.css';
import { useState } from 'react';

export default function Board(){
  const [squares, setSquares]=useState([null,null,null,null,null,null,null,null,null]);
  const [symbol,setSymbol]=useState('X');
  function handleClick(index){
      setSquares(prevSquares=>{
      const newSquares=[...prevSquares];
      if(squares[index]){
        return newSquares;
      }
      newSquares[index]=symbol;
      setSymbol((symbol==='X')?'O':'X');
      return newSquares;
      })}
  return (
  <>
    <div className='board-row'>
      <button onClick={()=>handleClick(0)}>
      {squares[0]}
      </button>
      <button onClick={()=>handleClick(1)}>
      {squares[1]}
      </button>
      <button onClick={()=>handleClick(2)}>
      {squares[2]}
      </button>
    </div>
    <div className='board-row'>
    <button onClick={()=>handleClick(3)}>
      {squares[3]}
      </button>
      <button onClick={()=>handleClick(4)}>
      {squares[4]}
      </button>
      <button onClick={()=>handleClick(5)}>
      {squares[5]}
      </button>
    </div>
    <div className='board-row'>
    <button onClick={()=>handleClick(6)}>
      {squares[6]}
      </button>
      <button onClick={()=>handleClick(7)}>
      {squares[7]}
      </button>
      <button onClick={()=>handleClick(8)}>
      {squares[8]}
      </button>
    </div>
  </>
  );
}
