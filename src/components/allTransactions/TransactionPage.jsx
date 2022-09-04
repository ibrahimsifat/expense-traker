import React from "react";

import AllTransactions from "./AllTransactions";
import Pagination from "./Pagination";

const TransactionPage = () => {
  return (
    <div>
      <AllTransactions />
      <Pagination />
    </div>
  );
};

export default TransactionPage;
