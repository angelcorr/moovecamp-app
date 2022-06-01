import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserLoggedIn } from '../../../redux/usersSlice';

const CurrentUser = () => {
  const { email } = useSelector(selectUserLoggedIn);
  return <div className="mx-2.5 flex items-center">{email}</div>;
};

export default CurrentUser;
