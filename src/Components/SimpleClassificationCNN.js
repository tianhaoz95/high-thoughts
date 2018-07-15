import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import _ from 'lodash';
import LinearProgress from '@material-ui/core/LinearProgress';
import LossViz from './LossViz';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class SimpleClassificationCNN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'unconfigured',
      loss: [],
      training: false,
      iter: 10,
      type: 0
    };

    this.train = this.train.bind(this);
    this.handleChange = this.handleChange.bind(this);

    var time_length = 10;
    this.model = tf.sequential();
    this.model.add(tf.layers.conv1d({
      filters: 4,
      kernelSize: 3,
      inputShape: [time_length, 1]
    }));
    this.model.add(tf.layers.conv1d({
      filters: 4,
      kernelSize: 3
    }));
    this.model.add(tf.layers.flatten());
    this.model.add(tf.layers.dense({
      units: 10,
      activation: 'relu'
    }));
    this.model.add(tf.layers.dense({
      units: 5,
      activation: 'softmax'
    }));
    this.model.compile({
      loss: 'meanSquaredError',
      optimizer: 'sgd',
      metrics: ['accuracy']
    });
  }

  train() {
    var obj = this;
    obj.model.fit(obj.state.train_data, obj.state.train_label, {
      epochs: obj.state.iter
    })
    .then(function (snap) {
      var history = snap['history'];
      var mapped_loss = history['loss'].map((l) => ({loss: l}));
      obj.setState({
        loss: _.concat(obj.state.loss, mapped_loss)
      });
    });
  }

  handleChange(event) {
    this.setState({
      iter: event.target.value,
    });
  };

  componentDidMount() {
    var obj = this;
    Promise.all([this.props.load_train_data(), this.props.load_train_label()])
    .then(function (res_arr) {
      obj.setState({
        status: 'configured',
        train_data: res_arr[0],
        train_label: res_arr[1]
      });
    });
  }

  render() {
    if (this.state.status == 'configured') {
      return (
        <div>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    id="number"
                    label="Number"
                    value={this.state.iter}
                    onChange={this.handleChange}
                    type="number"
                    InputLabelProps={{shrink: true}}
                    margin="normal"/>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={this.train}
                    variant="contained"
                    color="primary">
                    Train
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          {this.state.loss.length === 0 ? (
            <h6>No training history yet</h6>
          ) : (
            <LossViz history={this.state.loss}/>
          )}
        </div>
      );
    } else if (this.state.status == 'unconfigured') {
      return (
        <div>
          <h4>Fetching data ...</h4>
          <LinearProgress />
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

export default SimpleClassificationCNN;
