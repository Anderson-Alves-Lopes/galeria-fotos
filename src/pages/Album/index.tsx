import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {TypesPhoto} from '../../types/TypesPhoto';
import {TypesAlbum} from '../../types/TypesAlbum';
import { Api } from '../../api/Api';

import {Main, Grid} from './styled';
import {Header} from '../../components/Header';
import * as C from '../../components/First';



export const Album = () =>{
    const navegar = useNavigate();
    const par = useParams();
    
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<TypesPhoto[]>([]);
    const [album, setAlbum] = useState<TypesAlbum>({userId:0, id:0, title:''});
     useEffect(()=>{
         if(par.id){
          loadingAlbum(par.id);
          loadingPhotos(par.id);
         }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[]);
    const loadingAlbum =  async(id:string) =>{
       
        let albumInfo = await Api.getAbum(id);
        setAlbum(albumInfo);
    };
    const loadingPhotos = async(id:string) =>{
        setLoading(true);
        let photosInfo = await Api.getCollectionPhotos(id);
        setPhotos(photosInfo);
        setLoading(false);
    }
    const handleBack = () =>{
        navegar(-1);
    };
    console.log(photos);
    return (
      <Main>
        <C.Joker bg="#252447" color="#fff">
            <Header title="Albuns de Fotos" />
        </C.Joker>
        <C.Container direction="column" >
            <C.Button onClick={handleBack} Bgbutton="#333">Voltar</C.Button>
           {loading &&
            <h2>Carregando...</h2>
           }
             <h2>{album.title}</h2>

           {!loading &&
             <Grid>
             {photos.map((item, index)=>(
               <Link key={index} to={`/photos/${item.id}`} >
                  <img src={item.url} alt={item.title} /> 
               </Link>
              
             ))}
             </Grid>
           }
            
        </C.Container>
      </Main>

    );
}