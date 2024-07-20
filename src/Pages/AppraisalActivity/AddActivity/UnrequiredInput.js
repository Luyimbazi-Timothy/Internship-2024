import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function UnrequiredInput(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className=" fw-semibold form-label">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="form-control form-control-sm"
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default UnrequiredInput;
