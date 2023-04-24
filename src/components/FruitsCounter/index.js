/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  onMango = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onBanana = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="main-container">
          <h1>
            Bob ate <span className="count">{count}</span> mangoes
            <span className="count">{count}</span> bananas
          </h1>
          <div className="fruits-container">
            <img
              alt="mango-img"
              className="mango-img"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
            />
            <img
              alt="banana-img"
              className="banana-img"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
            />
          </div>
          <div className="fruits-container">
            <button className="button" onClick={this.onMango}>
              Eat Mango
            </button>
            <button className="button" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
