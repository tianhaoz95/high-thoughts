import React, { Component } from 'react';
import StockDayViz from '../Visualization/StockDayViz';
import { fake_stock_day_raw } from './dummy/fake_stock_day_data';
import { trimPriceData } from '../../utils/apis';

var fake_stock_day = trimPriceData(fake_stock_day_raw);

class DemoStockDayViz extends Component {
  render() {
    return (
      <div>
        <h1>Stock Daily Price Vizualization</h1>
        <StockDayViz data={fake_stock_day} />
      </div>
    );
  }
}

export default DemoStockDayViz;
