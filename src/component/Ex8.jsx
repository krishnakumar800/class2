import React,{ useState} from "react"
import Personal from './sub/personal'
import Address from './sub/adress'
import Edu from './sub/edu'



function Ex8(props){
    const [user,setUser] = useState({
        name : "pranav",
        email : "pranav12@gmial.com",
        mobile : "8374354833",
        address : {
            city : "Banglore",
            zip : 5877029
        },
        edu : {
            type : "degree",
            title : "B.E",
            year : 2020
        }

    })
    return (
        <div>
            <h3>Props in functional Component </h3>
            <Personal fName = {user.name} fEmail = {user.email} fMobile = {user.mobile} />
            <Address fCity = {user.address.city} fZip = {user.address.zip} />
            <Edu fType ={user.edu.type} fTitle ={user.edu.title} fYear = {user.edu.year}/>
            
        </div>
    )
}
export default Ex8