import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transection/transactionSlice";
import Transaction from "../Transactions/Transaction";

export default function AllTransactions() {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );
  const { pageNo, type, search } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchTransactions({ pageNo, type, search }));
  }, [dispatch, pageNo, type, search]);

  // dicide what to render
  let content = null;
  if (isLoading) content = <p>Loading....</p>;
  if (!isLoading && isError)
    content = <p className="error">There was an error accourd</p>;
  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  }
  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>Transactions not found</p>;
  }
  return (
    <>
      <p className="second_heading text-2xl font-bold">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
