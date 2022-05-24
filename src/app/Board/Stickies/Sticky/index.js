import { useDispatch } from 'react-redux';
import { removeSticky } from '../../../redux/stickiesSlice';

const Sticky = ({ title, text, id, handleContent }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-96 m-2 bg-yellow-300 border border-yellow-700 rounded-md" id={id}>
      <header className="flex justify-between p-2 border border-b-2 border-yellow-700 rounded-t-md">
        <p className="w-auto" id={id} onClick={handleContent}>
          {title}
        </p>
        <div className="w-10 flex justify-between">
          <button>•••</button>
          <button onClick={() => dispatch(removeSticky({ id }))}>×</button>
        </div>
      </header>
      <div className="p-2" id={id} onClick={handleContent}>
        {text}
      </div>
    </div>
  );
};

export default Sticky;
