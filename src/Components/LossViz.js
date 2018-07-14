import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, ResponsiveContainer } from 'recharts';

class LossViz extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={this.props.history}>
            <XAxis/>
            <YAxis
              tickFormatter={(tick) => {
                return Number(tick).toFixed(3);
              }}
              type="number"
              domain={[0, 'dataMax']}/>
            <Line type="natural" dot={false} dataKey="loss" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default LossViz;
