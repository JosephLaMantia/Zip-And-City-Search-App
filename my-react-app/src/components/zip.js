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
             .then(data => console.log(data));
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
        </div>
            
            );
    }
}

export default Zip;
