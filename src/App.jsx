import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Board from './app/Board';
import Login from './app/Login';
import SignUp from './app/SignUp';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/board" element={<Board />} />
  </Routes>
);

export default App;
