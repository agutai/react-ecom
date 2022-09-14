import React from 'react'
import PropTypes from 'prop-types'
import NavLinksMolecule from '../molecules/NavLinksMolecule';
import HeaderBrandLinkAtom from '../atoms/Links/HeaderBrandLinkAtom';
import HeaderNavToggleAtom from '../atoms/Button/HeaderNavToggleAtom';

const HeaderOrganism = (props) => {
  const {brand} = props;
  return (
    <nav className="navbar navbar-expand-lg  mb-1">
  <div className="container-fluid">
        <React.Fragment>
          <HeaderBrandLinkAtom
            classNameString="navbar-brand"
            toString="/"
            linkTextString={brand}
          />
        </React.Fragment>
        < HeaderNavToggleAtom/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      < NavLinksMolecule/>
    </div>
  </div>
</nav>
  )

}

HeaderOrganism.defaultProps = {
  brand: "FDM Group",
};

HeaderOrganism.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default HeaderOrganism;
