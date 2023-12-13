import { useState } from "react";

const DonorRegistration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    bgroup: "",
    dbirth: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="donorRegistr position-absolute top-50 start-50 translate-middle">
      <h2>Register a decision to donate</h2>
      <p>
        Use this form to record a decision to donate some or all of YOUR ORGANS
        and tissue.
      </p>
      <p className="post">Fields marked * are mandatory.</p>
      <h5>About you</h5>
      <hr />

      <form onSubmit={handleSubmit}>
        <label htmlFor="gender">Gender</label>
        <br />
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={handleChange}
          required
        />
        <label htmlFor="male" className="me-3">
          Male
        </label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <br />

        <label htmlFor="fname">First Name</label>
        <br />
        <input
          type="text"
          name="fname"
          id="fname"
          required
          value={formData.fname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lname">Last Name</label>
        <br />
        <input
          type="text"
          name="lname"
          id="lname"
          required
          value={formData.lname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="bgroup">Blood Group</label>
        <br />
        <input
          type="text"
          name="bgroup"
          id="bgroup"
          required
          value={formData.bgroup}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="dbirth">Birth Date</label>
        <br />
        <input
          type="date"
          name="dbirth"
          id="dbirth"
          required
          value={formData.dbirth}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
export default DonorRegistration;
