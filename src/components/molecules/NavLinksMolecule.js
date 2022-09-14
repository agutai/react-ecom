import React, { Component } from 'react';
import HeaderLinkAtom from '../atoms/Links/HeaderLinkAtom';

class RegisterFormLinksMolecule extends Component {
  render() {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <HeaderLinkAtom 
          classNameString="nav-link active"
          ariaCurrentString="page"
          toString="/"
          iconClassNameString=""
          ariaHiddenString="true"
          linkTextString="Home"
        />
        </li>
        <li className="nav-item">
        <HeaderLinkAtom 
          classNameString="nav-link"
          ariaCurrentString=""
          toString="/register"
          iconClassNameString=""
          ariaHiddenString="true"
          linkTextString="Register"
        />
        </li>
        <li className="nav-item">
        <HeaderLinkAtom 
          classNameString="nav-link"
          ariaCurrentString=""
          toString="/Products"
          iconClassNameString=""
          ariaHiddenString="true"
          linkTextString="Products"
        />
        </li>
        <li className="nav-item" id="log">
        <HeaderLinkAtom 
          classNameString="nav-link"
          ariaCurrentString=""
          toString="/login"
          iconClassNameString=""
          ariaHiddenString="true"
          linkTextString="My Account"
        />
        </li>
        <li className="nav-item">
        <HeaderLinkAtom 
          classNameString="nav-link"
          ariaCurrentString="page"
          toString="/about"
          iconClassNameString=""
          ariaHiddenString="true"
          linkTextString="About"
        />
        </li>
      </ul>
    )
  }
}
export default RegisterFormLinksMolecule;