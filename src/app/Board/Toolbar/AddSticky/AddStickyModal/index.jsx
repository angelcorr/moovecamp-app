import React from 'react';
import PropTypes from 'prop-types';

const AddStickyModal = ({
  title, setTitle, text, setText, setColor, setFont, handleSubmit,
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
          Current font
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
  setColor: PropTypes.func.isRequired,
  setFont: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddStickyModal;
