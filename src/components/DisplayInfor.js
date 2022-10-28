import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // destructuring Array/Object
        // props -> viet tat properties
        const { age, name } = this.props
        console.log(this.props.MyArr)
        return (
            <div>
                <div>{name} </div>
                <div>{age} </div>

            </div>
        )
    }
}
export default DisplayInfor;