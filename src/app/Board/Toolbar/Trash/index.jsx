import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllStickiesFromTrash, selectStickies } from '../../../redux/stickiesSlice';
import Modal from '../../Modal';
import emptyTrash from './trash-can/trash-can-empty.png';
import fullTrash from './trash-can/trash-can-full.png';
import TrashModal from './TrashModal/TrashModal';

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
        <button className="mx-2.5" type="button" onClick={() => setModalVisible(true)}>
          <img className="h-14" src={fullTrash} alt="Trash can full" />
        </button>
      ) : (
        <button className="mx-2.5" type="button" onClick={() => setModalVisible(true)}>
          <img className="h-14" src={emptyTrash} alt="Trash can empty" />
        </button>
      )}
      <Modal title="Trash can" visible={modalVisible} setVisible={setModalVisible}>
        <TrashModal handleTrash={handleEmptyTrash} setVisible={setModalVisible} />
      </Modal>
    </>
  );
};

export default Trash;
