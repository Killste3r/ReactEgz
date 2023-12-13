import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const navigateToDonorRegistration = () => {
    navigate("/donorregistration");
  };

  return (
    <>
      <header className="d-flex flex-row mb-2 position-absolute top-50 start-50 translate-middle">
        <div>
          <img
            className="pe-3 imageRotate img-fluid"
            src="src/assets/Picture1.png"
            alt="Card"
          />
        </div>
        <div className="AllighingText">
          <h1>Give Something that Means Something</h1>
          <p>
            Just one donor can provide lifesaving organs to up to eight people.
            One donor may also impact the lives of others with tissue donation
          </p>
          <button className="ms-2" onClick={navigateToDonorRegistration}>
            MAKE AN APPOINTMENT
          </button>
        </div>
      </header>
    </>
  );
};

export default MainPage;
