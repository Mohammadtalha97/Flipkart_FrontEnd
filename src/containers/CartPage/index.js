import "./style.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { addToCart, updateCart } from "../../redux/actions";
import CartItem from "./CartItem";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    dispatch(updateCart());
  }, []);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const onQuantityIncrement = (_id) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };
  const onQuantityDecrement = (_id) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card headerleft={"My Cart"} headerright={<div>Deliver To</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityIncrement={onQuantityIncrement}
              onQuantityDecrement={onQuantityDecrement}
            />
          ))}
        </Card>
        <Card
          headerleft="Price"
          style={{
            width: "500px",
          }}
        ></Card>
      </div>
    </Layout>
  );
};

export default CartPage;