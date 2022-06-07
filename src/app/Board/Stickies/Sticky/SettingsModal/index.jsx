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
          ? 'mt-3.5 mr-7 p-2 text-black bg-yellow-300 shadow-lg shadow-yellow-300/50 border border-yellow-300 rounded-lg scale-110'
          : 'mt-3.5 mr-7 p-2 text-black bg-yellow-300 border border-yellow-300 rounded-lg'}
        value="yellow"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Yellow
      </button>
      <button
        type="button"
        className={backgroundColor === 'orange'
          ? 'mt-3.5 mr-7 p-2 text-white bg-orange-600 shadow-lg shadow-orange-600/50 border border-orange-600 rounded-lg scale-110'
          : 'mt-3.5 mr-7 p-2 text-white bg-orange-600 border border-orange-600 rounded-lg'}
        value="orange"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Orange
      </button>
      <button
        type="button"
        className={backgroundColor === 'blue'
          ? 'mt-3.5 mr-7 p-2 text-white bg-blue-700 shadow-lg shadow-blue-700/50 border border-blue-700 rounded-lg scale-110'
          : 'mt-3.5 mr-7 p-2 text-white bg-blue-700 border border-blue-700 rounded-lg'}
        value="blue"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Blue
      </button>
      <button
        type="button"
        className={backgroundColor === 'purple'
          ? 'mt-3.5 mr-7 p-2 text-white bg-purple-700 shadow-lg shadow-purple-700/50 border border-purple-700 rounded-lg scale-110'
          : 'mt-3.5 mr-7 p-2 text-white bg-purple-700 border border-purple-700 rounded-lg'}
        value="purple"
        onClick={(event) => setBackgroundColor(event.target.value)}
      >
        Purple
      </button>
      <button
        type="button"
        className={backgroundColor === 'green'
          ? 'mt-3.5 mr-7 p-2 text-white bg-green-700 shadow-lg shadow-green-700/50 border border-green-700 rounded-lg scale-110'
          : 'mt-3.5 p-2 text-white bg-green-700 border border-green-700 rounded-lg'}
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
