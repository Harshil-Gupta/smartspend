import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';
import TradingViewCryptoWidget from './TradingViewCryptoWidget';
import TradingViewSymbolWidget from './TradingViewSymbolWidget';
import TradingViewCryptoHeatmapWidget from './TradingViewCryptoHeatmapWidget';
import Footer from '../../components/Content/Footer';

// Conversion rates and symbols
const conversionRates = {
  bitcoin: 0.000017797,
  ethereum: 0.00023797,
  litecoin: 0.00056875,
  ripple: 0.0012378,
  cardano: 0.0008452
};

const tradingViewSymbols = {
  bitcoin: "COINBASE:BTCUSD",
  ethereum: "COINBASE:ETHUSD",
  litecoin: "COINBASE:LTCUSD",
  ripple: "COINBASE:XRPUSD",
  cardano: "COINBASE:ADAUSD"
};

const CryptoPage = () => {
  const [balance, setBalance] = useState(0);
  const [pointsToSpend, setPointsToSpend] = useState('');
  const [cryptoQuantity, setCryptoQuantity] = useState(0);
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const [purchaseLog, setPurchaseLog] = useState([]);

  useEffect(() => {
    const storedBalance = parseInt(localStorage.getItem('balance')) || 1000;
    setBalance(storedBalance);
    const storedPurchaseLog = JSON.parse(localStorage.getItem('purchaseLogCrypto')) || [];
    setPurchaseLog(storedPurchaseLog);
  }, []);

  const handleInputChange = (e) => {
    const points = parseInt(e.target.value) || 0;
    setPointsToSpend(points);
    const crypto = points * conversionRates[selectedCrypto];
    setCryptoQuantity(crypto);
  };

  const handleCryptoChange = (e) => {
    setSelectedCrypto(e.target.value);
    const points = parseInt(pointsToSpend) || 0;
    const crypto = points * conversionRates[e.target.value];
    setCryptoQuantity(crypto);
  };

  const handleBuyCrypto = () => {
    if (pointsToSpend <= balance && pointsToSpend > 0) {
      const newBalance = balance - pointsToSpend;
      localStorage.setItem('balance', newBalance);
      setBalance(newBalance);

      const newPurchase = {
        crypto: selectedCrypto,
        quantity: cryptoQuantity.toFixed(4),
        points: pointsToSpend,
        date: new Date().toLocaleString()
      };
      const updatedPurchaseLog = [...purchaseLog, newPurchase];
      localStorage.setItem('purchaseLogCrypto', JSON.stringify(updatedPurchaseLog));
      setPurchaseLog(updatedPurchaseLog);
      alert(`Crypto bought successfully! You have acquired ${(cryptoQuantity).toFixed(4)} of ${selectedCrypto}.`);
    } else {
      alert('Insufficient points or invalid input!');
    }
  };

  const handleBuyCryptoRec = () => {
    if (pointsToSpend <= balance && pointsToSpend > 0) {
      const newBalance = balance - pointsToSpend;
      localStorage.setItem('balance', newBalance);
      setBalance(newBalance);

      const newPurchase = {
        crypto: selectedCrypto,
        quantity: cryptoQuantity.toFixed(4),
        points: pointsToSpend,
        date: new Date().toLocaleString()
      };
      const updatedPurchaseLog = [...purchaseLog, newPurchase];
      localStorage.setItem('purchaseLogCrypto', JSON.stringify(updatedPurchaseLog));
      setPurchaseLog(updatedPurchaseLog);
      alert(`Crypto bought successfully! You have acquired ${(cryptoQuantity).toFixed(4)} of ${selectedCrypto}.`);
      alert('Next Buy-out will occur in 7 days!');
    } else {
      alert('Insufficient points or invalid input!');
    }
  };

  return (
    <div className="CryptoPage">
      <Container className="mt-5">
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>Wallet</Card.Header>
              <Card.Body>
                <Card.Title>Reward Points Balance: {balance}</Card.Title>
                <Card.Text>
                  Based on our conversion system, your points can be converted to cryptocurrency.
                </Card.Text>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>1 GBP = 100 Reward Points</ListGroup.Item>
                    <ListGroup.Item>1 BTC = 51445.76 GBP</ListGroup.Item>
                    <ListGroup.Item>1 ETH = 2581.69 GBP</ListGroup.Item>
                    <ListGroup.Item>1 LTC = 175.00 GBP</ListGroup.Item>
                    <ListGroup.Item>1 XRP = 0.40 GBP</ListGroup.Item>
                    <ListGroup.Item>1 ADA = 0.31 GBP</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Form.Group controlId="cryptoSelection">
                  <Form.Label>Select Cryptocurrency:</Form.Label>
                  <Form.Control as="select" value={selectedCrypto} onChange={handleCryptoChange}>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="ethereum">Ethereum</option>
                    <option value="litecoin">Litecoin</option>
                    <option value="ripple">Ripple</option>
                    <option value="cardano">Cardano</option>
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
                  You can buy <b>{cryptoQuantity.toFixed(4)}</b> of {selectedCrypto} with {pointsToSpend} points.
                </Card.Text>
                <Button variant="primary" onClick={handleBuyCrypto} className="me-2">Buy {selectedCrypto} once</Button>
                <Button variant="primary" onClick={handleBuyCryptoRec}>Buy {selectedCrypto} recurring</Button>

              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
          <div>
                <TradingViewCryptoWidget symbol={tradingViewSymbols[selectedCrypto]} />
                <TradingViewSymbolWidget symbol={tradingViewSymbols[selectedCrypto]} />
                </div>
          </Col>
        </Row>
        <Row className="mt-6">
          <Col md="12" style={{ height: '500px' }}>
            <TradingViewCryptoHeatmapWidget />
          </Col>
        </Row>
        <Row className="mt-6">
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
                        <b>{log.crypto}</b>: {log.quantity} bought for {log.points} points on {log.date}
                      </ListGroup.Item>
                    ))
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    <Footer/>
    </div>
  );
};

export default CryptoPage;
