import React, { useState } from "react";
import Product1 from "../../../assets/images/image-product-1.jpg";
import UseCountStock from "../../../hooks/useCountStock";
import IconCart from "../icons/IconCart";

const ACTION = {
  SUMAR: "SUMAR",
  RESTAR: "RESTAR",
};

const ViewProduct = () => {
  const [count, setCount] = useState(0);

  const handleCount = (action) => {
    const auxCount = count;

    console.log(count);
    const a = UseCountStock(action, auxCount);
    setCount(a);
  };

  return (
    <section>
      <img src={Product1} alt="product" />
      <div>
        <h4 className="title-company">SNEAKER COMPANY</h4>
        <h2 className="title-product">Fall Limited Edition Sneakers</h2>
        <p className="text-inf">
          These low-profile sneakers are you perfect casual wear companion.
          Featuring a durable rubber outer sole, they´ll withstand everything
          the weather can offer.
        </p>
        <div className="m-price-product">
          <div className="m-price-product--now">
            $125.00 <span className="discount">50%</span>
          </div>
          <div className="m-price-product--previous">$250.00</div>
        </div>
      </div>
      <div>
        <div className="m-boxcount">
          <button
            className="a-btn a-btn--count"
            onClick={() => handleCount(ACTION.RESTAR)}
          >
            -
          </button>
          {count}
          <button
            className="a-btn a-btn--count"
            onClick={() => handleCount(ACTION.SUMAR)}
          >
            +
          </button>
        </div>
        <button className="a-btn a-btn--block a-btn--action">
          <IconCart fill={"white"} /> Add to cart
        </button>
      </div>
    </section>
  );
};

export default ViewProduct;
