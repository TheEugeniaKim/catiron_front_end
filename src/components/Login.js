import React from 'react'
import '../App.css';
import { Button, Form, Input } from 'semantic-ui-react'

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
                    <Form onSubmit={this.submitHandler}>
                        <Form.Input
                            onChange={this.formChangeHandler}
                            control={Input}
                            icon='user'
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                            name='username'
                            value={this.state.username} 
                        />
                        <Form.Input
                            onChange={this.formChangeHandler}
                            control={Input}
                            icon='lock'
                            iconPosition='left'
                            label='Password'
                            type='password'
                            name='password'
                            value={this.state.password} 
                        />
                
                        <Button content='Login' primary />
                    </Form>
                </div>
            )
    }
}

export default Login
    