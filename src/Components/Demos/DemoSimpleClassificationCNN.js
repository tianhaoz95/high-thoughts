import React, { Component } from 'react';
import ModelContinuousTrainer from '../ModelTrainer/ModelContinuousTrainer';
import { genSimpleClassificationConv } from '../../utils/models';
import { fake_simple_cnn_train_data } from './dummy/fake_model_inputs.js';
import { fake_simple_classification_cnn_train_label } from './dummy/fake_model_inputs.js'
import { days2data, days2label } from '../../utils/preprocess';

var day_data = days2data(fake_simple_cnn_train_data);
var day_classification_label = days2label(fake_simple_classification_cnn_train_label);

function get_mini_batch_x() {
  return day_data;
}

function get_mini_batch_y() {
  return day_classification_label;
}

class DemoSimpleClassificationCNN extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.get_interval = this.get_interval.bind(this);
    this.get_config = this.get_config.bind(this);
    this.get_model = this.get_model.bind(this);

    var time_length = 10;
    var category_cnt = 5;
    this.model = genSimpleClassificationConv(time_length, category_cnt);
  }

  get_interval() {
    return 1000;
  }

  get_config() {
    return {
      epochs: 1
    };
  }

  get_model() {
    return this.model;
  }

  render() {
    return (
      <div>
        <ModelContinuousTrainer
          getMiniBatchX={get_mini_batch_x}
          getMiniBatchY={get_mini_batch_y}
          getConfig={this.get_config}
          getModel={this.get_model}
          getInterval={this.get_interval}/>
      </div>
    );
  }
}

export default DemoSimpleClassificationCNN;
