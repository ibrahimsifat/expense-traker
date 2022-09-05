import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTransaction,
  editInActive,
} from "../../features/transection/transactionSlice";

export default function Form() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.transaction);

  const { editing } = useSelector((state) => state.transaction) || {};

  // listen for edit mode active
  useEffect(() => {
    const { id, name, amount, type } = editing || {};
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      resetForm();
    }
  }, [editing]);

  const resetForm = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: editing?.id,
        data: {
          name,
          amount,
          type,
        },
      })
    );
    setEditMode(false);
    resetForm();
  };
  const cancelEditMode = () => {
    resetForm();
    setEditMode(false);
    dispatch(editInActive());
  };
  return (
    <div className="form">
      <h3>Update Transaction</h3>
      <form onSubmit={handleUpdate}>
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

        <button
          disabled={isLoading}
          className="btn"
          type="submit"
          style={{ backgroundColor: "#4338ca" }}
        >
          Update Transaction
        </button>
        {!isLoading && isError && (
          <p className="error">There was and error occourd</p>
        )}
      </form>
      {editMode && (
        <button onClick={cancelEditMode} className="btn cancel_edit">
          Cancel Update
        </button>
      )}
    </div>
  );
}
