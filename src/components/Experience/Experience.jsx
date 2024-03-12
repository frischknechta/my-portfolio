import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <FontAwesomeIcon
          icon={`fa-caret-${position === "left" ? "right" : "left"}`}
        />
      </div>
    </div>
  );
};

export default Experience;
