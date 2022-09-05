import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { typeChanged } from "../../features/transection/filterSlice";

const RadioFilter = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.filters);
  const handleTypeChanged = (type) => {
    dispatch(typeChanged(type));
  };
  return (
    <div class="flex items-center mr-4 ">
      <div
        class="flex items-center mr-4"
        onClick={() => handleTypeChanged("All")}
      >
        <input
          id="default-radio-0"
          type="radio"
          checked={type === "All"}
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-0"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          All
        </label>
      </div>
      <div
        class="flex items-center mr-4"
        onClick={() => handleTypeChanged("expense")}
      >
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Expense
        </label>
      </div>
      <div
        class="flex items-center "
        onClick={() => handleTypeChanged("income")}
      >
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-2"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Income
        </label>
      </div>
    </div>
  );
};

export default RadioFilter;
