import React from 'react';
import ReactDOM from 'react-dom';
import ErrorStepperTitle from '../ErrorStepperTitle.js'
import SelectDataSourceStepperTitle from '../SelectDataSourceStepperTitle';
import PredictStepperTitle from  '../PredictStepperTitle';
import SelectModelStepperTitle from '../SelectModelStepperTitle';
import TrainingStepperTitle from  '../TrainingStepperTitle';

test('Test rendering ErrorStepperTitle', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorStepperTitle/>, div);
});

test('Test rendering SelectDataSourceStepperTitle', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectDataSourceStepperTitle/>, div);
});

test('Test rendering PredictStepperTitle', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PredictStepperTitle/>, div);
});

test('Test rendering SelectModelStepperTitle', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectModelStepperTitle/>, div);
});

test('Test rendering TrainingStepperTitle', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrainingStepperTitle/>, div);
});
