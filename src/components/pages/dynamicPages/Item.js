import React, { Component} from 'react';
import {Link} from "react-router-dom";
import Product from './Product';


class Item extends Component {
  state = {
    products: [
        {
            id: "1",
            title: "Product",
            price: "£1.00",
            colour: "Blue",
            seller: "Rudy222",
            buyer: "Finn94",
        },
        {
            id: "2",
            title: "Product",
            price: "£1.00",
            colour: "Red",
            seller: "Rudy222",
            buyer: "Finn94",
        },
        {
            id: "3",
            title: "Product",
            price: "£1.00",
            colour: "Yellow",
            seller: "Rudy222",
            buyer: "Finn94",
        },
        {
            id: "4",
            title: "Product",
            price: "£1.00",
            colour: "Green",
            seller: "Rudy222",
            buyer: "Finn94",
        },
    ],
};
  render() {
  const idUrl = window.location.pathname;
  const result = idUrl.split(/[/]+/);

  const { products } = this.state;
  const idAsString = result[2].toString();
  const targetItem = products.filter(product => product.id === idAsString);

    return (
      <div className='card-body'>
      <h1>{"Item " + idAsString}</h1>

      <div style={{marginBottom: "40px"}}>
        {targetItem.map((product) => (
            <Product key={product.id} product={product}/>
        ))}
        </div>

      <Link to={"/Products"}>Back to Product List</Link>
    </div>
    )
  }
}
export default Item;