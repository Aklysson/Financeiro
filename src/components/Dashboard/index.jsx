import { Container } from "./style";
import { Summary } from "../Summary";
import { useContext } from "react";
import { TransactionContext } from "../../Transactions";

export function Dashboard(){

const transactions = useContext(TransactionContext)

const income = transactions
.filter((item) => !item.expense)
.map((transactions) => Number(transactions.amount))

const incomes = income.reduce((acc, cur) => acc + cur,0).toFixed(2)


const outcome = transactions
.filter((item) => item.expense)
.map((transactions) => Number(transactions.amount))

const expenses = outcome.reduce((acc, cur) => acc + cur,0).toFixed(2)


let total = incomes - expenses
if(total < 0) {
    total = 0
}


return (
        <>
        <Container>
            <Summary 
            title="Entradas"
            value={incomes}/>
            <Summary 
            title="Saidas"
            value= {expenses}/>
            <Summary 
            title="Total"
            value= {total}/>
        </Container>
        </>
        
    )
}