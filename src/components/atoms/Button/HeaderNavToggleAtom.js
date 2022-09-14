import React, { Component } from 'react'

class HeaderNavToggleAtom extends Component {
  render() {
    return (
      <div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    )
  }
}
export default HeaderNavToggleAtom;