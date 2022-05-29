/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeColor,
  changeTextFont,
  removeSticky,
  restoreASticky,
} from '../../../redux/stickiesSlice';
import Modal from '../../Modal';

const colors = {
  blue: 'bg-blue-300 border-blue-700',
  purple: 'bg-purple-300 border-purple-700',
  orange: 'bg-orange-300 border-orange-700',
  green: 'bg-green-300 border-green-700',
  yellow: 'bg-yellow-300 border-yellow-700',
};

const fontFamilyAvailable = {
  serif: 'font-serif',
  sansSerif: 'font-sans',
  monospace: 'font-mono',
};

const Sticky = ({
  title, text, id, color, font, handleContent, isInsideTrash,
}) => {
  const dispatch = useDispatch();

  const colorsClassName = colors[color || 'yellow'];
  const fontClassName = fontFamilyAvailable[font || 'sans-serif'];

  const [modalVisible, setModalVisible] = useState(false);
  const [backgroundColor, setBackgroundCColor] = useState(color);
  const [selectFontFamily, setSelectFontFamily] = useState(font);

  const handleContentText = (event) => {
    const elementId = event.target;
    elementId.setAttribute('contenteditable', 'true');
  };

  const handleChangeSticky = () => {
    dispatch(changeTextFont({ id, font: selectFontFamily }));
    dispatch(changeColor({ id, color: backgroundColor }));

    setModalVisible(false);
  };

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
            <button type="button" onClick={() => setModalVisible(true)}>
              •••
            </button>
            {isInsideTrash ? (
              <button type="button" onClick={() => dispatch(restoreASticky({ id }))}>
                ×
              </button>
            ) : (
              <button type="button" onClick={() => dispatch(removeSticky({ id }))}>
                ×
              </button>
            )}
          </div>
        </header>
        <div className={`p-2 ${fontClassName}`} id={id} onClick={handleContent}>
          {text}
        </div>
      </div>
      <Modal title="Sticky's settings" visible={modalVisible} setVisible={setModalVisible}>
        <div className="h-full flex flex-col justify-evenly items-center">
          <p>Change sticky`s background color</p>
          <div>
            <button
              type="button"
              className="mt-3.5 mr-7 p-2 text-white bg-orange-600 border border-orange-600 rounded-lg"
              value="orange"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Orange
            </button>
            <button
              type="button"
              className="mt-3.5 mr-7 p-2 text-white bg-blue-700 border border-blue-700 rounded-lg"
              value="blue"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Blue
            </button>
            <button
              type="button"
              className="mt-3.5 mr-7 p-2 text-white bg-purple-700 border border-purple-700 rounded-lg"
              value="purple"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Purple
            </button>
            <button
              type="button"
              className="mt-3.5 p-2 text-white bg-green-700 border border-green-700 rounded-lg"
              value="green"
              onClick={(event) => setBackgroundCColor(event.target.value)}
            >
              Green
            </button>
          </div>
          <p>Change typography</p>
          <div>
            <button
              type="button"
              className="mt-3.5 mr-7 p-2 text-black bg-zinc-300 border border-zinc-500 rounded-lg font-sans"
              value="sansSerif"
              onClick={(event) => setSelectFontFamily(event.target.value)}
            >
              Default
            </button>
            <button
              type="button"
              className="mt-3.5 mr-7 p-2 text-black bg-zinc-300 border border-zinc-500 rounded-lg font-serif"
              value="serif"
              onClick={(event) => setSelectFontFamily(event.target.value)}
            >
              Times New Roman
            </button>
            <button
              type="button"
              className="mt-3.5 mr-7 p-2 text-black bg-zinc-300 border border-zinc-500 rounded-lg font-mono"
              value="monospace"
              onClick={(event) => setSelectFontFamily(event.target.value)}
            >
              A bit bold
            </button>
          </div>
          <button
            type="button"
            className="w-1/6 h-8 text-white bg-green-600 border border-green-600 rounded-md transition ease-in-out delay-150 hover:scale-125 duration-300"
            onClick={() => handleChangeSticky()}
          >
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

Sticky.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  handleContent: PropTypes.func.isRequired,
  isInsideTrash: PropTypes.bool.isRequired,
};

export default Sticky;
