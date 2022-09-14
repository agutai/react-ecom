import React from "react";
import classnames from "classnames";

const FormInputAtom = ({ type, name, value, onChange, placeholder, error }) => {
  return (
    <React.Fragment>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classnames("form-control", { "is-invalid": error })}
      />
      {error && (
        <div className="invalid-feedback alert alert-dnager">{error}</div>
      )}
    </React.Fragment>
  );
};
export default FormInputAtom;
