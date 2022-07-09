import { Container } from "./style";
import { Summary } from "../Summary";
import { Form } from "../Form";

export function Dashboard(){
    return (
        <>
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
        <Form />
        </>
        
    )
}