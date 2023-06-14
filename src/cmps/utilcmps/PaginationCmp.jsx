import { useState } from "react";

export function PaginationCmp({ setRenderItems, arr, itemsPerPage }) {
  const [currPage, setCurrPage] = useState(1);
  const totalPages = parseInt(arr.length / itemsPerPage);

  const onNextBack = (num) => {
    let startIdx;
    if (currPage + num === 1) startIdx = 0;
    else if (num === 1) startIdx = currPage * itemsPerPage;
    else if (num === -1) startIdx = (currPage + 2 * num) * itemsPerPage;
    const lastIdx = startIdx + itemsPerPage;
    setRenderItems(arr.slice(startIdx, lastIdx));
    setCurrPage(currPage + num);
  };

  return (
    <div className="pagination-container">
      <button
        className="util-btn"
        disabled={currPage === 1}
        onClick={() => onNextBack(-1)}
      >
        Previous
      </button>
      <span>{currPage}</span>
      <button
        className="util-btn"
        disabled={currPage === totalPages}
        onClick={() => onNextBack(1)}
      >
        Next
      </button>
    </div>
  );
}
