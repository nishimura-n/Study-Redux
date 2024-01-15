import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CartCotainer from "./components/CartCotainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatetTotals } from "./features/cart/CartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculatetTotals());
  }, [cartItems]);

  return (
    <main>
      <Modal />
      <Navbar />
      <CartCotainer />
    </main>
  );
}

export default App;
