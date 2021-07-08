
import { Component} from "react"

class Affected extends Component {
    state = {
        email: null,
        network: null,
        other: null,
    }

    peopleAffected = () => {
        let count = 0;
        this.props.data.map(item => {
            if (item.CoveredEntity !== "Healthcare Provider") {
                count++
            }
        })
        return (count)
    }

    render() {
        console.log(this.peopleAffected())
        return (
            <div>
                <h1>Number of Affected people in Your State</h1>
            </div>
        )
    }
}

export default Affected
