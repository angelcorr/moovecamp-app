import React from 'react';
import AddSticky from './AddSticky';
import CurrentUser from './CurrentUser';
import SignOut from './SignOut';
import Trash from './Trash';

const Toolbar = () => (
  <div className="flex justify-center sticky inset-x-0 bottom-1 md:static">
    <div className="h-16 flex justify-around m-3 bg-gray-100 border border-zinc-400 rounded-md shadow-2xl">
      <CurrentUser />
      <SignOut />
      <Trash />
      <AddSticky />
    </div>
  </div>
);

export default Toolbar;
