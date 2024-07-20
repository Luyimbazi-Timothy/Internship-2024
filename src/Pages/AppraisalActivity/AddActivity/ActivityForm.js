// src/components/AddActivityForm.js
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import validationSchema from "./Schema";
import Configs from "../../../commons/Configs";

function AddActivityForm() {
  const onSubmit = (values, onSubmitProps) => {
    const formData = {
      ...values,
      evidence: values.evidence.split(",").map((item) => item.trim()), // Assuming evidence is a comma-separated string
      date: new Date(values.date).toISOString(), // Ensure date is a string
    };
    onSubmit(formData);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={Configs.initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, onSubmitProps) => {
        const formData = {
          ...values,
          evidence: values.evidence.split(",").map((item) => item.trim()), // Convert evidence back to an array
          date: new Date(values.date).toISOString(), // Ensure date is a string
        };
        onSubmit(formData);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      }}
      validateOnChange={true}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          <div className="container-sm border">
            <div className="row g-3">
              <p></p>
              <p className="text-center fw-semibold label">APPRAISAL FORM</p>

              <div className="col-sm-6">
                <FormikControl
                  control="select"
                  label="Period"
                  name="period"
                  options={Configs.quarterDropdownOptions}
                />
              </div>

              <div className="col-sm-6">
                <FormikControl
                  control="select"
                  label="Perspective"
                  name="perspective"
                  options={Configs.perspectiveDropdownOptions}
                />
              </div>

              <div className="col-sm-6">
                <FormikControl
                  control="select"
                  label="Ssmarta Objectives"
                  name="ssMartaObjectives"
                  options={Configs.ssmartaObjectiveDropdownOptions}
                />
              </div>

              <div className="col-sm-6">
                <FormikControl
                  control="select"
                  label="Initiative"
                  name="initiative"
                  options={Configs.initiativeDropdownOptions}
                />
              </div>

              <div className="col-sm-6">
                <FormikControl
                  control="select"
                  label="Measurable Activities"
                  name="measurableActivities"
                  options={Configs.measurableActivityDropdownOptions}
                />
              </div>

              <div className="col-sm-6">
                <FormikControl control="date" label="Date" name="date" />
              </div>

              <div className="col-sm-12">
                <FormikControl
                  control="textarea"
                  label="Implementation"
                  name="implementations"
                />
              </div>

              <div className="col-sm-12">
                <FormikControl
                  control="unrequiredTextArea"
                  label="Comment"
                  name="comments"
                />
              </div>

              <div className="col-sm-6">
                <FormikControl
                  control="unrequiredInput"
                  type="text"
                  label="Stakeholders"
                  name="stakeholders"
                />
              </div>

              <div className="col-sm-6">
                <FormikControl
                  control="upload"
                  label="Evidence"
                  name="evidence"
                />
              </div>

              <div className="col-sm-12"></div>

              <div>
                <button
                  type="cancel"
                  disabled={formik.isSubmitting}
                  className="btn btn-danger btn-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                  className="btn btn-primary btn-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddActivityForm;
