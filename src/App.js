import './App.css';
import { useState } from 'react';

export default function Board(){
  const [squares, setSquares]=useState([null,null,null,null,null,null,null,null,null]);
  const [symbol,setSymbol]=useState('X');
  const [end, setEnd]=useState(false);
  function winCheck(){
      if(squares[0]===squares[1]&&squares[0]===squares[2]&&squares[0]!=null){
        setEnd(true);
        return true;
      }
      if(squares[0]===squares[3]&&squares[0]===squares[6]&&squares[0]!=null){
        setEnd(true);
        return true;
      }
      if(squares[6]===squares[7]&&squares[6]===squares[8]&&squares[6]!=null){
        setEnd(true);
        return true;
      }
      if(squares[2]===squares[5]&&squares[2]===squares[8]&&squares[2]!=null){
        setEnd(true);
        return true;
      }
      if(squares[0]===squares[4]&&squares[0]===squares[8]&&squares[0]!=null){
        setEnd(true);
        return true;
      }
      if(squares[2]===squares[4]&&squares[2]===squares[6]&&squares[2]!=null){
        setEnd(true);
        return true;
      }
      if(squares[3]===squares[4]&&squares[3]===squares[5]&&squares[3]!=null){
        setEnd(true);
        return true;
      }
      if(squares[1]===squares[4]&&squares[1]===squares[7]&&squares[1]!=null){
        setEnd(true);
        return true;
      }
      return false;
  }
  function handleClick(index){
      setSquares(prevSquares=>{
      const newSquares=[...prevSquares];
      if(winCheck()){
        return newSquares;
      }
      setSymbol((symbol==='X')?'O':'X');
      if(squares[index]){
        return newSquares;
      }
      newSquares[index]=symbol;
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
    
    <p style={{color: 'black',
            fontSize: 50,
            fontWeight: 'bold',
            textTransform: 'capitalize',
            letterSpacing: 1,
            textShadow: '1 1 2 red',
            textAlign: 'left',
            lineHeight: 1.6}}>{(end===true)?(symbol==='X'?'O':'X')+" Won":""}</p>
  </>
  );
}
