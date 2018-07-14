import React, { Component } from 'react';
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, CartesianGrid } from 'recharts';

class StockDayViz extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={this.props.data}>
            <XAxis />
            <YAxis type="number" domain={['dataMin', 'dataMax']}/>
            <Line type="natural" dot={false} dataKey="close" stroke="#8884d8" />
            <Line type="natural" dot={false} dataKey="open" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default StockDayViz;
