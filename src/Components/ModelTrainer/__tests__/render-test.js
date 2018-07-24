import React from 'react';
import ReactDOM from 'react-dom';
import GenericModelTrainer from '../GenericModelTrainer';
import ModelContinuousTrainer from '../ModelContinuousTrainer';

test('Test rendering GenericModelTrainer', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenericModelTrainer/>, div);
});
