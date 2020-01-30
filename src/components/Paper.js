import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      marginTop: theme.spacing(10),
      width: theme.spacing(50),
      height: theme.spacing(16),
    },
  },
}));

const SimplePaper = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h1></h1>
      </Paper>
    </div>
  );
}

export default SimplePaper;