import React, { useState } from "react";

export default function Item({ item, removeItem, changeItem }) {
  const { id, price, name } = item;
  const [isEdit, setIsEdit] = useState(false);
  const [priceInput, setPriceInput] = useState(price);
  const [nameInput, setNameInput] = useState(name);

  function handlePriceChange(e) {
    setPriceInput(e.target.value);
  }

  function handleNameChange(e) {
    setNameInput(e.target.value);
  }

  if (isEdit) {
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input value={nameInput} onChange={handleNameChange} />
        </td>
        <td>
          <input value={priceInput} onChange={handlePriceChange} />
        </td>
        <td>
          <button
            onClick={() => {
              changeItem({ id, price: priceInput, name: nameInput });
              setIsEdit(!isEdit);
            }}
          >
            сохранить
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            отмена
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button
            onClick={() => {
              removeItem(id);
            }}
          >
            удалить
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            изменить
          </button>
        </td>
      </tr>
    );
  }
}
