import { useSelector } from 'react-redux';
import { selectStickies } from '../../../redux/stickiesSlice';
import emptyTrash from './trash-can/trash-can-empty.png';
import fullTrash from './trash-can/trash-can-full.png'

const Trash = () => {
  const currentState = useSelector(selectStickies);

  return (
    <>
      {
        currentState.deletedStickies.length > 0 ? <img src={fullTrash} alt="Trash can full" /> : 
        <img src={emptyTrash} alt="Trash can empty" />
      }
    </>
  )
};

export default Trash;
