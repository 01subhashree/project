/* eslint-disable react-hooks/rules-of-hooks */
import { useFormik } from "formik";
import { Form, Button, Container, Image } from "react-bootstrap";
import { formSchema } from "../../schema";
import "./FormPage.css";
import { useDispatch } from "react-redux";
import { addFormData } from "../../redux/slice";
import { Link } from "react-router-dom";
import logo from "../../assets/—Pngtree—hand drawn black line drawing_5062114.png";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
};

export default function FormPage() {
  const dispatch = useDispatch();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        dispatch(addFormData(values));
        action.resetForm();
      },
    });

  return (
    <Container
      fluid
      className="d-flex  align-items-center container_div justify-content-between p-2 p-md-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center text-center text-white formContain_div1">
        <Image src={logo} width={90} />
        <h2 className="formDiv_text">Welcome</h2>
        <h4 className="formDiv_text">to formpage</h4>
        <p className="formDiv_text">fill the form carefully !!!</p>
        <Link to={"/"} className="form_Link">
          Go back to homepage
        </Link>
      </div>
      <div className="form_container">
        <Form
          onSubmit={handleSubmit}
          className="ms-lg-5"
          style={{ width: "100%", height: "100%" }}
        >
          <Form.Group className="d-flex justify-content-between flex-column flex-lg-row">
            <div className="formGroup_div">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                className="mb-1"
                type="name"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>
            <div className="formGroup_div">
              <Form.Label className="fw-bold" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control
                className="mb-1"
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
          </Form.Group>

          <Form.Group className=" d-flex justify-content-between flex-column flex-lg-row">
            <div className="formGroup_div">
              <Form.Label className="fw-bold">Phone Number</Form.Label>
              <Form.Control
                className="mb-1"
                type="phone"
                autoComplete="off"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <p className="form-error">{errors.phone}</p>
              ) : null}
            </div>
            <div className="formGroup_div">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                className="mb-1"
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
          </Form.Group>
          <Form.Group className="custom-lg-width">
            <Form.Label className="fw-bold">Confirm Password</Form.Label>
            <Form.Control
              className="mb-1"
              type="password"
              autoComplete="off"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null}
          </Form.Group>
          <Form.Group className="d-flex justify-content-end">
            <Button
              className="input-button"
              type="submit"
              style={{
                backgroundColor: "rgb(29 19 244)",
                borderRadius: "2rem",
              }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}
