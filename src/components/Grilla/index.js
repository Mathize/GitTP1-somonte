import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tarjeta from '../Tarjeta';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Grilla(props) {
  const classes = useStyles();
  const { vengadores } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        {vengadores.map(vengador => {
            return(
        <Grid item xs={3} key={vengador._id}>
          <Tarjeta vengador = {vengador}/>
        </Grid>
        )
    })}
      </Grid>
    </div>
  );
}