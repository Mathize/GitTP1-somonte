import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filtro(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

 
const {onFilterChange, name, data = [] } = props
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Mundo</InputLabel>
        <Select
          native
          value={state.mundo}
          onChange={onFilterChange}
          name = {name}
        >
           <option value="select">Todos</option>
            {data.map(item => <option value={item} key={item}>{item}</option>)}
        </Select>
      </FormControl>
      </div>
  );
}
