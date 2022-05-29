import React from 'react';
import { useSelector } from 'react-redux';
import Sticky from './Sticky';
import { selectStickies } from '../../redux/stickiesSlice';

const Stickies = () => {
  const currentStickies = useSelector(selectStickies);

  return (
    <div className="flex flex-wrap">
      {currentStickies.stickies.map((sticky) => (
        <Sticky
          key={sticky.id}
          id={sticky.id}
          title={sticky.title}
          text={sticky.text}
          color={sticky.color}
          font={sticky.font}
          isInsideTrash={false}
        />
      ))}
    </div>
  );
};

export default Stickies;
