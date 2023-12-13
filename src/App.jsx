import MainPage from "./Pages/MainPage";
import DonorRegistration from "./Pages/DonorRegistration";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./NavBar/NavigationBar";
import DonorList from "./Donors/DonorList";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/donorregistration" element={<DonorRegistration />} />
        <Route path="/donorinformation" element={<DonorList />} />
      </Routes>
    </>
  );
}

export default App;
