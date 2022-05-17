import Sticky from "./Sticky";

const data = [
  { id:1, title: 'none', text: "Chevechuvi es lo mas" },
  { id:2, title: 'yeska', text: "Chevechuvi es lo mas bello" }
];

const Stickies = () => {
  return (
    <section>
      {data.map((sticky, key) => <Sticky id={key.key} title={sticky.title} text={sticky.text} />)}
    </section>
  )
};

export default Stickies;
