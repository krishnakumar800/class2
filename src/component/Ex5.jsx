import React from "react"
import  { useState } from "react"

function Ex5(props) {

    const [num,setNum] = useState(0)
    const addOne = () =>{
        setNum(num+1)
    }

    return (

        <div>
            <h1>State and Handler</h1>
            <h1> number = {num}</h1>
            <button onClick = {() => addOne()}>Add + 1</button>

        </div>
    )
}
export default Ex5