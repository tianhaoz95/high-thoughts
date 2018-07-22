import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import ErrorStepperTitle from '../UI/ErrorStepperTitle.js'
import SelectDataSourceStepperTitle from '../UI/SelectDataSourceStepperTitle';
import PredictStepperTitle from  '../UI/PredictStepperTitle';
import SelectModelStepperTitle from '../UI/SelectModelStepperTitle';
import TrainingStepperTitle from  '../UI/TrainingStepperTitle';

class GenericStepperPipeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
    };
    this.getTitle = this.getTitle.bind(this);
  }

  getTitle() {
    switch (this.state.activeStep) {
      case 0:
        return (<SelectDataSourceStepperTitle/>);
        break;
      case 1:
        return (<SelectModelStepperTitle/>);
        break;
      case 2:
        return (<TrainingStepperTitle/>);
        break;
      case 3:
        return (<PredictStepperTitle/>);
        break;
      default:
        return (<ErrorStepperTitle/>);
        break;
    }
  }

  render() {
    return (
      <div>
        {this.getTitle()}
        <Stepper activeStep={this.state.activeStep}>
          <Step>
            Select Data Source
          </Step>
          <Step>
            Select Model
          </Step>
          <Step>
            Train
          </Step>
          <Step>
            Predict
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default GenericStepperPipeline
