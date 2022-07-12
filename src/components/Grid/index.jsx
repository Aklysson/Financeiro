import React, { useContext } from "react";
import { TransactionContext } from "../../Transactions";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = () => {
 const itens = useContext(TransactionContext)
console.log(itens)
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item}  />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;