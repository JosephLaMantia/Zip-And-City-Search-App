import React from "react";


class Zip extends React.Component{
    constructor(){
        super();
        this.state = {
            userInput: "",
            zip: "",
            location: "",
            state: "",
            country: "",
            estimatedPopulation: "",
            totalWages: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();

        this.setState({
            userInput: event.target.userInput.value
        })

        console.log(event.target.userInput.value.length);
        if(event.target.userInput.value.length === 5 && !isNaN(event.target.userInput.value)){
            fetch('http://ctp-zip-api.herokuapp.com/zip/' + event.target.userInput.value)
             .then(response => response.json())
             .then(data => {
                let info = data[0];
                this.setState({
                    state: "State: " + info.State,
                    location: "Location: ("+ info.Lat + ", " + info.Long + ")",
                    estimatedPopulation: "Population (estimated): " + info.EstimatedPopulation,
                    totalWages: "Total Wages: " + info.TotalWages,
                })
                console.log(this.state)
             });
             
        }

        // if(isNaN(event.target.userInput.value)){
        //     fetch('http://ctp-zip-api.herokuapp.com/zip/' + event.target.userInput.value)
        //      .then(response => response.json())
        //      .then(data => {
        //         let cityInfo = data[0].City
        //         console.log(cityInfo)
        //         this.setState({
        //             city : cityInfo
        //         })
        //         console.log(cityInfo)
        //      });
             
        // }
    }

    render(){
        return (<div>
            <form onSubmit={this.handleChange}>
                <input
                type="text"
                name="userInput"
                placeholder="Enter Zip or City"
                >
                </input> 
                <input
                type="submit">
                </input>
            </form>
            <div>
                <h2>
                   You searched: {this.state.userInput} 
                </h2>
                <h3>
                    <div>{this.state.state}</div>
                    <div>{this.state.location}</div>
                    <div>{this.state.estimatedPopulation}</div>
                    <div>{this.state.totalWages}</div>

                </h3>
            </div>
        </div>
            
            );
    }
}

export default Zip;
