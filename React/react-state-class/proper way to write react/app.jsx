import './App.css';
import Counter from './Counter';
import LikeButton from './likeButton';
import Lottery from './Lottery';
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import TicketNum from './TicketNum';
import Ticket from './Ticket';


function App() {

  return (
    <>
      <Lottery n={5} WinningSum={125}/>
    </>
  );
}

export default App;

