import React from 'react';
import SimpleCNN from '../src/Components/SimpleCNN';
import StockDayViz from '../src/Components/StockDayViz';
import LossViz from '../src/Components/LossViz';
import Paper from '@material-ui/core/Paper';
import DemoGetDayPriceAPI from '../src/Components/Demos/DemoGetDayPriceAPI';
import DemoGetTodayPriceAPI from '../src/Components/Demos/DemoGetTodayPriceAPI';
import './index.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { trimPriceData } from '../src/utils/apis';
import { fake_simple_cnn_train_data } from './dummy/fake.js';
import { fake_simple_cnn_train_label } from './dummy/fake.js'
import { days2data, days2label } from '../src/utils/models';
import { fake_loss } from './dummy/fake.js';

var fake_stock_day = trimPriceData(require('./dummy/fake_stock_day.json'));

var day_data = days2data(fake_simple_cnn_train_data);
var day_label = days2label(fake_simple_cnn_train_label);

var load_day_train_data = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(day_data)
    }, 3000);
  });
}

var load_day_train_label = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(day_label)
    }, 3000);
  });
}

storiesOf('Visualizations', module)
  .add('Loss Visualization', () => (
    <Paper>
      <div className="story-view">
        <h1>Loss Vizualization</h1>
        <LossViz history={fake_loss}/>
      </div>
    </Paper>
  ))
  .add('Day Price Visualization', () => (
    <Paper>
      <div className="story-view">
        <h1>Stock Daily Price Vizualization</h1>
        <StockDayViz data={fake_stock_day} />
      </div>
    </Paper>
  ));

storiesOf('AI Models', module)
  .add('Simple CNN', () => (
    <Paper>
      <div className="story-view">
        <h1>Simple CNN Model</h1>
        <SimpleCNN
          load_train_data={load_day_train_data}
          load_train_label={load_day_train_label}/>
      </div>
    </Paper>
  ))

storiesOf('API Demos', module)
  .add('Get Day Price Demos', () => (
    <Paper>
      <div className="story-view">
        <DemoGetDayPriceAPI/>
      </div>
    </Paper>
  ))
  .add('Get Today Price Demos', () => (
    <Paper>
      <div className="story-view">
        <DemoGetTodayPriceAPI/>
      </div>
    </Paper>
  ))
