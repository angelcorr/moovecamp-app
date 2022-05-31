import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../redux/usersSlice';

const SignOut = () => {
  const dispatch = useDispatch();

  return (
    <div className="mx-2.5 flex items-center">
      <button type="button" onClick={() => dispatch(signOut())}>Sign out</button>
    </div>
  );
};

export default SignOut;
