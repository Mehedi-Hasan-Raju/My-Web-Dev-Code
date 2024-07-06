import { useState } from "react"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({n, WinningSum }) {


let [ticket, setTicket] = useState(genTicket(n));

let isWinning = sum(ticket) === WinningSum;

let buyNewTicket = ()=> {
    setTicket(genTicket(n));
}

    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyNewTicket}>Buy new Ticket</button>
            <h3 >{isWinning && "Congratulation,you won!"}</h3>
        </div>
    );
}
