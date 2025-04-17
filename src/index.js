const store = require('./app/store').default;
const cakeActions = require('./features/cake/cakeSlice').default.cakeActions;
const icecreamActions =
  require('./features/icecream/iceCreamSlice').iceCreamActions;

const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated state =>', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.reStocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.reStocked(3));

//unsubscribe();
