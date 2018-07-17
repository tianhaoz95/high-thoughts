import React, { Component } from 'react';
import LossViz from '../Visualization/LossViz';
import { fake_loss } from './dummy/fake_model_inputs';

class DemoLossViz extends Component {
  render() {
    return (
      <div>
        <h1>Loss Vizualization</h1>
        <LossViz history={fake_loss}/>
      </div>
    );
  }
}

export default DemoLossViz;
