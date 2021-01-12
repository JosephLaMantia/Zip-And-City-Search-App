import React from "react";


class Zip extends React.Component{
    constructor(){
        super();
        this.state = {
            zipCode: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();

        this.setState({
            zipCode: event.target.zipCode.value
        })

        console.log(event.target.zipCode.value.length);
        if(event.target.zipCode.value.length === 5){
            //event.target.zipCode.value <--- how we access the user inputted zip code.
            fetch('http://ctp-zip-api.herokuapp.com/zip/' + event.target.zipCode.value)
             .then(response => response.json())
             .then(function(data) {
                 let city = data[0].City;
                 console.log(city);
                 document.querySelector("label").innerText = city;
             });
             
        }
    }

    render(){
        return (<div>
            <form onSubmit={this.handleChange}>
                <input
                type="text"
                name="zipCode"
                placeholder="Enter Zip"
                >
                </input> 
                <input
                type="submit">
                </input>
            </form>
            <div>
                <label></label>
            </div>
        </div>
            
            );
    }
}

export default Zip;
