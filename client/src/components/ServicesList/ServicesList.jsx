import {Component} from 'react'

class ServicesList extends Component {

    

    servicesBreachedInState = (dataSet, state) => {
        const serviceList = []
        this.props.data.map(item => {
            if (item.State === "DC") {
                serviceList.push(item.Name)
            }
        })
        serviceList.map(item => {
            <p>{item}</p>
        })
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
