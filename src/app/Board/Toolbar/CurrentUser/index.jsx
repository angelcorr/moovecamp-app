import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserLoggedIn } from '../../../redux/usersSlice';

const CurrentUser = () => {
  const currentUser = useSelector(selectUserLoggedIn);
  return <div className="mx-2.5 flex items-center">{currentUser}</div>;
};

export default CurrentUser;
