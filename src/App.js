import React, { Fragment,useEffect,useState} from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import ListaNoticias from './component/ListaNoticias';
import Axios from 'axios';


function App() {
  const [categoria,guardarCategoria] = useState("");
  const [noticias,guardarNoticia] = useState([]);



  useEffect(() => {
    const consultarAPI = async() => {
      if(categoria === "")return;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=31a21cb73a10407684f96c09b2f1d385`;
      const noticia = await Axios.get(url);
      
     //const respuesta = await fetch(url);
     // const noticias = await respuesta.json();
      //console.log(noticias);
      guardarNoticia(noticia.data.articles);
    } 
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <div>
        <Header 
          titulo = "Buscador de Noticias"
        />
      </div>
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListaNoticias 
          noticias = {noticias}
        />  
      <div>

      </div>
    </Fragment>
    
  );
}

export default App;
