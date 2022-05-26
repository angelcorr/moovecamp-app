import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSticky } from '../../../redux/stickiesSlice';
import Modal from '../../Modal';

const AddSticky = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSticky({ title, text }));
    setModalVisible(false);
    setTitle('');
    setText('');
  };

  return (
    <>
      <div className="flex self-center">
        <button
          onClick={() => setModalVisible(true)}
          className="w-10 h-10 bg-gray-100 text-gray-700 border border-gray-300 rounded-full transition ease-in-out delay-150 hover:scale-125 duration-300"
        >
          +
        </button>
      </div>
      <Modal title="New sticky" visible={modalVisible} setVisible={setModalVisible}>
        <form
          className="h-full flex flex-col justify-evenly items-center"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            className="w-9/12 h-9 p-2 placeholder:text-black//25 bg-yellow-300 border border-2 border-yellow-700 rounded-md"
            placeholder="Add a title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className="w-9/12 h-24 p-2 placeholder:text-black//25 bg-yellow-300 border border-2 border-yellow-700 rounded-md"
            placeholder="Add a text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className='flex flex-col items-center'>
            Chose a color
            <div>
              <button className="mt-3.5 mr-7 p-2 text-white bg-orange-700 border border-orange-700 rounded-lg">Orange</button>
              <button className="mt-3.5 mr-7 p-2 text-white bg-pink-700 border border-pink-700 rounded-lg">Pink</button>
              <button className="mt-3.5 mr-7 p-2 text-white bg-purple-700 border border-purple-700 rounded-lg">Purple</button>
              <button className="mt-3.5 p-2 text-white bg-green-700 border border-green-700 rounded-lg">Green</button>
            </div>
          </div>
          <button className="w-1/6 h-8 text-white bg-green-600 border border-green-600 rounded-md">
            Create
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddSticky;
