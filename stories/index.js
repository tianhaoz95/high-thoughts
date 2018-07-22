import React from 'react';
import Paper from '@material-ui/core/Paper';
import './index.css';

import DemoSimpleClassificationCNN from '../src/Components/Demos/DemoSimpleClassificationCNN';
import DemoSimpleRegressionCNN from '../src/Components/Demos/DemoSimpleRegressionCNN';
import DemoStockDayViz from '../src/Components/Demos/DemoStockDayViz';
import DemoLossViz from '../src/Components/Demos/DemoLossViz';
import DemoGetDayPriceAPI from '../src/Components/Demos/DemoGetDayPriceAPI';
import DemoGetTodayPriceAPI from '../src/Components/Demos/DemoGetTodayPriceAPI';
import DemoGetOneDayTrainingData from '../src/Components/Demos/DemoGetOneDayTrainingData';
import DemoGetLast30Days from '../src/Components/Demos/DemoGetLast30Days';
import DemoGetLastDaysTrainingData from '../src/Components/Demos/DemoGetLastDaysTrainingData';
import DemoSimplePredictor from '../src/Components/Demos/DemoSimplePredictor';
import DemoNextDayRegressionDataGenerator from '../src/Components/Demos/DemoNextDayRegressionDataGenerator';
import CNNRegressionPipeline from '../src/Components/Pipeline/CNNRegressionPipeline';
import GenericStepperPipeline from '../src/Components/Pipeline/GenericStepperPipeline';

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
        <DemoSimpleClassificationCNN/>
      </div>
    </Paper>
  )))
  .add('Simple Regression CNN', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Simple CNN Model</h1>
        <DemoSimpleRegressionCNN/>
      </div>
    </Paper>
  )))

storiesOf('Predictors', module)
  .add('Simple Predictor', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Simple Predictor</h1>
        <DemoSimplePredictor/>
      </div>
    </Paper>
  )))

storiesOf('Pipelines', module)
  .add('CNN Regression Pipeline', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>CNN Regression Pipeline</h1>
        <CNNRegressionPipeline/>
      </div>
    </Paper>
  )))
  .add('Generic Stepper Pipeline', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Generic Stepper Pipeline</h1>
        <GenericStepperPipeline/>
      </div>
    </Paper>
  )))

storiesOf('Data Generators', module)
  .add('Next Day Regression', withReadme(MainReadme, () => (
    <Paper>
      <div className="story-view">
        <h1>Next Day Regression Data Generator</h1>
        <DemoNextDayRegressionDataGenerator/>
      </div>
    </Paper>
  )))

storiesOf('Stock Price APIs', module)
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
