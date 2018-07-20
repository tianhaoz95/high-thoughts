import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class RegressionPredictViz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      high: 'pending'
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh() {
    var new_high = this.props.getPredictResult()[0];
    this.setState({
      high: new_high
    });
  }

  render() {
    return (
      <div>
        <p>Regression Predict Viz</p>
        <p>High: {this.state.high}</p>
        <Button
          onClick={this.handleRefresh}
          variant="contained"
          color="primary">
          Refresh
        </Button>
      </div>
    );
  }
}

export default RegressionPredictViz;
