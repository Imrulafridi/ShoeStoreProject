import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />}>
            <Route path="/product/:id" element={<ProductItem />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
