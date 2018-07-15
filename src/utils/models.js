import * as tf from '@tensorflow/tfjs';
import _ from 'lodash';

export function gen_conv_lstm_model() {
  return 0;
}

export function gen_simple_conv_model(conv_layers=[16,16], dense_layers=[16,16]) {
  var model = tf.sequential();
  var conv_cnt = conv_layers.length;
  var dense_cnt = dense_layers.length;
  model.add(tf.layers.conv1d({
    filters: 4,
    kernelSize: 3,
    inputShape: [time_length, 1]
  }));
  for (var i = 0; i < conv_cnt; ++i) {
    model.add(tf.layers.conv1d({
      filters: conv_layers[i],
      kernelSize: 3
    }));
  }
  model.add(tf.layers.flatten());
  for (var i = 0; i < dense_cnt; ++i) {
    model.add(tf.layers.dense({
      units: dense_layers[i],
      activation: 'relu'
    }));
  }
  model.add(tf.layers.dense({
    units: 5,
    activation: 'softmax'
  }));
  model.compile({
    loss: 'meanSquaredError',
    optimizer: 'sgd',
    metrics: ['accuracy']
  });
  return model;
}
