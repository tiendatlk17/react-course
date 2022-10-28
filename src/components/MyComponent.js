//class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor"
class MyComponent extends React.Component {


    render() {
        return (

            <div>
                <UserInfor />
                <DisplayInfor name="Tien Dat G" age="22" />

                <hr />
                <DisplayInfor name="Thuy Quynh" age={18} />
            </div >
        );
    }
}

export default MyComponent;