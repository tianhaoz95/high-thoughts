import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid } from 'recharts';

class StockDayViz extends Component {
  render() {
    return (
      <div>
        <LineChart width={800} height={300} data={this.props.data}>
          <XAxis />
          <YAxis type="number" domain={['dataMin', 'dataMax']}/>
          <Line type="natural" dot={false} dataKey="close" stroke="#8884d8" />
          <Line type="natural" dot={false} dataKey="open" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}

export default StockDayViz;
