import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SimplePredictor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predicting: false
    };
    this.handlePredict = this.handlePredict.bind(this);
  }

  handlePredict() {
    var obj = this;
    var model = this.props.getModel();
    this.setState({predicting: true}, function () {
      var input = obj.props.getInputX();
      var pred = model.predict(input);
      obj.props.onPredict(pred);
      obj.setState({predicting: false});
    })
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handlePredict}
          variant="contained"
          disabled={this.props.disabled}
          color="primary">
          Predict
        </Button>
      </div>
    );
  }
}

export default SimplePredictor;
