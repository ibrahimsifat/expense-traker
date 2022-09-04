import React from "react";

const RadioFilter = () => {
  return (
    <div class="flex items-center mr-4 ">
      <div class="flex items-center mr-4">
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
      <div class="flex items-center ">
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