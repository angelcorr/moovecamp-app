import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Sticky from '../../../Stickies/Sticky';
import { selectDeletedStickies } from '../../../../redux/stickiesSlice';

const TrashModal = ({ handleTrash, setVisible }) => {
  const currentDeletedStickies = useSelector(selectDeletedStickies);

  return (
    <>
      <div className="h-4/5 md:w-full overflow-auto flex flex-col items-center">
        {currentDeletedStickies.length <= 0 ? (
          <p className="w-full p-4 flex justify-center">The trash is empty</p>
        ) : (
          currentDeletedStickies.map((sticky) => (
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
          className="close-modal"
          onClick={() => setVisible(false)}
        >
          Cancel
        </button>
        {currentDeletedStickies.length > 0 && (
          <button
            type="button"
            className="close-modal"
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
  setVisible: PropTypes.func.isRequired,
};

export default TrashModal;
