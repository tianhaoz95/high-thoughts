import React from 'react';
import ReactDOM from 'react-dom';
import SimplePredictor from '../SimplePredictor';
import * as tf from '@tensorflow/tfjs';

var model = tf.sequential();

model.add(tf.layers.dense({
  units: 1,
  activation: 'tanh',
  inputShape: [1, 1]
}));

var pred_data = tf.tensor2d([[1]]);

test('Test rendering SimplePredictor', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SimplePredictor
      getModel={() => (model)}
      getInputX={() => (pred_data)}
      />, div);
});
