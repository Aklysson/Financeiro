import { useState } from "react";
import { Button, Container, Input, InputContent, RadioGroup } from './style';

export function Form({handleAdd }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false)


    const handleSave = () => {
        if(!description || !amount ) {
            alert("Please insert a valid description and amount");
            return;
        } else if(amount < 1) {
            alert("Please insert a valid amount");
            return;
        }

        const generateID = () => Math.round(Math.random() * 1000)

        const transaction = {
            id: generateID(),
            description: description,
            amount: amount,
            expense: isExpense,
            
        }

        handleAdd(transaction);

        setDescription("")
        setAmount("")
    }



    return (
        <>
        <Container>
            <InputContent>
                Descrição
                <Input>
                    <input value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </Input>
            </InputContent>
            <InputContent>
                Valor
                <Input>
                    <input type="Number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} />
                </Input>
            </InputContent>
            <RadioGroup>
                <Input>
                    <input type="radio"
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={() => setExpense(!isExpense)} />
                </Input>

                <label htmlFor="rIncome">Entradas</label>
                <Input>
                    <input type="radio"
                        id='rExpenses'
                        name='group1'
                        onChange={() => setExpense(!isExpense)} />
                </Input>
                <label htmlFor="rExpenses">Saídas</label>
            </RadioGroup>
            <Button onClick={handleSave}>Adicionar</Button>
        </Container>
</>
    )
}