import React from 'react'

const History = ({history,moveTo,currentmove}) => {
    return (
        <ul>
            {history.map((_,move)=>{return(
           <li key={move}><button Style={{
               fontWeight: move===currentmove? "bold":"normal",
           }}type="button" onClick={()=>{
               moveTo(move)
           }}>{move===0?'Go to Game start':`Go to move #${move}`}</button></li>) })}
        </ul>
    )
}

export default History
