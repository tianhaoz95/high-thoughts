import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { fake_simple_cnn_train_data } from '../Demos/dummy/fake_model_inputs';
import { fake_simple_regression_cnn_train_label } from '../Demos/dummy/fake_model_inputs';
import { days2data, days2label } from '../../utils/preprocess';
import { getLastNDaysTrainingData } from '../../utils/apis';
import { NDayData2RegressionTrainingSet } from '../../utils/preprocess';
import { getTodayStockPrice } from '../../utils/apis';
import { getTodayPredictData } from '../../utils/preprocess';

class NextDayClassificationDataGenerator extends Component {
  constructor(props) {
    super(props);
  }

  handleGenerateData() {
    var obj = this;
    getLastNDaysTrainingData('aapl', dayjs(), 10)
    .then(function (data) {
      var processed_data = NDayData2RegressionTrainingSet(data);
      obj.props.onGenerateTrainData({
        x: processed_data['xs'],
        y: processed_data['ys_high']
      });
      getTodayStockPrice('aapl')
      .then(function (pred_raw) {
        console.log(pred_raw);
        var time_len = processed_data['xs'].shape[1];
        var pred_data = getTodayPredictData(pred_raw, time_len);
        obj.props.onGeneratePredictData({
          x: pred_data
        });
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

export default NextDayClassificationDataGenerator;
