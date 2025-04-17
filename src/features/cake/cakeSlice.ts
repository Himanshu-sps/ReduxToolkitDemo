import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
  numOfCakes: number;
};
const initialState: InitialState = {
  numOfCakes: 10,
};

// This generates actions and reducers perform direct mutation on the state and uses immer under the hood
// ordered, reStocked is byDefault action name created by createSlice
const cakeSlice = createSlice({
  name: 'cake',
  initialState: initialState,
  reducers: {
    ordered: state => {
      state.numOfCakes--;
    },
    reStocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const {ordered, reStocked} = cakeSlice.actions;
