import React from 'react';
import { MyForm } from './components/MyForm';

const App = () =>(
  <div style={{ textAlign: 'center',marginTop:"15%"}}>
    <MyForm onSubmit={({ firstName, lastName, email }) => {
      alert(JSON.stringify({firstName, lastName, email}, null, 2));
    }}/>
  </div >
  )


export default App;
