import PropTypes from "prop-types";
import "./RecursiveAnimation.css";
import randomColors from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecursiveAnimation = ({ level = 20, icon, withBkgs, centerBkg }) => {
  if (level === 0) {
    return;
  }

  if (level === 1 && icon) {
    return <FontAwesomeIcon icon={icon} />;
  }

  if (level === 2 && centerBkg) {
    return (
      <div className="spin" style={{ backgroundColor: centerBkg }}>
        <RecursiveAnimation icon={icon} level={level - 1} />
      </div>
    );
  }

  if (level)
    return (
      <div
        className="spin"
        style={{ backgroundColor: withBackgrounds ? randomColors() : "" }}
      >
        <RecursiveAnimation icon={icon} level={level - 1} />
      </div>
    );
};

RecursiveAnimation.propTypes = {
  level: PropTypes.number,
  withBackgrounds: PropTypes.boolean,
  centerBackground: PropTypes.string,
};

export default RecursiveAnimation;
