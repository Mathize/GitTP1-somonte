import React from 'react'
import Filtro from '../Filtro'

const Filtros = props =>{
    const {onFilterChange, mundos} = props
    return(
        <div>
            <Filtro onFilterChange={onFilterChange} name="filter1" data={mundos} />
        </div>
    )
}

export default Filtros

