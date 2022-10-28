import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Tien Dat',
        address: 'Phu Cat Binh Dinh',
        age: 22
    }
    // JSX 


    handleOnChangeInput = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    handleClickSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {

        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}

                <form onSubmit={(event) => { this.handleClickSubmit(event) }}>
                    <label>Your name</label>
                    <input
                        value={this.state.name}
                        type='text'
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Your age</label>
                    <input
                        value={this.state.age}
                        type='text'
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;