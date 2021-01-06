import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";

import Card from "../../../components/UI/Card";
import getParams from "../../../helpers/getParams";
import { getProductPage } from "../../../redux/actions";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = { params };
    //payload like --> {cid: "5fe812ccfab1994ce4ddfcd4", type: "page/"}
    dispatch(getProductPage(payload));
  }, []);
  return (
    <div style={{ margin: "0 10px" }}>
      <h1>{page.title}</h1>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              key={index}
              style={{ display: "block" }}
              href={banner.navigateTo}
            >
              <img src={banner.img} alt="" />
            </a>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
        }}
      >
        {page.products &&
          page.products.map((p, index) => {
            return (
              <Card
                key={index}
                style={{ width: "400px", height: "200px", margin: "5px" }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={p.img}
                  alt=""
                />
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
