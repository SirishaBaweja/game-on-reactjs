import React,{useState} from "react"
import Board from "./components/Board"
import History from "./components/History"
import { calculateWinner } from "./helpers";

import "./styles/root.scss"

const App = () => {
  const [history,setHistory]=useState([{board:Array(9).fill(null),isNext:true},]);
  const [currentmove,setcurrentmove]=useState(0);
  const current=history[currentmove];
    const winner=calculateWinner(current.board);
    const handleSquareClick=position=>{
        if(current.board[position]||winner){
            return ;
        }
        setHistory(prev=>{
          const last=prev[prev.length-1]
        const newboard=last.board.map((square,pos)=>{
            if(pos===position){
                return last.isNext?'X':'O';
            }
            return square;
        });
        return prev.concat({board:newboard,isNext:!last.isNext});
        });
        setcurrentmove(prev=>prev+1);
    };
    const moveTo=(move)=>{
    setcurrentmove(move);
    }
  return (
    <div className="app"> 
      <h1>TICTACTOE</h1>
      <h2>{winner?`Winner is Player ${winner}`:'Next turn'}</h2>
      <Board board={current.board}handleSquareClick={handleSquareClick}/>
      <History history={history} moveTo={moveTo} currentmove={currentmove}/>
    </div>
  );
};

export default App;


