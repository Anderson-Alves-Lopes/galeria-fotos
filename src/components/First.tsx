import styled from "styled-components";

type JokerProps = {
    bg:string;
    color:string;
}
export const Joker = styled.div<JokerProps>`
   background-color:${(props)=> props.bg};
   color:${(props)=>props.color};
`;
type ContainerProps = {
    direction?:string;
    align?:string;
    content?:string;
}
export const Container = styled.div<ContainerProps>`
   max-width:1100px;
   width:100%;
   display:flex;
   align-items: ${(props)=> props.align};
   justify-content: ${(props)=> props.content};
   flex-direction: ${(props)=>props.direction};
   min-height:100vh;
   margin:auto;
   padding:0 2%;
`;
export const Header = styled.header`
     width:100%;
     padding:20px 0;
     display:flex;
     align-items:center;
     justify-content:center;
`;
type ButtonProps ={
    Bgbutton:string;
}
export const Button = styled.button<ButtonProps>`
  width:120px;
  padding:10px 5px;
  cursor:pointer;
  color:#fff;
  background-color:${(props)=> props.Bgbutton};
  border-radius:8px;
  margin:15px 0;
  border:none;
  font-size:17px;
  text-transform:uppercase;
  box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.75);
  transition:all ease .5s;
  &:hover{
    opacity:.8;
    box-shadow: 6px 6px 14px 0px rgba(0,0,0,0.9);
  }
`;