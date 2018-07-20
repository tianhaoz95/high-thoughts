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

export function padFront(arr, target_len) {
  var diff_len = target_len - arr.length;
  var pad_arr = _.fill(Array(diff_len), arr[0]);
  var res_arr = _.concat(pad_arr, arr);
  return res_arr;
}

export function cutFront(arr, target_len) {
  var diff_len = arr.length - target_len;
  var cut_arr = _.slice(arr, diff_len);
  return cut_arr;
}

export function getTodayPredictData(data_raw, time_len) {
  var data = data_raw.map((d) => (d.average));
  var processed_data = null;
  if (data.length > time_len) {
    processed_data = cutFront(data, time_len);
  } else {
    processed_data = padFront(data, time_len);
  }
  var aug_arr = [processed_data.map((d) => ([d]))];
  var res = tf.tensor3d(aug_arr);
  return res;
}

export function NDayData2RegressionTrainingSet(data) {
  var xs = [];
  var ys_high = [];
  var ys_low = [];
  var max_len = _.max(data.map((d) => (d.prev_day_price_history.length)));
  _.forEach(data, (d) => {
    var anch = (d.current_day_high + d.current_day_low) / 2.0;
    var rate_high = (d.current_day_high - anch) / anch;
    var rate_low = (d.current_day_low - anch) / anch;
    var x = [];
    _.forEach(d.prev_day_price_history, (t) => {
      var rate = (t.average - anch) / anch;
      x.push([rate]);
    });
    var pad_x = padFront(x, max_len);
    xs.push(pad_x);
    ys_high.push([rate_high]);
    ys_low.push([rate_low]);
  });
  return {
    xs: tf.tensor3d(xs),
    ys_high: tf.tensor2d(ys_high),
    ys_low: tf.tensor2d(ys_low)
  };
}

export function NDayData2ClassificationTrainingSet() {
  return 0;
}
