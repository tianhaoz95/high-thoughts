import * as tf from '@tensorflow/tfjs';
import _ from 'lodash';

export function days2data(days) {
  var max_len = _.maxBy(days, (day) => day.length).length;
  var pad_arrs = [];
  _.forEach(days, (day) => {
    var diff = max_len - day.length;
    var pad = _.fill(Array(diff), _.last(day));
    var pad_arr = _.concat(day, pad);
    pad_arrs.push(pad_arr);
  });
  var res = tf.tensor3d(pad_arrs);
  return res;
}

export function days2label(labels) {
  var res = tf.tensor2d(labels);
  return res;
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
