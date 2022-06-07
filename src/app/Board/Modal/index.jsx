import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  title, children, visible, setVisible,
}) => visible && (
  <div className="w-10/12 md:w-9/12 lg:w-6/12 h-5/6 fixed top-16 lg:left-1/4 flex justify-center items-center rounded-md bg-slate-100 border border-2 border-zinc-500 p-4">
    <span className="Modal-backdrop" />
    <div className="w-full h-full">
      <div className="p-3 flex justify-between border border-b-zinc-400">
        <h2 className="ml-14">{title}</h2>
        <button type="button" onClick={() => setVisible(false)}>
          ×
        </button>
      </div>
      {children}
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default Modal;
