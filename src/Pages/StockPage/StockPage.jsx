import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';
import TradingViewStockWidget from './TradingViewStockWidget';

const conversionRates = {
  apple: 0.000017797,
  google: 0.00023797
};

const StockPage = () => {
  const [balance, setBalance] = useState(0);
  const [pointsToSpend, setPointsToSpend] = useState('');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [selectedStock, setSelectedStock] = useState('apple');
  const [purchaseLog, setPurchaseLog] = useState([]);

  useEffect(() => {
    const storedBalance = parseInt(localStorage.getItem('balance')) || 1000;
    setBalance(storedBalance);
    const storedPurchaseLog = JSON.parse(localStorage.getItem('purchaseLog')) || [];
    setPurchaseLog(storedPurchaseLog);
  }, []);

  const handleInputChange = (e) => {
    const points = parseInt(e.target.value) || 0;
    setPointsToSpend(points);
    const stock = points * conversionRates[selectedStock];
    setStockQuantity(stock);
  };

  const handleStockChange = (e) => {
    setSelectedStock(e.target.value);
    const points = parseInt(pointsToSpend) || 0;
    const stock = points * conversionRates[e.target.value];
    setStockQuantity(stock);
  };

  const handleBuyStock = () => {
    if (pointsToSpend <= balance && pointsToSpend > 0) {
      const newBalance = balance - pointsToSpend;
      localStorage.setItem('balance', newBalance);
      setBalance(newBalance);

      const newPurchase = {
        stock: selectedStock,
        quantity: stockQuantity.toFixed(4),
        points: pointsToSpend,
        date: new Date().toLocaleString()
      };
      const updatedPurchaseLog = [...purchaseLog, newPurchase];
      localStorage.setItem('purchaseLog', JSON.stringify(updatedPurchaseLog));
      setPurchaseLog(updatedPurchaseLog);

      alert(`Stock bought successfully! You have acquired ${(stockQuantity).toFixed(4)} of ${selectedStock}.`);
    } else {
      alert('Insufficient points or invalid input!');
    }
  };

  return (
    <div className="StockPage">
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card>
              <Card.Header>Wallet</Card.Header>
              <Card.Body>
                <Card.Title>Reward Points Balance: {balance}</Card.Title>
                <Card.Text>
                  Based on our conversion system, your points can be converted to stocks.
                </Card.Text>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>1 GBP = 100 Reward Points</ListGroup.Item>
                    <ListGroup.Item>1 AAPL = 130.00 GBP</ListGroup.Item>
                    <ListGroup.Item>1 GOOGL = 2450.00 GBP</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Form.Group controlId="stockSelection">
                  <Form.Label>Select Stock:</Form.Label>
                  <Form.Control as="select" value={selectedStock} onChange={handleStockChange}>
                    <option value="apple">Apple (AAPL)</option>
                    <option value="google">Google (GOOGL)</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="pointsToSpend">
                  <Form.Label>Enter Points to Spend:</Form.Label>
                  <Form.Control
                    type="number"
                    value={pointsToSpend}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Card.Text>
                  You can buy <b>{stockQuantity.toFixed(4)}</b> shares of {selectedStock} with {pointsToSpend} points.
                </Card.Text>
                <Button variant="primary" onClick={handleBuyStock}>Buy {selectedStock}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="12" style={{ height: '500px' }}>
            <TradingViewStockWidget />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="12">
            <Card>
              <Card.Header>Purchase Log</Card.Header>
              <Card.Body>
                <ListGroup>
                  {purchaseLog.length === 0 ? (
                    <ListGroup.Item>No purchases yet.</ListGroup.Item>
                  ) : (
                    purchaseLog.map((log, index) => (
                      <ListGroup.Item key={index}>
                        <b>{log.stock}</b>: {log.quantity} shares bought for {log.points} points on {log.date}
                      </ListGroup.Item>
                    ))
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StockPage;
