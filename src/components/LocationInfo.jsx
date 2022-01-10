import React from 'react'

const LocationInfo = ({type}) => {
    return (
        <div>
        <section className="section2">
            <h2>{type?.name}</h2>
                <div >
                <div className="fila2"> <p><b>Type: </b>{type?.type}</p>  </div>
                <div className="fila1">  <p><b>Dimension: </b>{type?.dimension}</p> </div>
                <div className="fila">  <p><b>Population: </b>{type?.residents?.length}</p> </div> 
                
                   
                </div>
            

        </section>
        
        </div>
    )
}

export default LocationInfo
