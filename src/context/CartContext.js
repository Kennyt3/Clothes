import { createContext, useState, useEffect, useContext, useRef } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const fetchedCart = useRef(false);
  const [cart, setCart] = useState([]);

  const addToCart = (productItem) => {
    const existingIndex = cart.findIndex((item) => item.id === productItem.id);
    if (cart[existingIndex]?.size === productItem.size) {
      setCart((prev) => [
        ...prev.filter((item) => item.id !== productItem.id),
        {
          ...cart[existingIndex],
          quantity: cart[existingIndex].quantity + productItem.quantity,
        },
      ]);
    } else {
      setCart((prev) => [...prev, productItem]);
    }
  };

  useEffect(() => {
    if (!fetchedCart.current) {
      const cachedCart = sessionStorage.getItem("cart");
      if (cachedCart) {
        setCart(JSON.parse(cachedCart));
      }
      fetchedCart.current = true;
    }
  }, []);

  useEffect(() => {
    if (fetchedCart.current) {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return <Provider value={{ addToCart }}>{children}</Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
