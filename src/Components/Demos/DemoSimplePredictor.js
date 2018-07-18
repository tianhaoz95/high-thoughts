import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import SimplePredictor from '../Predictor/SimplePredictor';
import SimpleViz from '../Visualization/SimpleViz';

var model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

var fake_input = tf.tensor2d([5, 3, 2, 1, 3, 2, 8, 1], [8, 1]);
var xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
var ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

function getInputX() {
  return fake_input;
}

function getModel() {
  return model;
}

class DemoSimplePredictor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      result: []
    };
    this.handlePredict = this.handlePredict.bind(this);
  }

  componentDidMount() {
    var obj = this;
    model.fit(xs, ys, {epochs: 10})
    .then(function () {
      obj.setState({disabled: false});
    });
  }

  handlePredict(pred) {
    var obj = this;
    pred.data().then(function (res) {
      var res_arr = [];
      res.forEach((i) => {res_arr.push(Number(i))});
      obj.setState({result: res_arr});
    });
  }

  render() {
    return (
      <div>
        <SimplePredictor
          disabled={this.state.disabled}
          getInputX={getInputX}
          getModel={getModel}
          onPredict={this.handlePredict}/>
        <SimpleViz data={this.state.result}/>
      </div>
    );
  }
}

export default DemoSimplePredictor;
