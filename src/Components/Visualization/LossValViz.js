import React, { Component } from 'react';
import { Label, LineChart, XAxis, Line } from 'recharts';
import { YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

class LossValViz extends Component {
  render() {
    console.log(this.props.history);
    return (
      <div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={this.props.history}>
            <XAxis>
              <Label value="Iterations" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis
              label={{ value: 'Loss', angle: -90, position: 'insideLeft' }}
              tickFormatter={(tick) => (Number(tick).toFixed(3))}
              type="number"
              domain={[0, 'dataMax']}/>
            <Line type="natural" dot={false} dataKey="loss" stroke="#8884d8" />
            <Line type="natural" dot={false} dataKey="val" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default LossValViz;
