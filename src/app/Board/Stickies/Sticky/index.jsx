import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeColor,
  changeText,
  changeTextFont,
  changeTitle,
  removeSticky,
  restoreASticky,
} from '../../../redux/stickiesSlice';
import Modal from '../../Modal';
import SettingsModal from './SettingsModal';
import { selectUserLoggedIn } from '../../../redux/usersSlice';

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
  title, text, id, color, font, isInsideTrash,
}) => {
  const { email } = useSelector(selectUserLoggedIn);

  const dispatch = useDispatch();

  const colorsClassName = colors[color || 'yellow'];
  const fontClassName = fontFamilyAvailable[font || 'sans-serif'];

  const [modalVisible, setModalVisible] = useState(false);
  const [backgroundColor, setBackgroundCColor] = useState(color);
  const [selectFontFamily, setSelectFontFamily] = useState(font);

  const handleChangeSticky = () => {
    dispatch(changeTextFont({ id, font: selectFontFamily, email }));
    dispatch(changeColor({ id, color: backgroundColor, email }));

    setModalVisible(false);
  };

  const handleText = ({ currentTarget }) => {
    const currentText = currentTarget.textContent;
    dispatch(changeText({ id, text: currentText, email }));
  };

  const handleTitle = ({ currentTarget }) => {
    const currentText = currentTarget.textContent;
    dispatch(changeTitle({ id, title: currentText, email }));
  };

  return (
    <>
      <div className={`w-full m-2 md:w-5/12 border rounded-md ${colorsClassName}`} id={id}>
        <header
          className={`flex justify-between p-2 border border-b-2 rounded-t-md ${colorsClassName}`}
        >
          <p
            className={`w-auto ${fontClassName}`}
            id={id}
            contentEditable="true"
            suppressContentEditableWarning="true"
            onBlur={(event) => handleTitle(event)}
          >
            {title}
          </p>
          <div className="flex justify-between">
            {isInsideTrash ? (
              <button type="button" onClick={() => dispatch(restoreASticky({ id, email }))}>
                ×
              </button>
            ) : (
              <>
                <button className="mr-1" type="button" onClick={() => setModalVisible(true)}>
                  •••
                </button>
                <button type="button" onClick={() => dispatch(removeSticky({ id, email }))}>
                  ×
                </button>
              </>
            )}
          </div>
        </header>
        <div
          className={`p-2 ${fontClassName}`}
          id={id}
          contentEditable="true"
          suppressContentEditableWarning="true"
          onBlur={(event) => handleText(event)}
        >
          {text}
        </div>
      </div>
      <Modal title="Sticky's settings" visible={modalVisible} setVisible={setModalVisible}>
        <SettingsModal
          setBackgroundCColor={setBackgroundCColor}
          setSelectFontFamily={setSelectFontFamily}
          handleChangeSticky={handleChangeSticky}
        />
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
  isInsideTrash: PropTypes.bool.isRequired,
};

export default Sticky;
