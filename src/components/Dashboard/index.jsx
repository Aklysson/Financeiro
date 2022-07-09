import { Container } from "./style";
import { Summary } from "../Summary";

export function Dashboard(){
    return (
        <Container>
            <Summary 
            title="Entradas"
            value="50,00"/>
            <Summary 
            title="Saidas"
            value="50,00"/>
            <Summary 
            title="Total"
            value="50,00"/>
        </Container>
            
        
    )
}