import React, { Component } from 'react';
import NextDayRegressionDataGenerator from './NextDayRegressionDataGenerator';

class GenericDataGenerator extends Component {
  render() {
    switch (this.props.type) {
      case 'one_day_regression':
        return (
          <NextDayRegressionDataGenerator
            onGenerateTrainData={this.props.onGenerateTrainData}
            onGeneratePredictData={this.props.onGeneratePredictData}/>
        );
        break;
      default:
        return (
          <div>Error</div>
        );
    }
  }
}

export default GenericDataGenerator;
