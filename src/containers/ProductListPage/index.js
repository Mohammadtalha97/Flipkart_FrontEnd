import "./style.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout";
import { getProductsBySlug } from "../../redux/actions";
import { generatePublicURL } from "../../urlConfig";

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);

  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <Layout>
      {/* for using map function on object we have to use Object.keys  */}
      {Object.keys(product.productsByPrice).map((key, index, array) => {
        return (
          <div className="cart">
            <div className="cardHeader">
              <div>
                {props.match.params.slug} Mobile Under {priceRange[key]}
              </div>
              <button>View All</button>
            </div>
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <div className="productContainer">
                  <div className="productImgConatainer">
                    <img
                      src={generatePublicURL(product.productPictures[0].img)}
                      alt="prodimg"
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <div>
                      <span>4.3</span>&nbsp;
                      <span>3353</span>
                    </div>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default ProductListPage;
