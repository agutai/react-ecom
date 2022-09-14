import "./App.css";
import AddUser from "./components/pages/dynamicPages/AddUser";
import HeaderOrganism from './components/organisms/HeaderOrganism';
import ProductsButtonAtom from "./components/atoms/Button/ProductsButtonAtom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from './components/pages/staticPages/About';
import PageNotFound from './components/pages/staticPages/PageNotFound';
import BannerOrganism from "./components/organisms/BannerOrganism";
import NavSearchMolecule from "./components/molecules/NavSearchMolecule";
import Products from "./components/pages/dynamicPages/Products";
import Item from "./components/pages/dynamicPages/Item";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Report from "./components/pages/dynamicPages/Report";
import OrderItem from "./components/pages/dynamicPages/OrderItem";
import React from 'react';

function App() {
//DO NOT REMOVE THIS, DONT LISTEN TO THE CONSOLE
  function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }

  return (
    <Router>
      <div className="container">
      <HeaderOrganism brand="LJAB Clothing" />
      <NavSearchMolecule />
      <BannerOrganism />
      <Routes>
        <Route exact path="/" element={<ProductsButtonAtom  /> } />
        <Route exact path="/register" element={<AddUser /> } />
        <Route exact path="/about" element={<About /> } />
        <Route exact path="/report" element={<Report /> } />
        <Route exact path="/order" element={<OrderItem /> } />
        <Route exact path="/login" element={<Login setToken={setToken} />} />{" "}
        <Route exact path="/dashboard" element={<Dashboard /> } />
        <Route exact path="/Products" element={<Products /> } />
        <Route path="/Item/:type" element={<Item /> } />
        <Route path="*" element={<PageNotFound /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
