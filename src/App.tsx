import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transaction } from "./pages/Transaction/Transaction";
import { TransactionsProvider } from "./contexts/TransactionsContexts";

export function App() {  
  return (
   <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
         <Transaction />
      </TransactionsProvider>
   </ThemeProvider>
  )
}

