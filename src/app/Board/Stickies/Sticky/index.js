import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor, removeSticky, restoreASticky } from '../../../redux/stickiesSlice';
import Modal from '../../Modal/';

const colors = {
  blue: 'bg-blue-300 border-blue-700',
  purple: 'bg-purple-300 border-purple-700',
  orange: 'bg-orange-300 border-orange-700',
  green: 'bg-green-300 border-green-700',
  yellow: 'bg-yellow-300 border-yellow-700',
};

const Sticky = ({ title, text, id, color, font, handleContent, isInsideTrash }) => {
  const dispatch = useDispatch();

  const colorsClassName = colors[color || 'yellow'];
  const [modalVisible, setModalVisible] = useState(false);
  const [backgroundColor, setBackgroundCColor] = useState('');
  const [fontFamily, setFontFamily] = useState('');

  const handleChangeSticky = () => {
    const color = backgroundColor;
    const fontFamilySelected = fontFamily;
    dispatch(changeColor({ id, color}));
    setBackgroundCColor('');
    setModalVisible(false);
  }

  return (
    <>
      <div className={`w-96 m-2 border rounded-md ${colorsClassName}`} id={id}>
        <header
          className={`flex justify-between p-2 border border-b-2 rounded-t-md ${colorsClassName}`}
        >
          <p className="w-auto" id={id} onClick={handleContent}>
            {title}
          </p>
          <div className="w-10 flex justify-between">
            <button onClick={() => setModalVisible(true)}>•••</button>
            {isInsideTrash ? (
              <button onClick={() => dispatch(restoreASticky({ id }))}>×</button>
            ) : (
              <button onClick={() => dispatch(removeSticky({ id }))}>×</button>
            )}
          </div>
        </header>
        <div className="p-2" id={id} onClick={handleContent}>
          {text}
        </div>
      </div>
      <Modal title="Sticky's settings" visible={modalVisible} setVisible={setModalVisible}>
        <div className="h-full flex flex-col justify-evenly items-center">
          <p>Change sticky's background color and typography</p>
          <div>
            <button
              className="mt-3.5 mr-7 p-2 text-white bg-orange-600 border border-orange-600 rounded-lg"
              value="orange"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Orange
            </button>
            <button
              className="mt-3.5 mr-7 p-2 text-white bg-blue-700 border border-blue-700 rounded-lg"
              value="blue"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Blue
            </button>
            <button
              className="mt-3.5 mr-7 p-2 text-white bg-purple-700 border border-purple-700 rounded-lg"
              value="purple"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Purple
            </button>
            <button
              className="mt-3.5 p-2 text-white bg-green-700 border border-green-700 rounded-lg"
              value="green"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Default
            </button>
          </div>
          <div>
            <button
              className="mt-3.5 mr-7 p-2 text-white bg-orange-600 border border-orange-600 rounded-lg font-sans"
              value="font-sans"
              onClick={(event) => setFontFamily(event.target.value)}
            >
              Default
            </button>
            <button
              className="mt-3.5 mr-7 p-2 text-white bg-blue-700 border border-blue-700 rounded-lg font-serif"
              value="font-serif"
              onClick={(event) => setFontFamily(event.target.value)}
            >
              Times New Roman
            </button>
            <button
              className="mt-3.5 mr-7 p-2 text-white bg-purple-700 border border-purple-700 rounded-lg font-mono"
              value="font-mono"
              onClick={(event) => setFontFamily(event.target.value)}
            >
              A bit bold
            </button>
          </div>
          <button className="w-1/6 h-8 text-white bg-green-600 border border-green-600 rounded-md transition ease-in-out delay-150 hover:scale-125 duration-300" onClick={() => handleChangeSticky()}>Save</button>
        </div>
      </Modal>
    </>
  );
};

export default Sticky;
