import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
// import './Expenses.css'; // Import your CSS file for custom styling

function Expenses() {
  const transactions = [
    { id: 1, service: 'Zara', amount: '£50.00', date: '2024-08-01', card: 'NatWest Reward Credit Card', coins: 50 },
    { id: 2, service: 'Adidas', amount: '£75.00', date: '2024-07-30', card: 'NatWest Business Credit Card', coins: 75 },
    { id: 3, service: 'Starbucks', amount: '£15.00', date: '2024-07-29', card: 'NatWest Credit Card', coins: 15 },
    { id: 4, service: 'Amazon', amount: '£120.00', date: '2024-07-25', card: 'NatWest Reward Black Credit Card', coins: 120 },
    { id: 5, service: 'H&M', amount: '£45.00', date: '2024-07-20', card: 'NatWest Student Credit Card', coins: 45 }
  ];

  // Calculate totals
  const totalAmount = transactions.reduce((acc, transaction) => acc + parseFloat(transaction.amount.replace('£', '')), 0);
  const totalCoins = transactions.reduce((acc, transaction) => acc + transaction.coins, 0);

  return (
    <div>
      <h2>Transaction History</h2>
      <Table striped bordered hover className="transaction-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Amount (GBP)</th>
            <th>Date</th>
            <th>Credit Card</th>
            <th>Coins Rewarded</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.service}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>{transaction.card}</td>
              <td>{transaction.coins}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row className="mt-4">
        <Col md={6}>
          <div className="total-box">
            <h4>Total Amount Spent:</h4>
            <p className="total-value">£{totalAmount.toFixed(2)}</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="total-box">
            <h4>Total Coins Rewarded:</h4>
            <p className="total-value">{totalCoins}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Expenses;
