import React, {Component} from "react"
import axios from "axios"

export default class CreateUser extends Component {
    constructor(props){
        super(props)
        
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
        this.state ={
            username: "",
        }
    }
    //this was copied from the create-exercise form component
    onChangeUsername(event){
        this.setState({   //don't try to assign values, always use setState
            username: event.target.value  //look in the text field for this
        })
    }
    //this was copied from the create-exercise form component
    onSubmit(event){
        event.preventDefault()

        const user = {
            username: this.state.username,
        }
        console.log("submitting new user.")
        console.log(user)

        // post the data to the users/add route, and then print the data in the JSON you sent
        axios.post("http://localhost:5000/users/add",user)
            .then(result => console.log(result.data))

        this.setState({
            username: ""
        })
    }
    
    render(){
        return(
            <div>
            <h1>Add a new mans!</h1>
            <form onSubmit = {this.onSubmit}>
                {/* This form will include a label and an input */}
                <div className = "form-group">  
                    <label>Username:</label>
                    <input type="text" required className="form-control" value ={this.state.username} onChange={this.onChangeUsername} />
                </div>
                </form>
            </div>
        )
    }
}