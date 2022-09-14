import React from 'react';

function PageNotFound() {
  return (
    <div className='alert-warning'>
        <h1 style={{textAlign: "center", marginBottom: "20px"}} className="display-4">404 Page Not Found</h1>
        <p style={{textAlign: "center", marginBottom: "40px"}} className="lead">Sorry, Page does not exist</p>
    </div>
  )
}
export default PageNotFound;