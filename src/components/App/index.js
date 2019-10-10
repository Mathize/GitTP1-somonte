import React from 'react';
import './index.css';
import Menu from '../Menu';
import Grilla from '../Grilla';
import Footer from '../Footer'
import Loading from '../Loading';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Filtros from '../Filtros'

class App extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        vengadores:[],
        vengadoresBkp: [],
        mundos:[],
        loading:true,
        filters: {
          filter1: 'select'
        }
      }
      this.handleFilterChange = this.handleFilterChange.bind(this) //IMPORTANTE
      this.handleFilter = this.handleFilter.bind(this)
    }

    async componentDidMount(){
  
      try {
        const response = await fetch ('https://vengadores-api-rest.herokuapp.com/vengador')
        if (!response.ok) {
          throw Error (response.statusText);
        }
        const json = await response.json()
        console.log(json);
        const mundos = json.map(({mundo}) => mundo)
        const yearsUnrepeated = Array.from(new Set(mundos))
        const yearsUnrepeatedOrdered = yearsUnrepeated.sort((a, b) => (a < b) ? 1 : -1).slice()

        this.setState({
          vengadores:json,
          vengadoresBkp: json,
          mundos: yearsUnrepeatedOrdered,
          loading: false
        })
      } catch (error) {
        console.log("Error")
      }
    }

    handleFilter(payload){
      const {filter1} = payload
      const {vengadoresBkp} = this.state
      const filteredVengadores = vengadoresBkp.filter(vengador => {
          return vengador.mundo === (filter1 !== 'select' ? filter1 : vengador.mundo)
      })
      return filteredVengadores
  }


    handleFilterChange(event){

      let payload = this.state.filters
      payload[event.target.name] = event.target.value
      const vengadoresFiltered = this.handleFilter(payload)
      console.log(vengadoresFiltered)
  
      this.setState({
        filters:payload,
        vengadores: vengadoresFiltered
      })
  
      console.log(this.state.filters)
    }

  

  render(){
  return (
    <React.Fragment>
      <CssBaseline />
      <Menu />
      <Filtros 
      filters={this.state.filters}
      mundos={this.state.mundos}
      onFilterChange={this.handleFilterChange} />
      <Container fixed>
        {this.state.loading && <Loading />}
         {!this.state.loading && <Grilla vengadores={this.state.vengadores}/>}
    </Container>
    <Footer />
    </React.Fragment>
  );
}
}


export default App;