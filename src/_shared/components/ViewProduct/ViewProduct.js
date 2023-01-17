import React, { useState } from "react";
import { useCount as UseCount } from "../../../hooks/useCount";
import IconCart from "../icons/IconCart";
import IconNext from "../icons/IconNext";
import IconPrevious from "../icons/IconPrevious";

const arrayImages = [
  "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
  "https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg",
];

const ACTION = {
  SUMAR: "SUMAR",
  RESTAR: "RESTAR",
};

const ViewProduct = () => {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(0);

  const handleCount = (action) => {
    const auxCount = count;

    setCount(UseCount(action, auxCount));
  };

  const handleChangeImage = (action) => {
    const auxImage = image;
    setImage(UseCount(action, auxImage, arrayImages.length - 1));
  };

  return (
    <div className="g-productpage">
      <section className="m-product">
        <img src={arrayImages[image]} alt="product" />

        <div className="m-product--arrows">
          <div onClick={() => handleChangeImage(ACTION.RESTAR)}>
            <IconPrevious />
          </div>
          <div onClick={() => handleChangeImage(ACTION.SUMAR)}>
            <IconNext />
          </div>
        </div>
      </section>
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
        <div className="m-carcount">
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
      </div>
    </div>
  );
};

export default ViewProduct;
