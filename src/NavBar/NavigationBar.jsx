import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar
        className="bg-body-tertiary justify-content-start"
        bg="primary"
        expand="lg"
        fixed="top"
        data-bs-theme="dark"
      >
        <div>
          <Link to="/">
            <button>Home Page</button>
          </Link>
        </div>
        <div>
          <Link to="/donorregistration">
            <button>Donor Registration</button>
          </Link>
        </div>
        <div>
          <Link to="/donorinformation">
            <button>Donor Information</button>
          </Link>
        </div>
      </Navbar>
    </Navbar>
  );
}

export default NavigationBar;
