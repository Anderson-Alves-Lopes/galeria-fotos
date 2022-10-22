import axios from "axios";

const BASE = 'https://jsonplaceholder.typicode.com';
export const Api ={
   getGalery: async () =>{
     let response = await axios.get(`${BASE}/albums`);
     return response.data;
   },
   getAbum: async (id:string | undefined) =>{
    let response = await axios.get(`${BASE}/albums/${id}`);
    return response.data;
   },
   getCollectionPhotos: async (id: string | undefined) =>{
    let response = await axios.get(`${BASE}/albums/${id}/photos`);
    return response.data;
   },
   getPhoto: async (id:string | undefined) =>{
       let response = await axios.get(`${BASE}/photos/${id}`);
       return response.data;
   }
  
}