import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSticky } from '../../../redux/stickiesSlice';
import Modal from '../../Modal';

const AddSticky = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('yellow');
  const [font, setFont] = useState('sansSerif');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSticky({
      title, text, color, font,
    }));
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
        <form
          className="h-5/6 flex flex-col justify-around items-center"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            className="w-11/12 md:w-9/12 h-9 p-2 placeholder:text-black/25 bg-yellow-300 border border-2 border-yellow-700 rounded-md"
            placeholder="Add a title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className="w-11/12 h-12 md:w-9/12 md:h-24 p-2 placeholder:text-black/25 bg-yellow-300 border border-2 border-yellow-700 rounded-md"
            placeholder="Add a text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="flex flex-col items-center">
            Chose a color
            <div>
              <button
                type="button"
                className="mr-1.5 md:mr-7 p-1 md:p-2 text-sm text-white bg-orange-600 border border-orange-600 rounded-lg"
                value="orange"
                onClick={(event) => setColor(event.target.value)}
              >
                Orange
              </button>
              <button
                type="button"
                className="mr-1.5 md:mr-7 p-1 md:p-2 text-sm text-white bg-blue-700 border border-blue-700 rounded-lg"
                value="blue"
                onClick={(event) => setColor(event.target.value)}
              >
                Blue
              </button>
              <button
                type="button"
                className="mr-1.5 md:mr-7 p-1 md:p-2 text-sm text-white bg-purple-700 border border-purple-700 rounded-lg"
                value="purple"
                onClick={(event) => setColor(event.target.value)}
              >
                Purple
              </button>
              <button
                type="button"
                className="p-1 md:p-2 text-sm text-white bg-green-700 border border-green-700 rounded-lg"
                value="green"
                onClick={(event) => setColor(event.target.value)}
              >
                Green
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            Chose a text type
            <div>
              <button
                type="button"
                className="mr-1.5 mb-1.5 md:mr-7 p-1 md:p2 text-sm text-white bg-orange-600 border border-orange-600 rounded-lg"
                value="sansSerif"
                onClick={(event) => setFont(event.target.value)}
              >
                Actual
              </button>
              <button
                type="button"
                className="mr-1.5 mb-1.5 md:mr-7 p-1 md:p2 text-sm text-white bg-blue-700 border border-blue-700 rounded-lg"
                value="serif"
                onClick={(event) => setFont(event.target.value)}
              >
                Times New Roman
              </button>
              <button
                type="button"
                className="p-1 md:p-2 text-sm text-white bg-purple-700 border border-purple-700 rounded-lg"
                value="monospace"
                onClick={(event) => setFont(event.target.value)}
              >
                Monospace
              </button>
            </div>
          </div>
          <button type="submit" className="w-3/12 md:w-1/6 h-8 text-sm text-white bg-green-600 border border-green-600 rounded-md">
            Create
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddSticky;
