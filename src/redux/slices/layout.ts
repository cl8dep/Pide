import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Header {
  title: string;
  subtitle: string;
  image: string;
}

interface State {
  header?: Header;
}

const initialState: State = {};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<Header | undefined>) => {
      state.header = action.payload;
    },
  },
});

const actions = layoutSlice.actions;

export { actions };

export default layoutSlice.reducer;
