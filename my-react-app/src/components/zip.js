import React from "react";


class Zip extends React.Component{
    constructor(){
        super();
        this.state = {
            
            zip: "",
            locationText: "",
            state: "",
            location: "",
            estimatedPopulation: "",
            totalWages: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();

        // this.setState({
        //     userInput: event.target.userInput.value
        // })

        if (isNaN(event.target.userInput.value)) {
            fetch("http://ctp-zip-api.herokuapp.com/city/" + event.target.userInput.value.toUpperCase())
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        zip: data[0]
                       })
                    })
                .then(data => {
                    if(this.state.zip.length === 5){
                        fetch('http://ctp-zip-api.herokuapp.com/zip/' + this.state.zip)
                            .then(response => response.json())
                            .then(data => {
                                let info = data[0];
                                this.setState({
                                    locationText: info.LocationText,
                                    zip: "Zip Code: " + info.Zipcode,
                                    state: "State: " + info.State,
                                    location: "Location: ("+ info.Lat + ", " + info.Long + ")",
                                    estimatedPopulation: "Population (estimated): " + info.EstimatedPopulation,
                                    totalWages: "Total Wages: " + info.TotalWages,               
                             })
                             
                        })
                    }
                    })
        }
        else if(event.target.userInput.value.length === 5) {
            fetch("http://ctp-zip-api.herokuapp.com/city/" + event.target.userInput.value.toUpperCase())
                        fetch('http://ctp-zip-api.herokuapp.com/zip/' + event.target.userInput.value)
                            .then(response => response.json())
                            .then(data => {
                                let info = data[0];
                                this.setState({
                                    locationText: info.LocationText,
                                    zip: "Zip Code: " + info.Zipcode,
                                    state: "State: " + info.State,
                                    location: "Location: ("+ info.Lat + ", " + info.Long + ")",
                                    estimatedPopulation: "Population (estimated): " + info.EstimatedPopulation,
                                    totalWages: "Total Wages: " + info.TotalWages,               
                             })
                             
                        })
                    
                    }
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
                   {/* You searched: {this.state.userInput}  */}
                </h2>
                <h3>
                    <div>{this.state.zip}</div>
                    <div>{this.state.locationText}</div>
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




                                // let body = document.querySelector("body");
                                // let ulist = document.createElement("ul");
                                // for (const property in this.state) {
                                    
                                    
                                //     let listElement = document.createElement("li");
                                //     let div = document.createElement("div").innerHTML = "{this.state." + property + "}";
                                //     listElement.append(div);
                                //     ulist.append(listElement);
                                //   }
                                //   console.log(ulist)
                                // body.append(ulist);

        // ----------------------------------------------------------------- NOTE: Was trying to figure out a way to 
        // else if (isNaN(event.target.userInput.value)) {
        //     fetch("http://ctp-zip-api.herokuapp.com/city/:cityname" + event.target.userInput.value.toUpperCase())
        //         .then(response => response.json())
        //         .then(data => {
                    
        //            let info = data[0];
        //            this.setState({
        //                state: "State: " + info.State,
        //                location: "Location: ("+ info.Lat + ", " + info.Long + ")",
        //                estimatedPopulation: "Population (estimated): " + info.EstimatedPopulation,
        //                totalWages: "Total Wages: " + info.TotalWages,
        //            })
        //            console.log(this.state)
        //         });