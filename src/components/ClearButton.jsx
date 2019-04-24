import React from "react";

export default function AddButton({ clearItems }) {
  return (
    <button className="App-button clear-button" onClick={clearItems}>
      Очистить корзину
    </button>
  );
}
