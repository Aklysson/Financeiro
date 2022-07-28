import { createContext } from "react";
import { useEffect, useState   } from "react";


export const TransactionContext = createContext([])

export function TransactionProvider(props){

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/transactions")
          .then((response) => response.json())
          .then((json) => setTransactions(json))
      }, [])

    return (
        <TransactionContext.Provider value={transactions}>
            {props.children}
        </TransactionContext.Provider>
    )
}

