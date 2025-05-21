import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SerarchForm } from "../components/SearchForm";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SerarchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHightLight variant="income">
                    R$ 12.000,00
                </PriceHightLight>
              </td>
              <td>Venda</td>
              <td>21/05/2025</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHightLight variant="outcome">
                    - R$ 59,00
                </PriceHightLight>
              </td>
              <td>Alimentação</td>
              <td>21/05/2025</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
