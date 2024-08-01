// TradingViewCryptoWidget.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const TradingViewCryptoWidget = ({ symbol }) => {
  useEffect(() => {
    const existingScript = document.getElementById('tradingview-crypto-widget-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'tradingview-crypto-widget-script';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "450",
      isTransparent: false,
      colorTheme: "light",
      locale: "en"
    });

    const container = document.querySelector('.tradingview-crypto-widget-container');
    if (container) {
      container.appendChild(script);
    }
  }, [symbol]);

  return <div className="tradingview-crypto-widget-container" style={{ height: '250px' }}></div>;
};

TradingViewCryptoWidget.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default TradingViewCryptoWidget;
