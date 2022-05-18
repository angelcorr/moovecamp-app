const Sticky = ({title, text}) => (
  <div className="w-96 m-1 bg-yellow-300 border border-yellow-700 rounded-md">
    <header className="flex justify-between p-2 border border-b-2 border-yellow-700 rounded-t-md">
      <p className="w-auto">{title}</p>
      <div className="w-10 flex justify-between">
      <button>•••</button>
      <button>×</button>
      </div>
    </header>
    <div className="p-2">
      {text}
    </div>
  </div>
);

export default Sticky;
