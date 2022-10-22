
import styled from "styled-components";

import Bg1  from '../../assets/img/background1.jpg';

export const Main = styled.div`
   background-image:url(${Bg1});
   background-size:cover;
   background-position:center;
   background-repeat:no-repeat;
`;

export const Grid = styled.div`
   width:100%;
   display:grid;
   grid-template-columns: repeat(2, 1fr);
   gap:20px;
   padding-top:30px;
   

  a{
    font-size:17px;
    text-decoration:none;
    padding:15px 5px;
    border:1px solid #aaa;
    text-align:center;
    background-color:#eee;
    color:#444;
    box-shadow: 4px 5px 14px 0px rgba(0,0,0,0.5);
    transition:all ease .5s;
    &:hover{
        box-shadow: 6px 7px 14px 0px rgba(0,0,0,0.8);
    }
  }
`;