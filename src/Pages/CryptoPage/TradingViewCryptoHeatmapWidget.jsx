import React, { useEffect, useRef, memo } from 'react';

function TradingViewCryptoHeatmapWidget() {
  const container = useRef();

  useEffect(() => {
    const existingScript = document.querySelector("script[src='https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js']");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";;
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "dataSource": "Crypto",
          "blockSize": "market_cap_calc",
  "blockColor": "change",
  "locale": "en",
  "symbolUrl": "",
  "colorTheme": "light",
  "hasTopBar": false,
  "isDataSetEnabled": false,
  "isZoomEnabled": true,
  "hasSymbolTooltip": true,
  "isMonoSize": false,
  "width": "100%",
  "height": "100%"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewCryptoHeatmapWidget);