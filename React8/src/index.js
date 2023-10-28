import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
// import './index.css';
// import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={['Terrible', 'Good', 'Way Better', 'Quiet Good', 'Best']} />
    <StarRating maxRating={5} size='24' />
    <StarRating maxRating={5} size='48' defaultRating={3} />
  </React.StrictMode>
);

