import { useState } from "react"

export default function LudoBoard() {
    let [move,setMove] = useState({blue:0, yellow: 0, green: 0, red:0});
  
    let updateBlue = () => {
        setMove ((preMove) => {
            return {...preMove, blue: preMove.blue + 1};
        }); 
    }
    let updateYellow = () => {
        setMove ((preMove) => {
            return {...preMove, yellow: preMove.yellow + 1};
        }); 
    }
    let updateGreen = () => {
        setMove ((preMove) => {
            return {...preMove, green: preMove.green + 1};
        }); 
    }
    let updateRed = () => {
        setMove ((preMove) => {
            return {...preMove, green: preMove.green + 1};
        }); 
    }


    return (
        <div>
            <p>Game Begins!</p>
            <div className="Board">
                <p>Blue moves ={move.blue} </p>
                <button style={{backgroundColor:"blue"}}  onClick={updateBlue}>+1</button>
                <p>Yellow moves ={move.yellow} </p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves ={move.green} </p>
                <button  style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves ={move.red} </p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}
