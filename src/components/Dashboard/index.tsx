import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    // eslint-disable-next-line no-unreachable
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
