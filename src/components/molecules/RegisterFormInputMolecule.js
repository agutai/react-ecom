import React from 'react'
import RegisterFormLabelAtom from '../atoms/Label/RegisterFormLabelAtom';
import RegisterFormInputAtom from '../atoms/Input/RegisterFormInputAtom';

const RegisterFormInputMolecule = ({
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
        <RegisterFormLabelAtom name={name} label={label}/>
        <RegisterFormInputAtom
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
export default RegisterFormInputMolecule;