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
import lottie from 'lottie-web'

export class App extends Component {

  state = {
  
    dataBasedOnBreach: [],
    email: [],
    networkServer: [],
    others: [],
    dataSet: [],

    searched:null,
    selectedState: null,
    location: ["canada", "philadelphis"]

  }



   abbrState = (input, to) => {
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(let i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(let i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}

  abbrdName = (name) => {
    if (name) {
      return (
        <p> You are currently viewing information on the state of {    this.abbrState(name, "name")
    }</p>
      )
    } else if (!name){
      return (
        <p> You are currently viewing information on all states combined</p>
      )
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.selectedState === this.state.selectedState && prevState.searched !== this.state.searched) {
      console.log("hi")
      axios.get('http://localhost:8080/api/data/breach')
      .then(res => {
        console.log(res.data[0])
          this.setState({
            email: res.data[0].filter((object) => object.State.toUpperCase() === this.state.searched),
            networkServer: res.data[1].filter((object) => object.State.toUpperCase() === this.state.searched),
            others: res.data[2].filter((object) => object.State.toUpperCase() === this.state.searched)
          })
      }).catch(err => {
      console.log(err)
      })
    }
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
    const value = e.target.search.value
    if(value.length === 2 ) {
      this.setState({       
         searched: value.toUpperCase(),
      })
    } else if (this.abbrState(value, 'abbr') === undefined){
      document.location.reload() 
      alert("No such state exists")
      this.setState({       
        searched: value.toUpperCase(),
     })
    }else {
      this.setState({
        searched: this.abbrState(value, 'abbr'),
      })
    } 
 
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
    // if(!this.state.selectedState) {
    //   return (
    //     <div>
    //       loading
    //     </div>
    //   )
    // }
    return (
      <section className="app">
        <Header />
        <Hero />

        <Search />
                <div className="white">
      <h3 className="white__subtitle">Find out how you are affected in your area</h3>
        <form
          onSubmit={this.submitHandler}
          className="app__form"
        >
          
          <input className="app__search" name = "search" placeholder="Enter your city: CT...Colorado...CA..." required></input>
          <button className="app__button">SEARCH</button>
        </form>

        <div className="app__text">
            <p  className="app__text-content">
  {this.abbrdName(this.state.searched)}
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
        <p className="app__body-text">Take the steps to protect youself against an email breach so you don’t fall victim.</p>
          {/* <Affected data={this.state.dataSet} />
          <ServicesList data={this.state.dataSet} state={this.state.searched}/> */}
            </div>

        <Protect />
        <Footer />
      </section>
    )
  }
}

export default App

