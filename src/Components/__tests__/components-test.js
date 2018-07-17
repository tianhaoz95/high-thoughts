import React from 'react';
import ReactDOM from 'react-dom';
import LossViz from '../Visualization/LossViz';
import StockDayViz from '../Visualization/StockDayViz';

export var fake_loss = [
  {loss: 19.1},
  {loss: 18.2},
  {loss: 17.1},
  {loss: 16.1},
  {loss: 15.4},
  {loss: 15.5},
  {loss: 15.6},
  {loss: 13.4},
  {loss: 12.1},
];

test('Test rendering LossViz', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LossViz history={fake_loss}/>, div);
});

test('Test rendering StockDayViz', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StockDayViz  data={[]}/>, div);
});
