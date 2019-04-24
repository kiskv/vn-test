import React from "react";

export default function Price({ items }) {
  const sum = items.reduce((accumulator, currentItem) => {
    return accumulator + +currentItem.price;
  }, 0);
  const count = items.length;
  return (
    <div className="price">{`В корзине ${count} тортов на ${sum} рублей`}</div>
  );
}
