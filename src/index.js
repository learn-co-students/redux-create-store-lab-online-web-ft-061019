// write your createStore function here
/* tests: 
Write a function called createStore that takes in a reducer function as an argument.
The createStore function should return an object with two methods - getState, dispatch.
* `getState` should return the current state.
* `dispatch` should take in an action, update the state using the reducer, and call the render function.
*/

function createStore(reducer) {
  let state;
 
 function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state
  }

  return {
    dispatch,
    getState
  };

}



function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch
/*
Notice that in the provided render function, a variable named store is called. 
Define a variable named store and assign it to whatever is returned by the createStore
 function you've written when it is passed the candyReducer function.
Initialize your state using a dispatch call to the reducer.
*/

const store = createStore(candyReducer);
store.dispatch({type: '@@INIT'})