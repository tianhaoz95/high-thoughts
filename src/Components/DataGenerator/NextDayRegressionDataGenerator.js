import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs';
import _ from 'lodash';

import { fake_simple_cnn_train_data } from '../Demos/dummy/fake_model_inputs';
import { fake_simple_regression_cnn_train_label } from '../Demos/dummy/fake_model_inputs';
import { days2data, days2label } from '../../utils/preprocess';
import { getLastNDaysTrainingData } from '../../utils/apis';
import { NDayData2RegressionTrainingSet } from '../../utils/preprocess';

class NextDayRegressionDataGenerator extends Component {
  constructor(props) {
    super(props);
    this.handleGenerateData = this.handleGenerateData.bind(this);
  }

  handleGenerateData() {
    var obj = this;
    getLastNDaysTrainingData('aapl', dayjs(), 10)
    .then(function (data) {
      console.log(data);
      var processed_data = NDayData2RegressionTrainingSet(data);
      console.log(processed_data);
      obj.props.onGenerateTrainData({
        x: processed_data['xs'],
        y: processed_data['ys_high']
      });
      obj.props.onGeneratePredictData({
        x: processed_data['xs']
      });
    });
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleGenerateData}
          variant="contained"
          color="primary">
          Generate Data
        </Button>
      </div>
    );
  }
}

export default NextDayRegressionDataGenerator;
