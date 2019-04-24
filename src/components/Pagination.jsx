import React from "react";
import RCPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/ru_RU";
import "rc-pagination/assets/index.css";

export default function Pagination({
  items,
  currentPageNumber,
  setPage,
  ITEMS_PER_PAGE
}) {
  const totalItems = items.length;
  function onPageChange(page) {
    setPage(page, ITEMS_PER_PAGE);
  }
  return (
    <div>
      <RCPagination
        onChange={onPageChange}
        current={currentPageNumber}
        pageSize={ITEMS_PER_PAGE}
        total={totalItems}
        locale={localeInfo}
      />
    </div>
  );
}
