import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "./actions/itemsActions";
import * as pageActions from "./actions/pageActions";
import AddButton from "./components/AddButton";
import ClearButton from "./components/ClearButton";
import ItemsList from "./components/ItemsList";
import Price from "./components/Price";
import Pagination from "./components/Pagination";

const ITEMS_PER_PAGE = 5;

function App({ itemsActions, pageActions, items, page }) {
  const { addItem, removeItem, changeItem, clearItems } = itemsActions;
  const { setPage } = pageActions;
  const { number: currentPageNumber, currentItems } = page;
  useEffect(() => {
    setPage(currentPageNumber, ITEMS_PER_PAGE);
  }, [items, setPage, currentPageNumber]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-name">Корзина</div>
        <AddButton addItem={addItem} />
        <ClearButton clearItems={clearItems} />
      </header>
      <main className="App-content">
        <ItemsList
          items={currentItems}
          removeItem={removeItem}
          changeItem={changeItem}
        />
        <Price items={items} />
        <Pagination
          items={items}
          currentPageNumber={currentPageNumber}
          setPage={setPage}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        />
      </main>
      <footer className="App-footer">
        made by Kirill Skvortsov, 24.04.2019
      </footer>
    </div>
  );
}

const mapStateToProps = store => ({
  items: store.items,
  page: store.page
});

const mapDispatchToProps = dispatch => ({
  itemsActions: bindActionCreators(itemsActions, dispatch),
  pageActions: bindActionCreators(pageActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
