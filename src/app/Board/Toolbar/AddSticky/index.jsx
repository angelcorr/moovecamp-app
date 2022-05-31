import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSticky } from '../../../redux/stickiesSlice';
import Modal from '../../Modal';
import AddStickyModal from './AddStickyModal';

const AddSticky = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('yellow');
  const [font, setFont] = useState('sansSerif');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addSticky({
        title,
        text,
        color,
        font,
      }),
    );
    setModalVisible(false);
    setTitle('');
    setText('');
    setColor('');
  };

  return (
    <>
      <div className="flex self-center">
        <button
          type="button"
          onClick={() => setModalVisible(true)}
          className="w-10 h-10 mx-2.5 bg-gray-100 text-gray-700 border border-gray-300 rounded-full transition ease-in-out delay-150 hover:scale-125 duration-300"
        >
          +
        </button>
      </div>
      <Modal title="New sticky" visible={modalVisible} setVisible={setModalVisible}>
        <AddStickyModal
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
          setColor={setColor}
          setFont={setFont}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
};

export default AddSticky;
