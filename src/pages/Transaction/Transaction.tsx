import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SerarchForm } from "../components/SearchForm";
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable
} from "./style";
import { TransactionsContext } from "../../contexts/TransactionsContexts";
import { dateFormatter, priceFormatter } from "../../utils/formatter";


export function Transaction() {
  
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SerarchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%"> {transaction.description} </td>
                  <td>
                    <PriceHightLight variant={transaction.type}>
                      {/* Implementar o sinal menos no valor da saida */}
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHightLight>
                  </td>
                  <td> {transaction.category} </td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
