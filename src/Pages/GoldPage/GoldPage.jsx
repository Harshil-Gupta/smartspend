import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';
import TradingViewGoldWidget from './TradingViewGoldWidget';

const GoldPage = () => {
  const [balance, setBalance] = useState(0);
  const [pointsToSpend, setPointsToSpend] = useState('');
  const [goldQuantity, setGoldQuantity] = useState(0);
  const [purchaseLog, setPurchaseLog] = useState([]);

  useEffect(() => {
    const storedBalance = parseInt(localStorage.getItem('balance')) || 1000;
    setBalance(storedBalance);

    const storedPurchaseLog = JSON.parse(localStorage.getItem('purchaseLogGold')) || [];
    setPurchaseLog(storedPurchaseLog);
  }, []);

  const handleInputChange = (e) => {
    const points = parseInt(e.target.value) || 0;
    setPointsToSpend(points);
    const gold = points / 100 * 0.017797; // Adjust conversion rate as needed
    setGoldQuantity(gold);
  };

  const handleBuyGold = () => {
    if (pointsToSpend <= balance && pointsToSpend > 0) {
      const newBalance = balance - pointsToSpend;
      localStorage.setItem('balance', newBalance);
      setBalance(newBalance);

      const newPurchase = {
        quantity: goldQuantity.toFixed(4),
        points: pointsToSpend,
        date: new Date().toLocaleString()
      };
      const updatedPurchaseLog = [...purchaseLog, newPurchase];
      localStorage.setItem('purchaseLogGold', JSON.stringify(updatedPurchaseLog));
      setPurchaseLog(updatedPurchaseLog);

      alert(`Gold bought successfully! You have acquired ${(goldQuantity).toFixed(4)} grams of gold.`);
    } else {
      alert('Insufficient points or invalid input!');
    }
  };

  const handleBuyGoldRecurring = () => {
    if (pointsToSpend <= balance && pointsToSpend > 0) {
      const newBalance = balance - pointsToSpend;
      localStorage.setItem('balance', newBalance);
      setBalance(newBalance);

      const newPurchase = {
        quantity: goldQuantity.toFixed(4),
        points: pointsToSpend,
        date: new Date().toLocaleString()
      };
      const updatedPurchaseLog = [...purchaseLog, newPurchase];
      localStorage.setItem('purchaseLogGold', JSON.stringify(updatedPurchaseLog));
      setPurchaseLog(updatedPurchaseLog);

      alert(`Gold bought successfully! You have acquired ${(goldQuantity).toFixed(4)} grams of gold.`);
      alert('Next Buy-out will occur in 7 days!');

    } else {
      alert('Insufficient points or invalid input!');
    }
  };

  return (
    <div className="GoldPage">
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card>
              <Card.Header>Wallet</Card.Header>
              <Card.Body>
                <Card.Title>Reward Points Balance: {balance}</Card.Title>
                <Card.Text>
                  Based on our conversion system, your points can be converted to gold.
                </Card.Text>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>1 GBP = 0.017797 Gram Gold</ListGroup.Item>
                    <ListGroup.Item>1 Gram Gold = 56.19 GBP</ListGroup.Item>
                    <ListGroup.Item>1 GBP = 100 Reward Points</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Form.Group controlId="pointsToSpend">
                  <Form.Label>Enter Points to Spend:</Form.Label>
                  <Form.Control
                    type="number"
                    value={pointsToSpend}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Card.Text>
                  You can buy <b>{goldQuantity.toFixed(4)}</b> grams of gold with {pointsToSpend} points.
                </Card.Text>
                <Button variant="primary" onClick={handleBuyGold} className="me-2">Buy One-Time</Button>
                <Button variant="primary" onClick={handleBuyGoldRecurring}>Buy Recurring</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="12" style={{ height: '500px' }}>
            <TradingViewGoldWidget />
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
                        <b>Gold</b>: {log.quantity} grams bought for {log.points} points on {log.date}
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

export default GoldPage;