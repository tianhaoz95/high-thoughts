import React, { Component } from 'react';
import NextDayRegressionDataGenerator from '../DataGenerator/NextDayRegressionDataGenerator';

class DemoNextDayRegressionDataGenerator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NextDayRegressionDataGenerator/>
      </div>
    );
  }
}

export default DemoNextDayRegressionDataGenerator;
