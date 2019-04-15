import React from 'react';


import Store from './Store';
import Counter from './Counter';
import Ziffern from './Ziffern';

const App = () => {

  return (
    <Store>
      <h3>App</h3>
      <Counter />
      {/*  */}
       <Ziffern />
    </Store>
  )
}

export default App