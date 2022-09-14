import React, { Component } from 'react'
import BannerImageAtom from '../atoms/Image/BannerImageAtom';
import BannerTitleTextAtom from '../atoms/Text/BannerTitleTextAtom';
import BannerSecondaryTextAtom from '../atoms/Text/BannerSecondaryTextAtom';

class HeaderBannerMolecule extends Component {
  render() {
    return (
      <div className="bm mb-9">
        < BannerImageAtom/>
        < BannerTitleTextAtom/>
        < BannerSecondaryTextAtom/>
      </div>
    )
  }
}
export default HeaderBannerMolecule;