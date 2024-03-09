import "./Experience.css";

const Experience = ({ title, from, to, city, where, position }) => {
  return (
    <div className={position}>
      <div className="expContainer">
        <div>{title}</div>
        <div>
          {where}, {city}
        </div>
        <div>
          {from} - {to}
        </div>
      </div>
    </div>
  );
};

export default Experience;
