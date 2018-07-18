import React, { Component } from 'react';
import { Label, LineChart, XAxis, Line } from 'recharts';
import { YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

class SimpleViz extends Component {
  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={this.props.data.map((d) => ({data: d}))}>
            <XAxis>
              <Label value="X" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis
              label={{ value: 'Data', angle: -90, position: 'insideLeft' }}
              tickFormatter={(tick) => (Number(tick).toFixed(2))}
              type="number"
              domain={[0, 'dataMax']}/>
            <Line type="natural" dot={false} dataKey="data" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default SimpleViz;
