import Home from "./components/Home";
import Register from "./components/Register";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;

//1. function definition App
//2. Props definition (optional)
//3. JS Logic
//4. returning JSX (JSX is html like structure which will include variables with {})
//5. Exporting component
