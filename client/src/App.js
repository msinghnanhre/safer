import './App.scss';
import React, { Component } from 'react'
import LineChart from "./components/LineChart/LineChart"
import PieChart from "./components/PieChart/PieChart"
import axios from "axios"

export class App extends Component {

  state = {
    location: ["Canada", "  ", "Philadelphia"],
    searched: "null",
    dataBasedOnBreach: [],
    email: [],
    networkServer: [],
    others: [],
    data: [10, 8, 6, 4, 6,2]
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/api/data')
      .then(res => {
          this.setState({
            email: res.data[0],
            networkServer: res.data[1],
            others: res.data[2]
          })
      }).catch(err => {
      console.log(err)
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      searched: e.target.search.value.toUpperCase(),
    })
    e.target.search.value = ""
  }

  render() {
    const { email, networkServer, others} = this.state
    return (
      <section>
      <form onSubmit = {this.submitHandler}>
        <input className="search" name = "search" placeholder="Enter your city"></input>
        <button>SEARCH</button>
      </form>
      <div>
        <p>
          {this.state.location.filter((location)=> location.toUpperCase() === this.state.searched)}
        </p>
        </div>
        <LineChart data={this.state} />
        <PieChart data={this.state} />
      </section>
    )
  }
}

export default App

