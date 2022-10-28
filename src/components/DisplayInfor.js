import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // props -> viet tat properties
        console.log(this.props)
        return (
            <div>
                <div>{this.props.name} </div>
                <div>{this.props.age} </div>
            </div>
        )
    }
}
export default DisplayInfor;