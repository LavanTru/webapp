import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';

// Stepper is the progress bar shown on top of OrderComponent, OrderScheduleAndDelivery and OrderConfirmation

// Style for the line between the steps
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#b8627d',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#b8627d',
    },
  },
  line: {
    borderColor: '#ffe6de',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

// Style for icons in stepper
const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#15b1b7',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#0f7d80',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#0f7d80',
    zIndex: 1,
    fontSize: 25,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
    return ["Configure wash","Schedule and delivery","Confirm and pay"];
  }

export default function CustomStepper(props) {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={props.activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}><p>{label}</p></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
