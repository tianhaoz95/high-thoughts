import React, { Component } from 'react';
import { LineChart, ResponsiveContainer, Label } from 'recharts';
import { XAxis, YAxis, Line, CartesianGrid } from 'recharts';

class StockDayViz extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={this.props.data}>
            <XAxis>
              <Label value="Timestamp" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis 
              label={{ value: 'Price', angle: -90, position: 'insideLeft' }}
              type="number"
              domain={['dataMin', 'dataMax']}/>
            <Line type="natural" dot={false} dataKey="close" stroke="#8884d8" />
            <Line type="natural" dot={false} dataKey="open" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default StockDayViz;
