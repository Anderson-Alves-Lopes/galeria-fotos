import styled from "styled-components";


export const Main = styled.div`
  
  h2{
    font-size:30px;
    color: #384354;
    margin:20px auto;
  }
`;

export const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:20px;
    padding-top:30px;

    img{
        max-width:250px;
        padding:10px;
        border:3px solid #0000ff;
        box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.75);
        transition:all ease .5s;
        &:hover{
            padding:7px;
            opacity:.7;
        }
    }

`;