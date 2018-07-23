import React from 'react';
import ReactDOM from 'react-dom';
import LossViz from '../LossViz';
import StockDayViz from '../StockDayViz';
import LossValViz from '../LossValViz';
import SimpleViz from '../SimpleViz';

export var fake_loss = [
  {loss: 19.1, val: 1.2},
  {loss: 18.2, val: 1.4},
  {loss: 17.1, val: 3.2},
  {loss: 16.1, val: 2.2},
  {loss: 15.4, val: 1.5},
  {loss: 15.5, val: 1.2},
  {loss: 15.6, val: 4.2},
  {loss: 13.4, val: 7.3},
  {loss: 12.1, val: 1.2},
];

export var fake_list = [1.1, 2, 4, 3, 2, 2, 4, 2, 2.4];

test('Test rendering LossViz', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LossViz history={fake_loss}/>, div);
});

test('Test rendering StockDayViz', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StockDayViz  data={[]}/>, div);
});

test('Test rendering LossValViz', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LossValViz  data={fake_loss}/>, div);
});

test('Test rendering SimpleViz', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleViz  data={fake_list}/>, div);
});
