//class component
// function component

import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Tien Dat',
        address: 'Phu Cat Binh Dinh',
        age: 22
    }
    // JSX 
    handleClick = (event) => {
        console.log('Click me')
        console.log('My name is', this.state.name)

        this.setState({
            name: 'Thuy Quynh'
        })
    }
    render() {
        return (

            <div>
                My name is {this.state.name} and I'm from {this.state.address}

                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;