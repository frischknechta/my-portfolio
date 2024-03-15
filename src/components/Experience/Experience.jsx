import "./Experience.css";

const Experience = ({ title, from, to, city, where, position }) => {
  return (
    <div className={position}>
      <div className="expContainer">
        <div className="title">{title}</div>
        <div className="company">
          {where}, {city}
        </div>
        <div className="date">
          {from} - {to}
        </div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Experience;
