
import React, { Component } from 'react'
import './LandingPage.scss';
import BodyCard from '../BodyCard/BodyCard';
export class LandingPage extends Component {

  state = {
    location: [{name: "Canada", problem: "justin trudeau"}, {name: "Philadelphia", problem: "something about cheese steaks"}, {name: "South Korea", problem: "too much traffic"}],
    searched: null,
    selectedObject: null,
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({
      searched: e.target.search.value.toUpperCase(),
    })
    e.target.search.value = ""
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.selectedObject === this.state.selectedObject && prevState.searched !== this.state.searched) {
      this.setState({
        selectedObject: this.state.location.filter((location)=> location.name.toUpperCase() === this.state.searched)[0]
      })
    }
  }

  render() {
    if(!this.state.selectedObject) {
      return (
        <section className="section">
                  <BodyCard/>

        <form className = "form"onSubmit = {this.submitHandler}>
          <input className="search" name = "search"></input>
          <button className="search-button">Search Now</button>
        </form>
        <div>
          <p>
            You are not in any state,
          </p>
          <p>
            You are safe {}
          </p>
        </div>
        </section>)
    }
    
    return (
      
      <section className="section">
                <BodyCard/>
      <form onSubmit = {this.submitHandler}>
        <input className="search" name = "search"></input>
        <button className="search-button">SEARCH</button>
      </form>
      <div>
        <p>
          You are in {this.state.selectedObject.name} state,
        </p>
        <p>
          Be careful of {this.state.selectedObject.problem}
        </p>
      </div>
      </section>
    )
  }
}

export default LandingPage

