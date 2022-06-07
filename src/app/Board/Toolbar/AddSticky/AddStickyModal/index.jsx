import React from 'react';
import PropTypes from 'prop-types';

const AddStickyModal = ({
  title, setTitle, text, setText, color, setColor, font, setFont, handleSubmit,
}) => (
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
          className={color === 'yellow'
            ? 'modal-button-yellow shadow-lg shadow-yellow-300/50 scale-110'
            : 'modal-button-yellow'}
          value="yellow"
          onClick={(event) => setColor(event.target.value)}
        >
          Yellow
        </button>
        <button
          type="button"
          className={color === 'orange'
            ? 'modal-button-orange shadow-lg shadow-orange-600/50 scale-110'
            : 'modal-button-orange'}
          value="orange"
          onClick={(event) => setColor(event.target.value)}
        >
          Orange
        </button>
        <button
          type="button"
          className={color === 'blue'
            ? 'modal-button-blue shadow-lg shadow-blue-700/50 scale-110'
            : 'modal-button-blue'}
          value="blue"
          onClick={(event) => setColor(event.target.value)}
        >
          Blue
        </button>
        <button
          type="button"
          className={color === 'purple'
            ? 'modal-button-purple shadow-lg shadow-purple-700/50 scale-110'
            : 'modal-button-purple'}
          value="purple"
          onClick={(event) => setColor(event.target.value)}
        >
          Purple
        </button>
        <button
          type="button"
          className={color === 'green'
            ? 'modal-button-green shadow-lg shadow-green-700/50 scale-110'
            : 'modal-button-green'}
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
          className={font === 'sansSerif'
            ? 'mr-1.5 mb-1.5 md:mr-7 p-1 md:p2 text-sm text-white bg-black border border-black rounded-lg font-sans scale-110'
            : 'mr-1.5 mb-1.5 md:mr-7 p-1 md:p2 text-sm text-black bg-zinc-300 border border-zinc-500 rounded-lg font-sans'}
          value="sansSerif"
          onClick={(event) => setFont(event.target.value)}
        >
          Current font
        </button>
        <button
          type="button"
          className={font === 'serif'
            ? 'mr-1.5 mb-1.5 md:mr-7 p-1 md:p2 text-sm text-sm text-white bg-black border border-black rounded-lg font-serif scale-110'
            : 'mr-1.5 mb-1.5 md:mr-7 p-1 md:p2 text-sm text-sm text-black bg-zinc-300 border border-zinc-500 rounded-lg font-serif'}
          value="serif"
          onClick={(event) => setFont(event.target.value)}
        >
          Times New Roman
        </button>
        <button
          type="button"
          className={font === 'monospace'
            ? 'p-1 md:p-2 text-sm text-sm text-white bg-black border border-black rounded-lg font-mono scale-110'
            : 'p-1 md:p-2 text-sm text-sm text-black bg-zinc-300 border border-zinc-500 rounded-lg font-mono'}
          value="monospace"
          onClick={(event) => setFont(event.target.value)}
        >
          Monospace
        </button>
      </div>
    </div>
    <button
      type="submit"
      className="w-3/12 md:w-1/6 h-8 text-sm text-white bg-green-600 border border-green-600 rounded-md"
    >
      Create
    </button>
  </form>
);

AddStickyModal.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
  font: PropTypes.string.isRequired,
  setFont: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddStickyModal;
