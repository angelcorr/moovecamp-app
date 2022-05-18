import AddSticky from "./AddSticky";
import Trash from "./Trash";

const Toolbar = () => (
  <div className="flex justify-center">
    <div className="w-64 h-9 flex justify-around m-3 border border-black">
      <Trash />
      <AddSticky />
    </div>
  </div>
);

export default Toolbar;