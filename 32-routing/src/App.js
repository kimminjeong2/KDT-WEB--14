import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./styles/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Pr1 from "./pages/Pr1";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setProducts(data.slice(0, 10));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="/products/student/:student" element={<Pr1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
