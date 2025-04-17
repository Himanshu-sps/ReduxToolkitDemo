import {ordered as cakeOrdered} from '../cake/cakeSlice';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  numOfIcecream: 10,
};

// This generates actions and reducers perform direct mutation on the state and uses immer under the hood
// ordered, reStocked is byDefault action name created by createSlice like "icecream/ordered" as type var
// extra reducers is responsible for listening other events
const iceCreamSlice = createSlice({
  name: 'icecream',
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream--;
    },
    reStocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(cakeOrdered, (state, action) => {
      state.numOfIcecream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const {ordered, reStocked} = iceCreamSlice.actions;
