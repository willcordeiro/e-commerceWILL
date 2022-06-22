import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/slider";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/products/products";
import ProductsList from "./components/productsList/productsList";
import Title from "./components/title/title";
function App() {
  return (
    <>
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Navbar></Navbar>
              <Slider></Slider>
              <Title>TOP CLOTHES</Title>
              <Product></Product>
              <Title>HARDWARE</Title>
              <ProductsList></ProductsList>
            </div>
          )}
        />

        <Route
          path="/login"
          exact
          render={() => (
            <div>
              <Login></Login>
            </div>
          )}
        />
      </Router>
    </>
  );
}

export default App;
