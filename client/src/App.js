
import './App.scss';
import React, { Component } from 'react'

export class App extends Component {

  state = {
    location: ["Canada", "  ", "Philadelphia"],
    searched: "null"
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
        <input className="search" name = "search"></input>
        <button>SEARCH</button>
      </form>
      <div>
        <p>
          {this.state.location.filter((location)=> location.toUpperCase() === this.state.searched)}
        </p>
      </div>
      </section>
    )
  }
}

export default App

