import React from 'react';
import Paper from '@material-ui/core/Paper';
import './index.css';

import SimpleClassificationCNN from '../src/Components/Demos/SimpleClassificationCNN';
import SimpleRegressionCNN from '../src/Components/Demos/SimpleRegressionCNN';
import DemoStockDayViz from '../src/Components/Demos/DemoStockDayViz';
import DemoLossViz from '../src/Components/Demos/DemoLossViz';
import DemoGetDayPriceAPI from '../src/Components/Demos/DemoGetDayPriceAPI';
import DemoGetTodayPriceAPI from '../src/Components/Demos/DemoGetTodayPriceAPI';
import DemoGetOneDayTrainingData from '../src/Components/Demos/DemoGetOneDayTrainingData';
import DemoGetLast30Days from '../src/Components/Demos/DemoGetLast30Days';
import DemoGetLastDaysTrainingData from '../src/Components/Demos/DemoGetLastDaysTrainingData';

import MainReadme from '../README.md';

import { storiesOf } from '@storybook/react';
import { withReadme, withDocs }  from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Visualizations', module)
  .add('Loss Visualization', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <DemoLossViz/>
      </div>
    </Paper>
  )))
  .add('Day Price Visualization', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <DemoStockDayViz/>
      </div>
    </Paper>
  )));

storiesOf('AI Models', module)
  .add('Simple Clasification CNN', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Simple CNN Model</h1>
        <SimpleClassificationCNN/>
      </div>
    </Paper>
  )))
  .add('Simple Regression CNN', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Simple CNN Model</h1>
        <SimpleRegressionCNN/>
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
