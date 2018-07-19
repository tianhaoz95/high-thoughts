import React, { Component } from 'react';
import CNNRegressionModelComposer from '../ModelComposer/CNNRegressionModelComposer';
import NextDayRegressionDataGenerator from '../DataGenerator/NextDayRegressionDataGenerator';
import ModelContinuousTrainer from '../ModelTrainer/ModelContinuousTrainer';
import SimplePredictor from '../Predictor/SimplePredictor';

class CNNRegressionPipeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      has_model: false,
      has_train_data: false,
      has_predict_data: false
    };
    this.model = null;
    this.train_data = null;
    this.predict_data = null;
    this.onGenerateModel = this.onGenerateModel.bind(this);
    this.get_mini_batch_x = this.get_mini_batch_x.bind(this);
    this.get_mini_batch_y = this.get_mini_batch_y.bind(this);
    this.get_config = this.get_config.bind(this);
    this.get_model = this.get_model.bind(this);
    this.get_interval = this.get_interval.bind(this);
  }

  onGenerateModel(model) {
    this.model = model;
    this.setState({
      has_model: true
    });
  }

  onGenerateTrainData(train_data) {
    this.train_data = train_data;
    this.setState({
      has_train_data: true
    });
  }

  onGeneratePredictData(predict_data) {
    this.predict_data = predict_data;
    this.setState({
      has_predict_data: true
    });
  }

  get_mini_batch_x() {
    return this.train_data['x'];
  }

  get_mini_batch_y() {
    return this.train_data['y'];
  }

  get_config() {
    return {epochs: 5};
  }

  get_interval() {
    return 1000;
  }

  get_model() {
    return this.model;
  }

  render() {
    return (
      <div>
        CNN Regression Pipline
        {this.state.has_model ? (<p>Has model</p>) : (<p>No model</p>)}
        <CNNRegressionModelComposer
          onGenerateModel={this.onGenerateModel}/>
        <NextDayRegressionDataGenerator/>
        <ModelContinuousTrainer
          getMiniBatchX={this.get_mini_batch_x}
          getMiniBatchY={this.get_mini_batch_y}
          getConfig={this.get_config}
          getModel={this.get_model}
          getInterval={this.get_interval}/>
        <SimplePredictor/>
      </div>
    );
  }
}

export default CNNRegressionPipeline;
