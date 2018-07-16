import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import Switch from '@material-ui/core/Switch';
import LossViz from './LossViz';

class ModelTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'idle',
      training: false,
      loss: []
    };
    this.train_loop = null;
    this.handleToggleTraining = this.handleToggleTraining.bind(this);
  }

  handleToggleTraining(event) {
    var obj = this;
    var train = event.target.checked;
    if (train) {
      obj.train_loop = setInterval(function () {
        console.log('trianing');
        obj.props.getModel().fit(
          obj.props.getMiniBatchX(),
          obj.props.getMiniBatchY(),
          obj.props.getConfig()
        ).then(function (snap) {
          var history = snap['history'];
          var mapped_loss = history['loss'].map((l) => ({loss: l}));
          obj.setState({
            loss: _.concat(obj.state.loss, mapped_loss)
          });
        });
      }, obj.props.getInterval());
    } else {
      clearInterval(obj.train_loop);
      obj.train_loop = null;
    }
    obj.setState({
      training: train
    });
  }

  render() {
    return (
      <div>
        <Switch
          checked={this.state.training}
          onChange={this.handleToggleTraining}
          value="checkedA"/>
        <LossViz history={this.state.loss}/>
      </div>
    );
  }
}

export default ModelTrainer;
