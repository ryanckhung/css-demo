import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavMenuRowArrow = (props) => {
  return (
    <div>
      <div className={props.showSubMenu ? "arrow-direction arrow-up" : "arrow-direction arrow-down"}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>

      <style jsx>{`
        .arrow-direction {
          transition: transform 0.2s;
        }
        .arrow-up {
          transform: rotate(0deg);
        }
        .arrow-down {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default NavMenuRowArrow;
