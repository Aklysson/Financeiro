import React from "react";
import { useContext } from "react";
import { TransactionContext } from "../Transactions";

export function Oi(){
const transactionList = useContext(TransactionContext)
console.log(transactionList)
return (
    
    <>
    <h1>oi</h1>
    </>
)
}
