import { useEffect, useState } from "react";
import axios from "axios";
import DonorInfo from "../Pages/DonorInfo";

const DonorList = () => {
  const [listofDonars, setListOfDonors] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");

  //fetch form site
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setListOfDonors(response.data.users);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div data-testid="post-loading">Data is loading, please wait....</div>
    );
  }

  //Filter
  const handleBloodGroupChange = (e) => {
    setSelectedBloodGroup(e.target.value);
  };
  const filteredDonors =
    selectedBloodGroup === "All"
      ? listofDonars
      : listofDonars.filter((donor) => donor.bloodGroup === selectedBloodGroup);
  // const handleDelete = (id) => {
  //   axios
  //     .delete(`https://dummyjson.com/users/$[id]`)
  //     .then((response) => {
  //       const updateDonors = listofDonars.filter((donor) => donor.id !== id);
  //       donorFunct(updateDonors);
  //     })
  //     .cath((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <div className="mt-5">
        <select value={selectedBloodGroup} onChange={handleBloodGroupChange}>
          <option value="All">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="AB−">AB-</option>
          <option value="A−">A-</option>
          <option value="O−">O-</option>
          <option value="O+">O+</option>
          <option value="B+">B+</option>
          <option value="B−">B-</option>
        </select>
      </div>
      <div className="row">
        {filteredDonors.map((donor) => (
          <div key={donor.id} className="col-md-4 mb-3">
            <DonorInfo
              key={donor.id}
              fname={donor.firstName}
              lname={donor.lastName}
              image={donor.image}
              gender={donor.gender}
              age={donor.age}
              bloodGroup={donor.bloodGroup}
              date={donor.birthDate}
              // onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DonorList;
