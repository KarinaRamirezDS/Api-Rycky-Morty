import React, {useState} from 'react';
import axios from 'axios';
import "../App.css"
const SearchBox = ({setType}) => {

    //Este componenete nos servira para poder buscar por id la locacion 

    //comenzaremos creando un estado para el id 
    const [id, setId] = useState("");

    const search = () => {
       axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then(res => setType(res.data));
    }

    return (
        <div>
            <>
                <input 
                    className="caja"
                    type="text" 
                    onChange={e => setId(e.target.value)} 
                    value={id}    
                />
                <button className="boton" onClick={search}><i className="fas fa-search"></i></button>
                

                
            </>
        </div>
    )
}

export default SearchBox
