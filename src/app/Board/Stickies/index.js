import Sticky from "./Sticky";
import { selectStickies } from '../../redux/stickiesSlice'
import { useSelector } from "react-redux";

const Stickies = () => {
  const currentStickies = useSelector(selectStickies);

  return (
    <div className="flex flex-wrap">
      {currentStickies.stickies.map((sticky) => <Sticky key={sticky.id} id={sticky.id} title={sticky.title} text={sticky.text} />)}
    </div>
  )
};

export default Stickies;
