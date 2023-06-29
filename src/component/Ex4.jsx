import React from "react"

class Ex4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x : 23,
            y : 123,
            title : 'welcome to string example',
            view : true,
            colors : ["red","blue","green"],
            user : {
                name : "sony",
                email : "sony12@gmail.com",
                age : 23
            }
        }
    }

    render() {
        return (
            <div>
                <h1>States of class component</h1>
                <h4>x = {this.state.x}</h4>
                <h4> y = {this.state.y}</h4>
                <h4>title = {this.state.title}</h4>
                <h4> {this.state.view ? "say true ": "say false"}</h4>
                <ol>
                    {
                        this.state.colors.map((item,index) => {
                            return (
                                <li key = {index}> {item}</li>
                            )
                        }

                        )
                    }
                </ol>

                <hr/>
                <h3>user name = {this.state.user.name}</h3>
                <h3> user email = {this.state.user.email}</h3>
                <h3> user age = {this.state.user.age}</h3>

            </div>
        )
    }
}

export default Ex4