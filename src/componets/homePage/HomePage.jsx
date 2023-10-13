import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteFormData } from "../../redux/slice";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const selector = useSelector((state) => state.formData.formData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(selector);
  return (
    <Container fluid p-3>
      <div className="d-flex justify-content-between m-2 p-3 text-white">
        <h1>Welcome to Homepage</h1>
        <Button
          onClick={() => navigate("/form")}
          className="py-2 px-5"
          style={{
            backgroundColor: "rgb(93 5 114)",
            borderRadius: "2rem",
            borderColor: "#423b3b",
          }}
        >
          Create Form
        </Button>
      </div>
      <Table striped bordered hover style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th></th>
          </tr>
        </thead>
        {selector &&
          selector.map((formdata, index) => (
            <tbody key={index}>
              <tr>
                <td></td>
                <td>{formdata.name}</td>
                <td>{formdata.email}</td>
                <td>{formdata.phone}</td>
                <td onClick={() => dispatch(deleteFormData(formdata.name))}>
                  Delete
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </Container>
  );
}
