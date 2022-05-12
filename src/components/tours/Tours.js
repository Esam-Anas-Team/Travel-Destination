import "./Tours.css";
import { Link } from "react-router-dom";
import Tour from "./tour/Tour";
function Tours(props) {
  return (
    <div>
      {props.tourData.map((element) => {
        return (
          <Link to={`/city/${element.id}`}>
            <Tour dataKey={element} />
            <p>______________________________________________________________________________________________________________________________________________________________________</p>
          </Link>
        );
      })}
    </div>
  );
}
export default Tours;
