import React from 'react';
import { connect } from 'react-redux';
import { State } from '.';
import { createSelector } from 'reselect';

let renderCount = 0;
const Component = (p: { counter: number; increment1: () => void; increment2: () => void }) => {
  React.useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h4>with reselect</h4>
      <div>render count: {renderCount}</div>
      <div>redux's count1: {p.counter}</div>
      <button onClick={p.increment1}>inc1</button>
      <button onClick={p.increment2}>inc2</button>
    </div>
  );
};

const getCounter1 = createSelector([(state: State) => state.counter1], (counter) => ({
  counter,
}));
export const ReduxWithReselectModule = connect(
  (state: State) => getCounter1(state),
  (dispatch) => ({
    increment1: () => dispatch({ type: 'INCREMENT1' }),
    increment2: () => dispatch({ type: 'INCREMENT2' }),
  }),
)(Component);
