import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserLoggedIn } from '../redux/usersSlice';
import Stickies from './Stickies';
import Toolbar from './Toolbar';

const Board = () => {
  const currentUser = useSelector(selectUserLoggedIn);

  if (!currentUser) return <Navigate to="/" />;

  return (
    <section className="h-screen flex flex-col justify-between overflow-auto border border-zinc-500 border-16 rounded-lg bg-slate-100">
      <Stickies />
      <Toolbar />
    </section>
  );
};

export default Board;
