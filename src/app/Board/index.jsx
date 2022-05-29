import React from 'react';
import Stickies from './Stickies';
import Toolbar from './Toolbar';

const Board = () => (
  <section className="h-screen flex flex-col justify-between border border-zinc-500 border-16 rounded-lg bg-slate-100">
    <Stickies />
    <Toolbar />
  </section>
);

export default Board;
