import { useContext } from "react";
import { SummaryCard, SummaryContainer } from "./style";
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  CurrencyDollarIcon
} from "@phosphor-icons/react";
import { TransactionsContext } from "../../contexts/TransactionsContexts";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {

  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
     (acc, transaction) => {
      if(transaction.type === 'income') {
        acc.icome += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;

      }
      return acc 
     },
    {
      icome: 0, 
      outcome: 0, 
      total: 0
    })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUpIcon size={32} color="#00b373" />
        </header>
        <strong>{priceFormatter.format(summary.icome)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDownIcon size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollarIcon size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
