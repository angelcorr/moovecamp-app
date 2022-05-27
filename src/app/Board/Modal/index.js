const Modal = ({ title, children, visible, setVisible }) => {
  return (
    visible && (
      <div className="w-6/12 h-3/4 fixed top-24 left-1/4 flex justify-center items-center rounded-md bg-slate-100 border border-2 border-zinc-500 p-4">
        <span className="Modal-backdrop"></span>
        <div className="w-full h-full">
          <div className="p-3 flex justify-between border border-b-zinc-400">
            <h2 className="ml-14">{title}</h2>
            <button className="close-modal" onClick={() => setVisible(false)}>
              ×
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
