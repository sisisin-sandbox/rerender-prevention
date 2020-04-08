import React from 'react';
import {
  createModule,
  createSelector,
  useSelector,
  useActions,
  DefaultTypelessProvider,
} from 'typeless';

interface State {
  counter1: number;
  counter2: number;
}
const [useModule, Actions, getState] = createModule(Symbol('module'))
  .withActions({ increment1: null, increment2: null })
  .withState<State>();

useModule
  .reducer({ counter1: 0, counter2: 0 })
  .on(Actions.increment1, (state) => {
    state.counter1++;
  })
  .on(Actions.increment2, (state) => {
    state.counter2++;
  });
const getCounter1 = createSelector([getState, (s) => s.counter1], (counter) => ({
  counter,
}));

let renderCount = 0;
const StateViewer = () => {
  const state = getState.useState();
  return <pre>state: {JSON.stringify(state, null, '  ')}</pre>;
};
const Counter = () => {
  const { counter } = useSelector(getCounter1);
  const { increment1, increment2 } = useActions(Actions);
  React.useEffect(() => {
    renderCount++;
  });
  return (
    <div>
      <h3>typeless</h3>
      <div>render count: {renderCount}</div>
      <div>typeless's count1: {counter}</div>
      <button onClick={increment1}>inc1</button>
      <button onClick={increment2}>inc2</button>
    </div>
  );
};
const Module = () => {
  useModule();

  return (
    <>
      <StateViewer></StateViewer>
      <Counter></Counter>
    </>
  );
};
export const TypelessSample: React.FC = () => {
  return (
    <DefaultTypelessProvider>
      <Module></Module>
    </DefaultTypelessProvider>
  );
};
