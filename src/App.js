import { Form } from "./components/Form";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./global"
import  Grid  from "./components/Grid";
import { TransactionProvider } from "./Transactions";

export default function App() {
  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <Form />
      <Grid />
      <GlobalStyle />
    </TransactionProvider>
  );
}


