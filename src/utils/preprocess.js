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
