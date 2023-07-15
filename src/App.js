import { Routes,Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About"
import Contact from "./Component/Pages/Contact"
import Product from "./Component/Pages/Product";
import Counter from "./Component/Pages/Counter";
import Register from "./Component/Pages/Register";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      
    </>
  );
}

export default App;
