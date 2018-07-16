import React from 'react';
import SimpleClassificationCNN from '../src/Components/SimpleClassificationCNN';
import SimpleRegressionCNN from '../src/Components/SimpleRegressionCNN';
import StockDayViz from '../src/Components/StockDayViz';
import LossViz from '../src/Components/LossViz';
import Paper from '@material-ui/core/Paper';
import DemoGetDayPriceAPI from '../src/Components/Demos/DemoGetDayPriceAPI';
import DemoGetTodayPriceAPI from '../src/Components/Demos/DemoGetTodayPriceAPI';
import DemoGetOneDayTrainingData from '../src/Components/Demos/DemoGetOneDayTrainingData';
import DemoGetLast30Days from '../src/Components/Demos/DemoGetLast30Days';
import DemoGetLastDaysTrainingData from '../src/Components/Demos/DemoGetLastDaysTrainingData';
import './index.css';

import MainReadme from '../README.md';

import { storiesOf } from '@storybook/react';
import { withReadme, withDocs }  from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { trimPriceData } from '../src/utils/apis';
import { fake_simple_cnn_train_data } from './dummy/fake_model_inputs.js';
import { fake_simple_regression_cnn_train_label } from './dummy/fake_model_inputs.js'
import { fake_simple_classification_cnn_train_label } from './dummy/fake_model_inputs.js'
import { days2data, days2label } from '../src/utils/preprocess';
import { fake_loss } from './dummy/fake_model_inputs.js';
import { fake_stock_day_raw } from './dummy/fake_stock_day_data.js';

var fake_stock_day = trimPriceData(fake_stock_day_raw);
var day_data = days2data(fake_simple_cnn_train_data);
var day_regression_label = days2label(fake_simple_regression_cnn_train_label);
var day_classification_label = days2label(fake_simple_classification_cnn_train_label);

var load_day_train_data = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(day_data)
    }, 1000);
  });
}

var load_day_classification_train_label = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(day_classification_label)
    }, 1000);
  });
}

var load_day_regression_train_label = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(day_regression_label)
    }, 1000);
  });
}

storiesOf('Visualizations', module)
  .add('Loss Visualization', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Loss Vizualization</h1>
        <LossViz history={fake_loss}/>
      </div>
    </Paper>
  )))
  .add('Day Price Visualization', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Stock Daily Price Vizualization</h1>
        <StockDayViz data={fake_stock_day} />
      </div>
    </Paper>
  )));

storiesOf('AI Models', module)
  .add('Simple Clasification CNN', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Simple CNN Model</h1>
        <SimpleClassificationCNN
          load_train_data={load_day_train_data}
          load_train_label={load_day_classification_train_label}/>
      </div>
    </Paper>
  )))
  .add('Simple Regression CNN', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Simple CNN Model</h1>
        <SimpleRegressionCNN
          load_train_data={load_day_train_data}
          load_train_label={load_day_regression_train_label}/>
      </div>
    </Paper>
  )))

storiesOf('API Demos', module)
  .add('Get Day Price Demos', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Get Day Price Demos</h1>
        <DemoGetDayPriceAPI/>
      </div>
    </Paper>
  )))
  .add('Get Today Price Demos', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Get Today Price Demos</h1>
        <DemoGetTodayPriceAPI/>
      </div>
    </Paper>
  )))
  .add('Get One Day Training Data', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Get One Day Training Data</h1>
        <DemoGetOneDayTrainingData/>
      </div>
    </Paper>
  )))
  .add('Get Last 30 Days', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Get Last 30 Days</h1>
        <DemoGetLast30Days/>
      </div>
    </Paper>
  )))
  .add('Get Last N Days Data', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Get Last N Days Data</h1>
        <DemoGetLastDaysTrainingData/>
      </div>
    </Paper>
  )))
