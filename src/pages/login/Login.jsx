import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Card, Alert, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DisplaySidebarContext } from "../../components/contextHook/useDisplayContext";
import useAuthService from "../../services/auth/AuthService";

function Login() {
  const { setDisplaySidebarPanel } = useContext(DisplaySidebarContext);
  const { login } = useAuthService();

  useEffect(() => {
    setDisplaySidebarPanel(false);
  }, [setDisplaySidebarPanel]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const { username, password } = values;
      const error = await login(username, password);
      if (error) {
        setFieldError("general", error);
      }
      setSubmitting(false);
    },
  });

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="w-100 mt-lg-5">
        <Col sm={12} md={6} lg={4} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {formik.errors.general && (
                <Alert variant="danger">{formik.errors.general}</Alert>
              )}
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className={`form-control ${
                      formik.touched.username && formik.errors.username
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="invalid-feedback">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`form-control ${
                      formik.touched.password && formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={formik.isSubmitting}
                >
                  Login
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
