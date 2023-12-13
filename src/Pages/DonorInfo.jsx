import { Card } from "react-bootstrap";

const DonorInfo = ({ id,image, fname, lname, age, bloodGroup, date, gender, onDelete }) => {

  const handleDelete=()=>{
    onDelete(id);
  }
  return (
    <>
      <Card style={{ width: "20rem" }} className=" mx-2 my-2">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {fname} {lname}
          </Card.Title>
          <Card.Text> Birth Date: {date}</Card.Text>
          <Card.Text> age: {age}</Card.Text>
          <Card.Text>Blood Group: {bloodGroup}</Card.Text>
          <Card.Text>Gender: {gender}</Card.Text>
          <button onClick={handleDelete}>Delete donor</button>
        </Card.Body>
      </Card>
    </>
  );
};
export default DonorInfo;
