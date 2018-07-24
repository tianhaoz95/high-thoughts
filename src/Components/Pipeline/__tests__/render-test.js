import React from 'react';
import ReactDOM from 'react-dom';
import GenericStepperPipeline from '../GenericStepperPipeline';
import CNNRegressionPipeline from '../CNNRegressionPipeline';

test('Test rendering GenericStepperPipeline', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericStepperPipeline/>, div);
});

test('Test rendering CNNRegressionPipeline', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CNNRegressionPipeline/>, div);
});
