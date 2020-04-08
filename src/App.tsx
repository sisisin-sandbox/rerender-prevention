import React from 'react';
import { TypelessSample } from './typeless-sample';
import { ReduxSample } from './redux-sample';

export const App: React.FC = () => {
  return (
    <div>
      <TypelessSample></TypelessSample>
      <hr></hr>
      <ReduxSample></ReduxSample>
    </div>
  );
};
