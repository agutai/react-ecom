import React, { Component } from 'react';
import NavSearchInputAtom from '../atoms/Input/NavSearchInputAtom';
import NavSearchButtonAtom from '../atoms/Button/NavSearchButtonAtom';

class RegisterFormSearchMolecule extends Component {
  render() {
    return (
      <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '70px', marginTop: '40px'}}>
        <form className="d-flex" role="search">
          <NavSearchInputAtom />
          <NavSearchButtonAtom />
        </form>
      </div>
    )
  }
}
export default RegisterFormSearchMolecule;