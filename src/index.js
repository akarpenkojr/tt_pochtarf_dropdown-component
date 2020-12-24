import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {menuItems} from './fixtures'
import Dropdown from './components/Dropdown';

ReactDOM.render(
  <React.StrictMode>
    <div className='componentWrapper'>
      <Dropdown menuItems = {menuItems} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

