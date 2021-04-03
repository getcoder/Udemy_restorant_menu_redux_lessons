import React from "react";
import { connect } from "react-redux";
import { removeFromCart, incItemCount, decItemCount } from "../../actions";

import "./cart-table.scss";

const CartTable = ({ items, removeFromCart, incItemCount, decItemCount }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id, amount } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div className="cart__item-count">
                <button
                  onClick={() => decItemCount(id)}
                  className="cart__btn cart__btn-dec"
                >
                  -
                </button>
                <span>{amount}</span>
                <button
                  onClick={() => incItemCount(id)}
                  className="cart__btn cart__btn-inc"
                >
                  +
                </button>
              </div>
              <div onClick={() => removeFromCart(id)} className="cart__close">
                &times;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = ({ items, count }) => {
  return {
    items,
    count,
  };
};

const mapDispatchToProps = {
  removeFromCart,
  incItemCount,
  decItemCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
