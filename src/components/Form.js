import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../features/transection/transactionSlice";

export default function Form() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.transaction);
  const resetForm = () => {
    setName("");
    setType("");
    setAmount("");
  };
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        type,
        name,
        amount: Number(amount),
      })
    );
    resetForm();
  };
  return (
    <div className="form">
      <h3>Add new transaction</h3>
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="transaction_name"
            placeholder="My Salary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="transaction_type"
              checked={type === "income"}
              required
              onChange={() => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="transaction_type"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="300"
            name="transaction_amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} className="btn" type="submit">
          Add Transaction
        </button>
        {!isLoading && isError && (
          <p className="error">There was and error occourd</p>
        )}
      </form>

      <button className="btn cancel_edit">Cancel Edit</button>
    </div>
  );
}
