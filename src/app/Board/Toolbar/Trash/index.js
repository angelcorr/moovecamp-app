import emptyTrash from './trash-can/trash-can-empty.png';
import fullTrash from './trash-can/trash-can-full.png'

const Trash = () => {
  const isEmpty = false;

  return (
    <>
      {
        !isEmpty ? <img src={emptyTrash} alt="Trash can empty" /> : 
        <img src={fullTrash} alt="Trash can full" /> 
      }
    </>
  )
};

export default Trash;
