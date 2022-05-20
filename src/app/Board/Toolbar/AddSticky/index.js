import { useDispatch } from "react-redux";
import { addSticky } from "../../../redux/stickiesSlice";

const AddSticky = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex self-center">
      <button
        onClick={() => dispatch(addSticky({title: "cheve", text: "grevegruvi"}))}
        className="w-10 h-10 bg-gray-100 text-gray-700 border border-gray-300 rounded-full transition ease-in-out delay-150 hover:scale-125 duration-300"
      >
        +
      </button>
    </div>
  )
};

export default AddSticky;
