import svg from "../../assets/404.svg";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="cont-404">
      <img src={svg} alt="svg" />
      <Link to={"/"} style={linkCss}>
        Back to Home
      </Link>
    </div>
  );
}

const linkCss = {
  fontFamily: "Autour One, sans-serif",
  position: "absolute",
  right: "3rem",
  top: "3rem",
  fontSize: "1rem",
  textDecoration: "none",
  fontWeight: "bold",
  color: "#fff",
};
