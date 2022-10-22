import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { TypesPhoto } from '../../types/TypesPhoto';

import * as C from '../../components/First';
import { Header } from "../../components/Header";
import { Box, Main } from "./styled";
import { Api } from '../../api/Api';


export const Photo = () =>{
    const navegar = useNavigate();
    const par = useParams();
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<TypesPhoto>({albumId:0, id:0, title:'',url:'',thumbnailURL:''});
    useEffect(()=>{
        if(par.id){
            loadingPhoto(par.id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const loadingPhoto = async(id:string) =>{
        setLoading(true);
        let photoInfo = await Api.getPhoto(id);
        setPhoto(photoInfo);
        setLoading(false);
    }
    
    const handleBack = () =>{
        navegar(-1);
    }
    return (
        <Main>
           <C.Joker bg="#8a0b42" color="#05e35e">
            <Header title="Foto" />
           </C.Joker>
           <C.Container direction="column">
            <C.Button onClick={handleBack} Bgbutton="#f05305">Voltar</C.Button>
            {loading &&
              <h2>Carregando...</h2>
            }
            {!loading &&
              <Box>
                <img src={photo.url} alt={photo.title} />
                <p>{photo.title}</p>
              </Box>
            }
           </C.Container>
        </Main>
    );

}