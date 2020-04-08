import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '.';

let renderCount = 0;
export const ReduxModule = () => {
  const c1 = useSelector<State>((s) => s.counter1);
  const dispatch = useDispatch();
  const increment1 = () => dispatch({ type: 'INCREMENT1' });
  const increment2 = () => dispatch({ type: 'INCREMENT2' });

  React.useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h4>only redux</h4>
      <div>render count: {renderCount}</div>
      <div>redux's count1: {c1}</div>
      <button onClick={increment1}>inc1</button>
      <button onClick={increment2}>inc2</button>
    </div>
  );
};
