import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';


  
const ResidentInfo = ({url}) => {

    const [residenteInfo, setResidenteInfo] = useState({});

        useEffect(() => {
            axios.get(url)
            .then(res => setResidenteInfo(res.data));
        }, []);


    return (
        <div className="column">
            
            <div className="card">
               <img src={residenteInfo?.image} alt="Personaje"/>
                 <div className="attribute">
                    <h2><b>Name: </b> {residenteInfo?.name}</h2>
                    <p><b>Status: </b> {residenteInfo?.status}</p>
                    <p><b>Species: </b>{residenteInfo?.species}</p>
                    <p><b>Episodios: </b> {residenteInfo?.episode?.length}</p>
                 </div>
            </div>
        </div>
    )
}

export default ResidentInfo
