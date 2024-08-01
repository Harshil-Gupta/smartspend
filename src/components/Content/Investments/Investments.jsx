import { Center, Grid } from '@chakra-ui/react';
import './Investments.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import goldImage from './Pictures/gold.jpg';
import stockImage from './Pictures/stocks.jpg';
import cryptoImage from './Pictures/crypto.jpg';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Investments() {
  const navigate = useNavigate();

  const handleGoldInvest = () => {
    navigate('/gold');
  };
  const handleStockInvest = () => {
    navigate('/stock');
  };
  const handleCryptoInvest = () => {
    navigate('/crypto');
  };
  return (
    <CardGroup>
      <Card>
      <Card.Img variant="top" src={goldImage} alt="Gold" />
      <Card.Body className="card-body-stretch">
        <div>
          <Card.Title>Gold</Card.Title>
          <Card.Text>
            Gold is a precious metal that has been a store of value for centuries. It is often seen as a hedge against inflation and economic uncertainty.
          </Card.Text>
        </div>
        <Button className="card-button-bottom" type="button" onClick={handleGoldInvest}>
          Invest
        </Button>
      </Card.Body>
      <Card.Footer className="text-center"> 
        <small className="text-muted">Low Risk | Low Return</small>
      </Card.Footer>
    </Card>
      {/* <Card>
        <Card.Img variant="top" src={stockImage} alt="Stocks" />
        <Card.Body>
          <Card.Title>Stocks</Card.Title>
          <Card.Text>
            Investing in stocks means buying shares of ownership in public companies. Stocks can offer high returns but come with higher risk.{' '}
          </Card.Text>
          <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.dark">
            <Button type="button" onClick={handleStockInvest}>Invest</Button>
          </Box>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Mid Risk | Mid Return</small>
        </Card.Footer>
      </Card> */}
      <Card>
      <Card.Img variant="top" src={cryptoImage} alt="Crypto" />
      <Card.Body className="card-body-stretch">
        <div>
          <Card.Title>Cryptocurrencies</Card.Title>
          <Card.Text>
            Cryptocurrencies are digital or virtual currencies that use cryptography for security. They are decentralized and can offer high volatility.
          </Card.Text>
        </div>
        <Button className="card-button-bottom" type="button" onClick={handleCryptoInvest}>
          Invest
        </Button>
      </Card.Body>
      <Card.Footer className="text-center"> 
        <small className="text-muted">High Risk | High Return</small>
      </Card.Footer>
    </Card>
    </CardGroup>
  );
}

export default Investments;