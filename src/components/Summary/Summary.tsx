import { useContext } from "react";
import { SummaryCard, SummaryContainer } from "./style";
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  CurrencyDollarIcon
} from "@phosphor-icons/react";
import { TransactionsContext } from "../../contexts/TransactionsContexts";

export function Summary() {

  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUpIcon size={32} color="#00b373" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color="#f75a68" />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color="#fff" />
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
