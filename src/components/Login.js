import React from 'react'

class Login extends React.Component{

    state = {
        hasAccount: true,
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

    signUp = () => {
        this.setState({hasAccount: false})
    }
    
    render(){
            return ( 
                <div>
                    {this.state.hasAccount ?
                    //Login Form
                    <form onSubmit={this.submitHandler}>
                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.formChangeHandler}/>
                        <br/>
                        <input type="password" placeholder="password"  name="password" value={this.state.password} onChange={this.formChangeHandler}/>
                        <br/>
                        <input type="submit" value="Login"/>
                        <br/>
                        <button onClick={this.signUp}>Sign Up</button>
                    </form> 
                    : 
                    <form onSubmit={this.submitHandler}>
                        Username <br/>
                        <input type='text' name='name' value={this.state.name} onChange={this.formChangeHandler}/>
                        <br/>
                        Password <br/>
                        <input type='password' name='password' value={this.state.password} onChange={this.formChangeHandler}/>
                        Age <br/>
                        <input type='number' name='age' value={this.state.age} onChange={this.formChangeHandler}/>
                        <br/>
                        Motto <br/>
                        <input type='text' name='motto' value={this.state.motto} onChange={this.formChangeHandler}/>
                        <br/>
                        <input type='submit' name='Submit'/>
                    </form>
                    }


                </div>
            )
    }
}

export default Login