import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { ReduxModule } from './redux';
import { ReduxWithReselectModule } from './reselect';

export interface State {
  counter1: number;
  counter2: number;
}

const counter = (state = { counter1: 0, counter2: 0 }, action: any): State => {
  switch (action.type) {
    case 'INCREMENT1':
      return {
        ...state,
        counter1: state.counter1 + 1,
      };

    case 'INCREMENT2':
      return {
        ...state,
        counter2: state.counter2 + 1,
      };

    default:
      return state;
  }
};
const store = createStore(counter);
const StateViewer = () => {
  const state = useSelector((s) => s);
  return <pre>state: {JSON.stringify(state, null, '  ')}</pre>;
};
const C = () => {
  return (
    <div>
      <StateViewer></StateViewer>
      <ReduxModule></ReduxModule>
      <ReduxWithReselectModule></ReduxWithReselectModule>
    </div>
  );
};
export const ReduxSample = () => {
  return (
    <Provider store={store}>
      <C />
    </Provider>
  );
};
