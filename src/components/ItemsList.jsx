import React from "react";
import Item from "./Item";

export default function ItemsList({ items, removeItem, changeItem }) {
  const itemsList = items.map(item => {
    return (
      <Item
        key={item.id}
        item={item}
        removeItem={removeItem}
        changeItem={changeItem}
      />
    );
  });
  return items.length === 0 ? (
    "пусто"
  ) : (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th colSpan="2">Действия</th>
        </tr>
      </thead>
      <tbody>{itemsList}</tbody>
    </table>
  );
}
