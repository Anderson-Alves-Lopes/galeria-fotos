import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import { Api } from '../../api/Api';
import * as C from '../../components/First';
import { Header } from '../../components/Header';
import { TypesAlbum } from '../../types/TypesAlbum';
import {Grid, Main} from './styled'

export const Home = () =>{
     const [loading, setLoading] = useState(false);
     const [albums, setAlbums] = useState<TypesAlbum[]>([]);
      
     useEffect(()=>{
        loadAlbums();
     },[]);
     const loadAlbums = async () =>{
         setLoading(true);
         let albumInfo = await Api.getGalery();
         setAlbums(albumInfo);
         setLoading(false);
     }
     
    return(
        <Main>
          <C.Joker bg="#a83236" color="#000">
            <Header title="Galeria de Fotos"/>
         </C.Joker>
         <C.Container>
           {loading &&
            <h2>Carregando....</h2>
           }
           {!loading &&
           <Grid>
             {albums.map((item,index)=>(
               <Link key={index} to={`album/${item.id}`}>
                  <h2>{item.title}</h2>
               </Link>
             ))}
           </Grid>
           }
         </C.Container>
        </Main>
    );
}