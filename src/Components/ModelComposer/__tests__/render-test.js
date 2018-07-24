import React from 'react';
import ReactDOM from 'react-dom';
import GenericModelComposer from '../GenericModelComposer';
import CNNRegressionModelComposer from '../CNNRegressionModelComposer';

test('Test rendering GenericModelComposer', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericModelComposer />, div);
});

test('Test rendering CNNRegressionModelComposer', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CNNRegressionModelComposer
      onGenerateModel={(model) => {model.print()}}
      />, div);
});
