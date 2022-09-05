import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transection/transactionSlice";
import Transaction from "./Transaction";
import UpdateForm from "./UpdateForm";

export default function AllTransactions() {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );
  const { editing } = useSelector((state) => state.transaction) || {};

  // listen for edit mode active
  useEffect(() => {
    const { id } = editing || {};
    if (id) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, [editing]);

  const { pageNo, type, search } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchTransactions({ pageNo, type, search }));
  }, [dispatch, pageNo, type, search]);

  const handleShowForm = () => {
    setShowForm(true);
  };
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
      {showForm && <UpdateForm />}
      <p className="second_heading text-2xl font-bold">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
