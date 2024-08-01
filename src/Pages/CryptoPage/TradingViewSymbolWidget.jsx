// TradingViewSymbolInfoWidget.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const TradingViewSymbolInfoWidget = ({ symbol }) => {
  useEffect(() => {
    const existingScript = document.getElementById('tradingview-symbol-info-widget-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'tradingview-symbol-info-widget-script';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "450",
      locale: "en",
      colorTheme: "light",
      isTransparent: false
    });

    const container = document.querySelector('.tradingview-symbol-info-widget-container');
    if (container) {
      container.appendChild(script);
    }
  }, [symbol]);

  return <div className="tradingview-symbol-info-widget-container" style={{ height: '200px' }}></div>;
};

TradingViewSymbolInfoWidget.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default TradingViewSymbolInfoWidget;
