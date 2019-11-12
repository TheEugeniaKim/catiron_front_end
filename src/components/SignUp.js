import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

class SignUp extends React.Component {
    state={
        name: null,
        password: null,
        email: null,
        nickname: null,
        bio: null
    }
    
    formChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

   
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch("http://localhost:3000/cats", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"},
            body: JSON.stringify({"name": this.state.name, "password": this.state.password, "bio": this.state.bio}) 
        })
        .then(response => response.json())
        .then(newUser => this.props.login(newUser.name))
        
    }

   render(){
       return (
        <div>
            <Form onSubmit={this.submitHandler}>
                <Form.Input type='text' label='Username' name='name' value={this.state.name} onChange={this.formChangeHandler}/>
                <Form.Input type='password' label='Password' name='password' value={this.state.password} onChange={this.formChangeHandler}/>
                <Form.Input type='text' label='Email' name='email' value={this.state.email} onChange={this.formChangeHandler} />
                <Form.Input type='text' label='Nickname' name='nickname' value={this.state.nickname} onChange={this.formChangeHandler} />
                <Form.Input type='text' label='Bio' name='bio' value={this.state.bio} onChange={this.formChangeHandler}/>
                <Button content='Sign Up'primary />
            </Form>
        </div>
    )
       }
}

export default SignUp