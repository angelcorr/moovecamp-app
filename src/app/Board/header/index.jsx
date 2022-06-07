import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLoggedIn, signOut } from '../../redux/usersSlice';

const Header = () => {
  const { email } = useSelector(selectUserLoggedIn);
  const dispatch = useDispatch();

  return (
    <header className="p-2 flex justify-evenly border border-b-zinc-500 border-b-2">
      <div className="flex items-center">{email}</div>
      <div>
        <button
          className="p-2 border border-zinc-500 rounded-lg transitions"
          type="button"
          onClick={() => dispatch(signOut())}
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;
