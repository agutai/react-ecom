import PropTypes from "prop-types";
import React from "react";
import RegisterFormLabelAtom from "../atoms/Label/RegisterFormLabelAtom";
import RegisterFormInputAtom from "../atoms/Input/RegisterFormInputAtom";

const RegisterFormInputMolecule = ({
  name,
  label,
  type,
  value,
  placeholder,
  onChange,
  error,
  id,
}) => {
  return (
    <div>
      <RegisterFormLabelAtom name={name} label={label} />
      <RegisterFormInputAtom
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
    </div>
  );
};

RegisterFormInputMolecule.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

RegisterFormInputMolecule.defaultProps = {
  type: "text",
};

export default RegisterFormInputMolecule;
