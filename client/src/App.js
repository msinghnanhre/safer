import { Component} from"react"
import './App.scss';
import axios from "axios"


class App extends Component {
  state = {
    city: ""
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  onClick = () => {
    console.log(this.state.city)
    axios.post('http://localhost:8080/api/city', {
      city: this.state.city,
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state.city)
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" name="city" placeholder="Enter your city" onChange={e => { this.onChange(e) }} />
          <button onClick={this.onClick}>Search</button>
        </header>
      </div>
    );
  }
}

export default App;
