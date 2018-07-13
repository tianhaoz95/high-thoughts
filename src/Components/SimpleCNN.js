import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';

class SimpleCNN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'configure',
      data: []
    };
    var batch_size = 3;
    var time_length = 5;
    this.model = tf.sequential();
    this.model.add(tf.layers.conv1d({
      filters: 32,
      kernelSize: 3, 
      inputShape: [batch_size, time_length]
    }));
    this.model.add(tf.layers.conv1d({
      filters: 32,
      kernelSize: 3,
      inputShape: [batch_size, time_length]
    }));
    this.model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    this.model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  }

  componentDidMount() {
    console.log('pending');
  }

  render() {
    if (this.state.status == 'configure') {
      return (
        <div>
          configure
        </div>
      );
    } else if (this.state.status == 'training') {
      return (
        <div>
          training
        </div>
      );
    } else {
      return (
        <div>
          Error
        </div>
      );
    }
  }
}

export default SimpleCNN;
