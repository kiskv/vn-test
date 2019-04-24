import React from "react";

export default function AddButton({ addItem }) {
  return (
    <button className="App-button" onClick={addItem}>
      Добавить торт
    </button>
  );
}
