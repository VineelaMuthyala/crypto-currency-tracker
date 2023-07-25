import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrienciesList()
  }

  getCryptoCurrienciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  renderCryptoCurrienciesList = () => {
    const {cryptoList} = this.state
    return (
      <div className="currency-List-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-image"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        <ul>
          <li className="nav-bar">
            <p className="nav-bar-text">Coin Type</p>
            <div className="currency-text-container">
              <p className="nav-bar-text">USD</p>
              <p className="nav-bar-text">EURO</p>
            </div>
          </li>
          <li>
            {cryptoList.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                cryptoCurrencyItemDetails={eachItem}
              />
            ))}
          </li>
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderCryptoCurrienciesList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
