import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllStickiesFromTrash, selectDeletedStickies } from '../../../redux/stickiesSlice';
import { selectUserLoggedIn } from '../../../redux/usersSlice';
import Modal from '../../Modal';
import emptyTrash from './trash-can/trash-can-empty.png';
import fullTrash from './trash-can/trash-can-full.png';
import TrashModal from './TrashModal';

const Trash = () => {
  const currentDeletedStickies = useSelector(selectDeletedStickies);
  const { email } = useSelector(selectUserLoggedIn);

  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const handleEmptyTrash = () => {
    dispatch(removeAllStickiesFromTrash({ email }));
    setModalVisible(false);
  };

  return (
    <>
      {currentDeletedStickies.length > 0 ? (
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
