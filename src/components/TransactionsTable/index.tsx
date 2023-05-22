import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

export default function TransactionsTable() {
  const {transactions} = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => 
              (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>{
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.amount)
                  }</td>
                  <td>{transaction.category}</td>
                  <td>{
                    new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))
                    }</td>
                </tr>
              )
            )
          }
          {/* <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>20/02/2021</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  )
}
