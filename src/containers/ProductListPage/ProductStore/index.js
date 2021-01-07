import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductsBySlug } from "../../../redux/actions";
import { generatePublicURL } from "../../../urlConfig";
import { Link } from "react-router-dom";

import Card from "../../../components/UI/Card";

const ProductStore = (props) => {
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
    <>
      {Object.keys(product.productsByPrice).map((key, index, array) => {
        return (
          <Card
            headerleft={`${props.match.params.slug} Mobile Under ${priceRange[key]}`}
            headerright={<button>View All</button>}
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  style={{
                    display: "block",
                  }}
                  className="productContainer"
                >
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
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
