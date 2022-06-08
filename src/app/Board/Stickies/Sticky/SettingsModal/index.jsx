import React from 'react';
import PropTypes from 'prop-types';

const SettingsModal = ({
  setBackgroundColor, setSelectFontFamily, handleChangeSticky, selectFontFamily, backgroundColor,
}) => (
  <div className="h-5/6 flex flex-col justify-evenly items-center">
    <p>Change sticky`s background color</p>
    <div>
      <button
        type="button"
        className={backgroundColor === 'yellow'
          ? 'modal-button-yellow shadow-lg shadow-yellow-300/50 scale-110'
          : 'modal-button-yellow'}
        value="yellow"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Yellow
      </button>
      <button
        type="button"
        className={backgroundColor === 'orange'
          ? 'modal-button-orange shadow-lg shadow-orange-600/50 scale-110'
          : 'modal-button-orange'}
        value="orange"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Orange
      </button>
      <button
        type="button"
        className={backgroundColor === 'blue'
          ? 'modal-button-blue shadow-lg shadow-blue-700/50 scale-110'
          : 'modal-button-blue'}
        value="blue"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Blue
      </button>
      <button
        type="button"
        className={backgroundColor === 'purple'
          ? 'modal-button-purple shadow-lg shadow-purple-700/50 scale-110'
          : 'modal-button-purple'}
        value="purple"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Purple
      </button>
      <button
        type="button"
        className={backgroundColor === 'green'
          ? 'modal-button-green shadow-lg shadow-green-700/50 scale-110'
          : 'modal-button-green'}
        value="green"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Green
      </button>
    </div>
    <p>Change typography</p>
    <div>
      <button
        type="button"
        className={selectFontFamily === 'sansSerif'
          ? 'modal-button-selected font-sans'
          : 'modal-button-not-selected font-sans'}
        value="sansSerif"
        onClick={(event) => setSelectFontFamily(event.target.value)}
      >
        Sans Serif
      </button>
      <button
        type="button"
        className={selectFontFamily === 'serif'
          ? 'modal-button-selected font-sans'
          : 'modal-button-not-selected font-sans'}
        value="serif"
        onClick={(event) => setSelectFontFamily(event.target.value)}
      >
        Serif
      </button>
      <button
        type="button"
        className={selectFontFamily === 'monospace'
          ? 'modal-button-selected font-sans'
          : 'modal-button-not-selected font-sans'}
        value="monospace"
        onClick={(event) => setSelectFontFamily(event.target.value)}
      >
        Monospace
      </button>
    </div>
    <button
      type="button"
      className="save-modal-button"
      onClick={() => handleChangeSticky()}
    >
      Save
    </button>
  </div>
);

SettingsModal.propTypes = {
  setSelectFontFamily: PropTypes.func.isRequired,
  setBackgroundColor: PropTypes.func.isRequired,
  handleChangeSticky: PropTypes.func.isRequired,
  selectFontFamily: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default SettingsModal;
