import Stickies from "./Stickies";
import Toolbar from './Toolbar';

const Board = () => (
  <section className="h-screen m-1 flex flex-col justify-between">
    <Stickies />
    <Toolbar />
  </section>
);

export default Board;