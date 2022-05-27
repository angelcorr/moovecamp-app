import { useDispatch } from 'react-redux';
import { removeSticky, restoreASticky } from '../../../redux/stickiesSlice';

const colors = {
  blue: 'bg-blue-300 border-blue-700',
  purple: 'bg-purple-300 border-purple-700',
  orange: 'bg-orange-300 border-orange-700',
  green: 'bg-green-300 border-green-700',
  yellow: 'bg-yellow-300 border-yellow-700',
};

const Sticky = ({ title, text, id, color, handleContent, isInsideTrash }) => {
  const dispatch = useDispatch();

  const colorsClassName = colors[color || 'yellow'];

  return (
    <div className={`w-96 m-2 border rounded-md ${colorsClassName}`} id={id}>
      <header
        className={`flex justify-between p-2 border border-b-2 rounded-t-md ${colorsClassName}`}
      >
        <p className="w-auto" id={id} onClick={handleContent}>
          {title}
        </p>
        <div className="w-10 flex justify-between">
          <button>•••</button>
          {isInsideTrash ? (
            <button onClick={() => dispatch(restoreASticky({ id }))}>×</button>
          ) : (
            <button onClick={() => dispatch(removeSticky({ id }))}>×</button>
          )}
        </div>
      </header>
      <div className="p-2" id={id} onClick={handleContent}>
        {text}
      </div>
    </div>
  );
};

export default Sticky;
