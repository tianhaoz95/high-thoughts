import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import LossValViz from '../Visualization/LossValViz';
import _ from 'lodash';

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
          var loss_len = history['loss'].length;
          var mapped_loss = [];
          for (var i = 0; i < loss_len; ++i) {
            mapped_loss.push({
              loss: history['loss'][i],
              val: history['val_loss'][i]
            });
          }
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
        <FormControlLabel
          control={
            <Switch
              checked={this.state.training}
              onChange={this.handleToggleTraining}
              value="training"/>}
          label={this.state.training ? (<CircularProgress/>) : ("Start Training")}/>
        <LossValViz history={this.state.loss}/>
      </div>
    );
  }
}

export default ModelTrainer;
