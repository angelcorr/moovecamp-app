import React from 'react';
import PropTypes from 'prop-types';

const SettingsModal = ({ setBackgroundCColor, setSelectFontFamily, handleChangeSticky }) => (
  <div className="h-5/6 flex flex-col justify-evenly items-center">
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
        Current font
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
);

SettingsModal.propTypes = {
  setSelectFontFamily: PropTypes.func.isRequired,
  setBackgroundCColor: PropTypes.func.isRequired,
  handleChangeSticky: PropTypes.func.isRequired,
};

export default SettingsModal;
