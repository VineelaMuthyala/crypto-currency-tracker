import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyItemDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptoCurrencyItemDetails

  return (
    <div className="item-container">
      <div className="crypto-currency-item-container">
        <div className="logo-name-container">
          <img
            className="currency-logo"
            src={currencyLogo}
            alt={currencyName}
          />
          <p className="item-text">{currencyName}</p>
        </div>
        <div className="currency-container">
          <p className="item-text">{usdValue}</p>
          <p className="item-text">{euroValue}</p>
        </div>
      </div>
    </div>
  )
}
export default CryptocurrencyItem
