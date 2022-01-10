
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import SearchBox from './components/SearchBox';
import ResidentsList from './components/ResidentsList';
import LocationInfo from './components/LocationInfo';


//declararemos una constante para realizar de forma aleatoria la locación
const randomId = Math.floor(Math.random() * 126) + 1;

function App() {

  // guardar un estado de la espuesta que obtenemos de res

  const [type, setType] = useState({})

  //Hacemos el llamado de la api mediante useEffet con axios

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setType(res.data));
  }, []);
  console.log(type);

  return (
    <div className="App">
     <section className="seccion1">
     </section>
     <h1>{type.name}</h1>
     <SearchBox setType = {setType}/>

     <LocationInfo type={type}/>
     
     <ResidentsList 
       residentes={type.residents}
     />
    </div>
  );
}

export default App;
