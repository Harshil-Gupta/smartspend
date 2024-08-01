import React from 'react';
import { Card, Container, Row, Col, CardGroup } from 'react-bootstrap';
import './Portfolio.css'; // Import your CSS file for custom styling

function Portfolio() {
  return (
      <CardGroup>
            <Card className="h-100 custom-card custom-card-portfolio">
              <Card.Body>
                <Card.Title>Current Portfolio (Units)</Card.Title>
                <Card.Text className="dummy-value">Gold: 40 gm</Card.Text>
                <Card.Text className="dummy-value">XRP: 52</Card.Text>
                <Card.Text className="dummy-value">ETH: 1.43</Card.Text>
              </Card.Body>
            </Card>
            <Card className="h-100 custom-card custom-card-value">
              <Card.Body>
                <Card.Title>Redemptions</Card.Title>
                <Card.Text className="dummy-value">Coins Redeemed: 85,000</Card.Text>
                <Card.Text className="dummy-value"> </Card.Text>
                <Card.Text className="dummy-value">Value: £850</Card.Text>
              </Card.Body>
            </Card>
            <Card className="h-100 custom-card custom-card-market-value">
              <Card.Body>
                <Card.Title>Current Market Value</Card.Title>
                <Card.Text className="dummy-value">Gold: £5,000</Card.Text>
                <Card.Text className="dummy-value">XRP: £4,000</Card.Text>
                <Card.Text className="dummy-value">ETH: £1,200</Card.Text>
              </Card.Body>
            </Card>
            {/* <Card className="h-100 custom-card custom-card-redeemed">
              <Card.Body>
                <Card.Title>Coins Redeemed So Far</Card.Title>
                <Card.Text className="dummy-value">Value: 150 Coins</Card.Text>
              </Card.Body>
            </Card> */}
      </CardGroup>
  );
}

export default Portfolio;
