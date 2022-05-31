import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStickies } from '../../../../redux/stickiesSlice';
import Sticky from '../../../Stickies/Sticky';

const TrashModal = ({ handleTrash, setVisible }) => {
  const currentState = useSelector(selectStickies);

  return (
    <>
      <div className="h-4/5 md:w-full overflow-auto flex flex-col items-center">
        {currentState.deletedStickies.length <= 0 ? (
          <p className="w-full p-4 flex justify-center">The trash is empty</p>
        ) : (
          currentState.deletedStickies.map((sticky) => (
            <Sticky
              key={sticky.id}
              id={sticky.id}
              title={sticky.title}
              text={sticky.text}
              color={sticky.color}
              font={sticky.font}
              isInsideTrash
            />
          ))
        )}
      </div>
      <footer className="sticky my-2 flex justify-evenly">
        <button
          type="button"
          className="w-4/12 p-2 text-sm border border-red-600 bg-red-600 text-zinc-50 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300"
          onClick={() => setVisible(false)}
        >
          Cancel
        </button>
        {currentState.deletedStickies.length > 0 && (
          <button
            type="button"
            className="w-4/12 p-2 text-sm border border-red-600 bg-red-600 text-zinc-50 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300"
            onClick={() => handleTrash()}
          >
            Empty Trash
          </button>
        )}
      </footer>
    </>
  );
};

TrashModal.propTypes = {
  handleTrash: PropTypes.func.isRequired,
  setVisible: PropTypes.bool.isRequired,
};

export default TrashModal;
