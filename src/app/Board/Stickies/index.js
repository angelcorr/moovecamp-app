import Sticky from "./Sticky";

const data = [
  { id:1, title: 'none', text: "Chevechuvi es lo mas" },
  { id:2, title: 'yeska', text: "Chevechuvi es lo mas bello" },
  { id:2, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo" },
  { id:2, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo" }
];

const Stickies = () => {
  return (
    <div className="flex flex-wrap">
      {data.map((sticky, key) => <Sticky id={key.key} title={sticky.title} text={sticky.text} />)}
    </div>
  )
};

export default Stickies;
