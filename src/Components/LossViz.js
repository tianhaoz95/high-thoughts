import React, { Component } from 'react';
import { Label, LineChart, XAxis, Line } from 'recharts';
import { YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

class LossViz extends Component {
  render() {
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
              tickFormatter={(tick) => (Number(tick).toFixed(2))}
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
