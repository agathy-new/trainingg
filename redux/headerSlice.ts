import { createSlice } from "@reduxjs/toolkit";
import { headerData } from "@/data/headerData";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    data: headerData,
  },
  reducers: {},
});

export default headerSlice.reducer;
