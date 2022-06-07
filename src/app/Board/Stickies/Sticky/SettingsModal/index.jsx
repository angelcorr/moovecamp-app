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
          ? 'mt-3.5 mr-7 p-2 text-white bg-black border border-black rounded-lg font-sans scale-110'
          : 'mt-3.5 mr-7 p-2 text-black bg-zinc-300 border border-zinc-500 rounded-lg font-sans'}
        value="sansSerif"
        onClick={(event) => setSelectFontFamily(event.target.value)}
      >
        Current font
      </button>
      <button
        type="button"
        className={selectFontFamily === 'serif'
          ? 'mt-3.5 mr-7 p-2 text-white bg-black border border-black rounded-lg font-serif scale-110'
          : 'mt-3.5 mr-7 p-2 text-black bg-zinc-300 border border-zinc-500 rounded-lg font-serif'}
        value="serif"
        onClick={(event) => setSelectFontFamily(event.target.value)}
      >
        Times New Roman
      </button>
      <button
        type="button"
        className={selectFontFamily === 'monospace'
          ? 'mt-3.5 mr-7 p-2 text-white bg-black border border-black rounded-lg font-mono scale-110'
          : 'mt-3.5 mr-7 p-2 text-black bg-zinc-300 border border-zinc-500 rounded-lg font-mono'}
        value="monospace"
        onClick={(event) => setSelectFontFamily(event.target.value)}
      >
        Monospace
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
);

SettingsModal.propTypes = {
  setSelectFontFamily: PropTypes.func.isRequired,
  setBackgroundColor: PropTypes.func.isRequired,
  handleChangeSticky: PropTypes.func.isRequired,
  selectFontFamily: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default SettingsModal;
