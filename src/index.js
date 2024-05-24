import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { Psds } from './App';
// import reportWebVitals from './reportWebVitals';
import * as core from '@pluralsight/ps-design-system-core'


const AppLayout = () => {
  return (
    <div>
      <Psds />
    </div>
  )
}

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout />)
// reportWebVitals();
