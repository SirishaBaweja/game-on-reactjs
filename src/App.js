import React,{useState} from "react"
import Board from "./components/Board"
import { calculateWinner } from "./helpers";

import "./styles/root.scss"

const App = () => {
  const [board,setboard]=useState(Array(9).fill(null));
    const [isNext,setisNext]=useState(false);
    const winner=calculateWinner(board);
    const handleSquareClick=position=>{
        if(board[position]||winner){
            return ;
        }
        setboard(prev=>{
        return prev.map((square,pos)=>{
            if(pos===position){
                return isNext?'X':'O';
            }
            return square;
        });
        });
        setisNext(prev=>!prev);
    };
  return (
    <div className="app"> 
      <h1>TICTACTOE</h1>
      <h2>{winner?`Winner is Player ${winner}`:'next player s chance'}</h2>
      <Board board={board}handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;


