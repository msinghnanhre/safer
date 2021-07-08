import {Component} from 'react'

class ServicesList extends Component {
    state = {
        stores: ["a", "b"]
    }
    

    servicesBreachedInState = () => {
        this.props.data.map(item => {
            if (item.State === "DC") {
                return <p>{item}</p>
            }
            return;
        })
        // serviceList.map(item => {
        //     this.setState({
        //             stores: [...this.state.stores, ]
        //         })
        // })
    }

    render() {
        return (
            <div>
                {this.servicesBreachedInState()}
            </div>
        )
    }
}

export default ServicesList
