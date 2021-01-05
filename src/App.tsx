import React from 'react';
import { MyForm } from './components/MyForm';

const App = () =>(
  <div style={{ textAlign: 'center' }}>
    <MyForm onSubmit={({ firstName, lastName, email }) => {
      console.log({ firstName, lastName, email });

      
    }}/>
  </div >
  )


export default App;
