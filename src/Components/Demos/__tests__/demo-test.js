import React from 'react';
import ReactDOM from 'react-dom';
import DemoGetDayPriceAPI from '../DemoGetDayPriceAPI';
import DemoGetLast30Days from '../DemoGetLast30Days';
import DemoGetLastDaysTrainingData from '../DemoGetLastDaysTrainingData';
import DemoGetOneDayTrainingData from '../DemoGetOneDayTrainingData';
import DemoGetTodayPriceAPI from '../DemoGetTodayPriceAPI';

test('Test rendering DemoGetDayPriceAPI', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoGetDayPriceAPI />, div);
});

test('Test rendering DemoGetLast30Days', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoGetLast30Days />, div);
});

test('Test rendering DemoGetLastDaysTrainingData', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoGetLastDaysTrainingData />, div);
});

test('Test rendering DemoGetOneDayTrainingData', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoGetOneDayTrainingData />, div);
});

test('Test rendering DemoGetTodayPriceAPI', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoGetTodayPriceAPI />, div);
});
