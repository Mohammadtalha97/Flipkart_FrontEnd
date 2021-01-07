import "./style.css";

import React, { useState } from "react";

import { generatePublicURL } from "../../../urlConfig";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);
  const { _id, name, price, img } = props.cartItem;

  const onQuantityInc = () => {
    setQty(qty + 1);
    props.onQuantityIncrement(_id, qty + 1);
  };

  const onQuantityDec = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDecrement(_id, qty - 1);
  };

  return (
    <div className="cartItemContainer">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={generatePublicURL(img)} alt={""} />
        </div>
        <div className="cartItemDetails">
          <div>
            <p>{name}</p>
            <p>Rs. {price}</p>
          </div>
          <div>Delivery in 3 - 5 days</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "5px 0",
        }}
      >
        {/* quantity control */}
        <div className="quantityControl">
          <button style={{ outline: "none" }} onClick={onQuantityDec}>
            -
          </button>
          <input value={qty} readOnly />
          <button style={{ outline: "none" }} onClick={onQuantityInc}>
            +
          </button>
        </div>
        <button className="cartActionBtn">save for later</button>
        <button className="cartActionBtn">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

/*
- Object.keys(object) it will created an array of keys so that we can loop through them
- in map( (key,index) => so to display item we use objectname[key] )

*/
