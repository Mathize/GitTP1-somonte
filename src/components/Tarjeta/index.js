import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345, 
    flex: '1',
  },
  media: {
    height: 500,
   
    
  },
});

export default function Tarjeta(props) {
  const classes = useStyles();

  const {vengador} = props
  const {personaje, raza, mundo, img, peliculas} = vengador


  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {personaje}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>{raza}, {mundo}</p>
            {peliculas.map(pelicula => <div>{pelicula.titulo}, {pelicula.año}</div>)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}