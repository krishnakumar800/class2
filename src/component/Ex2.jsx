import React,{ useState } from 'react'
// state => internal varaible of react,number,string,boolean,object,array

const Ex2 = (props) =>{
    // useState => react hook
    // const [state,handler] = useState(initial value)

    const[x,setX] = useState(133)
    const[title,setTitle] = useState("welcome to react")
    const[view , setView] = useState(true)
    const[user,setUser] = useState({
        name : "sony",
        email : "sony12@gmail.com",
        age : 23
    }
       

    )

    const[colors,setColors] = useState(["red","blue","green"])
    return (
        <div>
            <h1>States in fucntional components </h1> 
            <h4> var x = {x}</h4>
            <h4> var title = {title}</h4>
            <h4> { view ? "say true":"say false"}</h4>
            <hr/>
            <h4> {user.name},{user.email} and {user.age}</h4>

            <hr/>

            <ol>{
                  colors.map((item,index) => {
                    return (
                        <li key ={index}> {item}</li>
                    )
                })
                }
              
                
         

            </ol>

          

                
           
        </div>
    )
}
export default Ex2