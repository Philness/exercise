import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercise extends Component {
    constructor(props){
        super(props)
        
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeDuration = this.onChangeDuration.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
        this.state ={
            username: "",
            description: "",
            duration: 0,
            date : new Date(),
            users : []
        }
    }

    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: "test user"
        })
    }

    onChangeUsername(event){
        this.setState({   //don't try to assign values, always use setState
            username: event.target.value  //look in the text field for this
        })
    }
    onChangeDescription(event){
        this.setState({
            description: event.target.value  //look in the text field for this
        })
    }
    onChangeDuration(event){
        this.setState({
            duration: event.target.value  //look in the text field for this
            })
        }
    onChangeDate(date){
        this.setState({
            date: date  //look in the calendar plugin for this
            })
    }

    onSubmit(event){
        event.preventDefault()

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log("submitting new exercise.")
        console.log(exercise)

        window.location = "/" //return to this route using window.location
    }
    render(){
        return(
            
            <div>
            <h1>Create a new exercise log!</h1>
            <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option key={user} value={user}>{user}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type ="text" className="form-control" value = {this.state.description} onChange={this.onChangeDescription} />
                </div>
                <div className="form-group">
                    <label>Duration (minutes):</label>
                    <input type ="text" className="form-control" value = {this.state.duration} onChange={this.onChangeDuration} />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <div>
                    <DatePicker selected = {this.state.date} onChange={this.onChangeDate}></DatePicker>
                    </div>
                </div>
                <div className = "form-group">
                    <input type ="submit" value = "Do eeeet" className="btn btn-primary" onSubmit={this.onSubmit} />
                </div>


            </form>
            </div>
        )
    }
}