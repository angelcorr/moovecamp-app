import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllStickiesFromTrash, selectStickies } from '../../../redux/stickiesSlice';
import Modal from '../../Modal';
import Sticky from '../../Stickies/Sticky';
import emptyTrash from './trash-can/trash-can-empty.png';
import fullTrash from './trash-can/trash-can-full.png';

const Trash = () => {
  const currentState = useSelector(selectStickies);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const handleEmptyTrash = () => {
    setModalVisible(false);
    dispatch(removeAllStickiesFromTrash());
  };

  return (
    <>
      {currentState.deletedStickies.length > 0 ? (
        <button type="button" onClick={() => setModalVisible(true)}>
          <img className="h-14" src={fullTrash} alt="Trash can full" />
        </button>
      ) : (
        <button type="button" onClick={() => setModalVisible(true)}>
          <img className="h-14" src={emptyTrash} alt="Trash can empty" />
        </button>
      )}
      <Modal title="Trash can" visible={modalVisible} setVisible={setModalVisible}>
        <div className="h-4/6 overflow-auto flex flex-col items-center">
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
                isInsideTrash
              />
            ))
          )}
        </div>
        <footer className="mt-3.5 flex justify-evenly">
          <button
            type="button"
            className="w-3/12 p-2 border border-red-600 bg-red-600 text-zinc-50 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300"
            onClick={() => setModalVisible(false)}
          >
            Cancel
          </button>
          {currentState.deletedStickies.length > 0 && (
            <button
              type="button"
              className="w-3/12 p-2 border border-red-600 bg-red-600 text-zinc-50 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300"
              onClick={() => handleEmptyTrash()}
            >
              Empty Trash
            </button>
          )}
        </footer>
      </Modal>
    </>
  );
};

export default Trash;
