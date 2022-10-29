//class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor"
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Tien Dat G", age: "22" },
            { id: 2, name: "Tien Dat ", age: "23" },
            { id: 3, name: "Tien ", age: "18" }
        ]
    }

    render() {


        // DRY: dont repeat yourself
        return (

            <div>
                <UserInfor />
                <DisplayInfor

                    listUsers={this.state.listUsers}

                />


            </div >
        );
    }
}

export default MyComponent;