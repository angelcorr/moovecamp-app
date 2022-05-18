import Sticky from "./Sticky";

const data = [
  { id: 1, title: 'none', text: "Chevechuvi" },
  { id: 2, title: 'yeska', text: "Chevechuvi es lo mas bello" },
  { id: 3, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo sisisis" },
  { id: 4, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo no se nada de eso aun que broma:(" },
  { id: 5, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo b" },
  { id: 6, title: 'yeska', text: "Chevechuvi es" },
  { id: 7, title: 'yeska', text: "Chevechuvi es lo mas bello de nuevo" }
];

const Stickies = () => {
  return (
    <div className="flex flex-wrap">
      {data.map((sticky) => <Sticky key={sticky.id} title={sticky.title} text={sticky.text} />)}
    </div>
  )
};

export default Stickies;
