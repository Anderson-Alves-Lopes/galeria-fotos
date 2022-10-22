import * as  C from './First';


type Props ={
    title:string;
}
export const Header = (props:Props) =>{
    return (
         
            <C.Header>
                <h1>{props.title}</h1>
            </C.Header>
         
    );
}