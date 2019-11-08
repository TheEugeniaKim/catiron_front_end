import React from 'react'

class Login extends React.Component{

    state = {
        username: "",
        password: ""
    }
    //Submit Handler function - prevents user from logging in if either
    //Username field or password are blank - alerts user
    //Once user puts valid username and password in - submit executes the 
    //Login function passed down from App


    submitHandler = (event) => {
        event.preventDefault();
        if(this.state.username === '' || this.state.password === ''){
            alert('Please enter a valid username or password')
        }
        else {this.props.login(this.state.username)}
    }

    //Form change handler dyanamically changes state of the form 
    //based on what field is being changed
    formChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }
    
    render(){
            return ( 
                <div>
    
                    <form onSubmit={this.submitHandler}>
                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.formChangeHandler}/>
                        <br/>
        
                        <input type="password" placeholder="password"  name="password" value={this.state.password} onChange={this.formChangeHandler}/>
                        <br>
                        </br>
                        <input type="submit" name="Login"/>
                    </form>
                </div>
            )
    }
}

export default Login