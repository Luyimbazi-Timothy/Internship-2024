import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Upload(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="fw-semibold form-label">
        {label}
      </label>
      <Field
        type="file"
        id={name}
        name={name}
        {...rest}
        className="form-control form-control-sm"
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Upload;
