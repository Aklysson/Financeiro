import { Container } from "./style";
import { Summary } from "../Summary";

export function Dashboard({income, expense, total}){
    return (
        <>
        <Container>
            <Summary 
            title="Entradas"
            value={income}/>
            <Summary 
            title="Saidas"
            value={expense}/>
            <Summary 
            title="Total"
            value={total}/>
        </Container>
        </>
        
    )
}