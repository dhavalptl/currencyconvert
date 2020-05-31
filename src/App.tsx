import React, { Suspense } from 'react';
import './App.css';
import Result from './components/Result';
import AmountInput from './components/AmountInput';
import CurrencyInput from './components/CurrencyInput';

function App() {
  return (
    <div className="App">
      <h2>Currency Convert</h2>
      <div className="content">
        <Suspense fallback={<header className='title'>Loading..</header>}>
          <Result />
        </Suspense>
        <AmountInput />
        <CurrencyInput />
      </div>
    </div>
  );
}

export default App;
