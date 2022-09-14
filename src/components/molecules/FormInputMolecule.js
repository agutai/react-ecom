import React from "react";
import FormLabelAtom from "../atoms/Label/FormLabelAtom";
import FormInputAtom from "../atoms/Input/FormInputAtom";

const FormInputMolecule = ({
  name,
  label,
  type,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <React.Fragment>
      <FormLabelAtom name={name} label={label} />
      <FormInputAtom
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
    </React.Fragment>
  );
};
export default FormInputMolecule;
