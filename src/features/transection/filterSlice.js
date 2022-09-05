const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  income: [],
  expense: [],
  search: "",
  pageNo: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    pageNoChanged: (state, action) => {
      state.pageNo = action.payload;
    },
    authorChanged: (state, action) => {
      state.author = action.payload;
    },
    resetInitialState: (state, action) => {
      state.tags = [];
      state.search = "";
      state.pageNo = 1;
      state.author = "";
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  pageNoChanged,
  authorChanged,
  resetInitialState,
} = filterSlice.actions;
