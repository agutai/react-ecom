import React from "react";

const FormLabelAtom = ({ name, label }) => {
  return <label htmlFor={name}>{label}</label>;
};
export default FormLabelAtom;
