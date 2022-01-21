import  HeaderHome from "../components/HeaderHome/HeaderHome";
import '../css/basic.css'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <HeaderHome />
      <div className="Planetas">
      <Link to="/jupiter" className="Link">
        <div className="Jupiter">
          <img className="JupiterIcon" src="./images/Jupiter.png" alt="Jupiter" />
        </div>
      </Link>
      <Link to="earth" className="Link">
        <div className="Terra">
          <img  className="TerraIcon" src="./images/Terra.png" alt="Terra" />
        </div>
      </Link>
      <Link to="saturn" className="Link">
        <div className="Saturno">
          <img className="SaturnoIcon" src="./images/Saturno.png" alt="Saturn" />
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Home;
