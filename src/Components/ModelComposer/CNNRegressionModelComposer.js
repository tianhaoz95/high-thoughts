import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { genSimpleRegressionConv } from '../../utils/models';

class CNNRegressionModelComposer extends Component {
  constructor(props) {
    super(props);
    this.handleGenerateModel = this.handleGenerateModel.bind(this);
  }

  handleGenerateModel() {
    var model = genSimpleRegressionConv(10);
    this.props.onGenerateModel(model);
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleGenerateModel}
          variant="contained"
          color="primary">
          Generate Model
        </Button>
      </div>
    );
  }
}

export default CNNRegressionModelComposer;
