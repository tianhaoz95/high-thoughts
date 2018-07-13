import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SimpleCNN from '../src/Components/SimpleCNN';
import StockDayViz from '../src/Components/StockDayViz';
import { trimPriceData } from '../src/utils/apis';

var fake_stock_day = trimPriceData(require('./dummy/fake_stock_day.json'));

storiesOf('Visualizations', module)
  .add('test 1', () => (
    <SimpleCNN />
  ))
  .add('Day Price Visualization', () => (
    <StockDayViz data={fake_stock_day} />
  ));

storiesOf('AI Models', module)
  .add('test 1', () => (
    <SimpleCNN />
  ))
  .add('Day Price Visualization', () => (
    <StockDayViz data={fake_stock_day} />
  ));

storiesOf('Integrations', module)
  .add('test 1', () => (
    <SimpleCNN />
  ))
  .add('Day Price Visualization', () => (
    <StockDayViz data={fake_stock_day} />
  ));
