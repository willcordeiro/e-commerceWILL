import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/slider";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/products/products";
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
              <Product></Product>
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
