import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container" id="navbar">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to={"./"}>
              {" "}
              <i class="fa-solid fa-house-chimney-window"></i> Home{" "}
            </Link>{" "}
            &nbsp;
          </li>
          <li className="nav-item">
            <Link to={"./faculties"}>
              {" "}
              <i class="fa-solid fa-user"></i> All Faculty{" "}
            </Link>{" "}
            &nbsp;
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
