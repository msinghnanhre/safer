import './App.scss';
import React, { Component } from 'react'
import LineChart from "./components/LineChart/LineChart"
import PieChart from "./components/PieChart/PieChart"

export class App extends Component {

  state = {
    location: ["Canada", "  ", "Philadelphia"],
    searched: "null",
    data: [13, 11, 5, 7, 5, 3]
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      searched: e.target.search.value.toUpperCase(),
    })
    e.target.search.value = ""
  }

  render() {
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
        <LineChart data={this.state.data} />
        <PieChart data={this.state.data} />
      </section>
    )
  }
}

export default App

