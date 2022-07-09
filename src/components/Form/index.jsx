import { useState } from "react";
import * as C from "./style";

export function Form() {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState("")


    const handleSave = () => {

    }


    return (
        <C.Container>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input value={amount} type='number' onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)} />
                <C.Label htmlfor='rIncome'>Entradas</C.Label>
                <C.Input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)} />
                  <C.Label htmlfor='rExpenses'>Saída</C.Label>
                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.RadioGroup>
        </C.Container>
    )
}