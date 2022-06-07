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
      className="inputs h-9"
      placeholder="Add a title"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />
    <textarea
      className="inputs h-12 md:h-24"
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
      <div className="mt-3.5">
        <button
          type="button"
          className={font === 'sansSerif'
            ? 'modal-button-selected font-sans'
            : 'modal-button-not-selected font-sans'}
          value="sansSerif"
          onClick={(event) => setFont(event.target.value)}
        >
          Current font
        </button>
        <button
          type="button"
          className={font === 'serif'
            ? 'modal-button-selected font-serif'
            : 'modal-button-not-selected font-serif'}
          value="serif"
          onClick={(event) => setFont(event.target.value)}
        >
          Times New Roman
        </button>
        <button
          type="button"
          className={font === 'monospace'
            ? 'modal-button-selected font-mono'
            : 'modal-button-not-selected font-mono'}
          value="monospace"
          onClick={(event) => setFont(event.target.value)}
        >
          Monospace
        </button>
      </div>
    </div>
    <button
      type="submit"
      className="save-modal-button"
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
