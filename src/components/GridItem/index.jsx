import React from "react";
import * as C from "./style";


const GridItem = ({ item}) => {
  return (
    <C.Tr>
      <C.Td>{item.description}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td alignCenter>
        {item.expense ? "Gastos" : "Entradas"}
      </C.Td>
      <C.Td alignCenter>
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;