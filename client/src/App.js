import './App.scss';
import React, { Component } from 'react'
import BarChart from "./components/BarChart/BarChart"
import PieChart from "./components/PieChart/PieChart"
import axios from "axios"
import ServicesList from "./components/ServicesList/ServicesList"
import Affected from "./components/Affected/Affected"
import Protect from "./components/Protect/Protect"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Search from "./components/Search/Search"
import Footer from "./components/Footer/Footer"

export class App extends Component {

  state = {
    location: ["Canada", "  ", "Philadelphia"],
    searched: "null",
    dataBasedOnBreach: [],
    email: [],
    networkServer: [],
    others: [],
    dataSet: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/api/data/breach')
      .then(res => {
        console.log(res.data[0])
          this.setState({
            email: res.data[0],
            networkServer: res.data[1],
            others: res.data[2]
          })
      }).catch(err => {
      console.log(err)
      })
    axios.get('http://localhost:8080/api/data')
      .then(res => {
        this.setState({
          dataSet: res.data
        })
      })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      searched: e.target.search.value.toUpperCase(),
    })
    e.target.search.value = ""
  }

  individualsAffectedThroughEmail = () => {
    let individualsAffected = 0;
    this.state.email.map(item => {
      individualsAffected = individualsAffected +(Number(item.IndividualsAffected))
    })
    return (`${individualsAffected}`)
  }

  render() {
    return (
      <section className="app">
        <Header />
        <Hero />
        <Search />
        <form
          onSubmit={this.submitHandler}
          className="app__form"
        >
          <input className="app__search" name = "search" placeholder="Enter your city"></input>
          <button className="app__button">SEARCH</button>
        </form>

        <div className="app__text">
            <p>
              {this.state.location.filter((location)=> location.toUpperCase() === this.state.searched)}
            </p>
        </div>

        <div className="app__chartData">
          <PieChart
            data={this.state}
            className="app__pieChart"
          />
            <BarChart data={this.state} />
          <p className="app__chart-text"><span className="app__chart-span">{this.individualsAffectedThroughEmail()}</span>People were affected By Email Breach</p>
        </div>
        <p className="app__body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
          {/* <Affected data={this.state.dataSet} />
          <ServicesList data={this.state.dataSet} state={this.state.searched}/> */}
        <Protect />
        <Footer />
      </section>
    )
  }
}

export default App

