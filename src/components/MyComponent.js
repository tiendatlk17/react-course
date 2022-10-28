//class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor"
class MyComponent extends React.Component {


    render() {
        const MyArr = [1, 2, 3];
        return (

            <div>
                <UserInfor />
                <DisplayInfor name="Tien Dat G" age="22" />

                <hr />
                <DisplayInfor name="Thuy Quynh" age={18} MyArr={MyArr} />
            </div >
        );
    }
}

export default MyComponent;