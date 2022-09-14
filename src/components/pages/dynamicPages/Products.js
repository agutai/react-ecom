import React, { Component} from 'react';
import Product from './Product';

class Products extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
      const response = await fetch('api/v1/ecommerce/item',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}
      );
      const body = await response.json();
      this.setState({products: body}); 
    }

  render()  {
    const {products} = this.state;

    return (
        <div style={{marginBottom: "40px"}}>

<div className="bd-example">
  <div className="btn-group">
    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="/">Action</a>
      <a className="dropdown-item" href="/">Another action</a>
      <a className="dropdown-item" href="/">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/">Separated link</a>
    </div>
  </div>
  <div className="btn-group">
    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="/">Action</a>
      <a className="dropdown-item" href="/">Another action</a>
      <a className="dropdown-item" href="/">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/">Separated link</a>
    </div>
  </div>
  <div className="btn-group">
    <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="/">Action</a>
      <a className="dropdown-item" href="/">Another action</a>
      <a className="dropdown-item" href="/">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/">Separated link</a>
    </div>
  </div>
  <div className="btn-group">
    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="/">Action</a>
      <a className="dropdown-item" href="/">Another action</a>
      <a className="dropdown-item" href="/">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/">Separated link</a>
    </div>
  </div>
  <div className="btn-group">
    <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="/">Action</a>
      <a className="dropdown-item" href="/">Another action</a>
      <a className="dropdown-item" href="/">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/">Separated link</a>
    </div>
  </div>
  <div className="btn-group">
    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="/">Action</a>
      <a className="dropdown-item" href="/">Another action</a>
      <a className="dropdown-item" href="/">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="/">Separated link</a>
    </div>
  </div>
</div>

        <h1 style={{textAlign: "center", marginBottom: "40px"}}>Product List</h1>
        
        {products.map((product) => (
            <Product key={product.id} product={product}/>
        ))}
        </div>
    );
}
}
export default Products