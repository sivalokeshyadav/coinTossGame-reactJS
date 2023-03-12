// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isHead: true, totalCount: 0, headsCount: 0, tailsCount: 0}

  coinToss = () => {
    const getNumber = Math.floor(Math.random() * 2)

    if (getNumber === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (getNumber === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state

    const srcInput = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="mini-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={srcInput} alt="toss result" className="img-src" />
          <button className="button" type="button" onClick={this.coinToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
