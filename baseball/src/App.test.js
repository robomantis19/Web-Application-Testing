import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App from './App';

test('renders learn react link', () => {
  const { getByTestId }= rtl.render(<App />);
  getByTestId(/ball/i);
  getByTestId(/strike/i);
});

test('renders learn react link', () => {
  const { getByTestId }= rtl.render(<App />);
  getByTestId(/Btn1/i);
  getByTestId(/Btn2/i);
  getByTestId(/Btn3/i);
  getByTestId(/Btn4/i);

});
// est('Lions header is found', () => {
//   const { getByTestId } = render(<App />);
//   // assert that the "lions" header is on the DOM
//   getByTestId(/lions-header/i);
// });