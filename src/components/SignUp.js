import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

class SignUp extends React.Component {
    state={
        name: null,
        age: null,
        motto: null
    }
    
    formChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

   
    submitHandler = (event) => {
        event.preventDefault()
        //Take this state and send it to the meow container
        
    }

   render(){
       return (
        <div>
            <Form onSubmit={this.submitHandler}>
                <Form.Input type='text' label='Username' name='name' value={this.state.name} onChange={this.formChangeHandler}/>
                <Form.Input type='number' label='Age' name='age' value={this.state.age} onChange={this.formChangeHandler}/>
                <Form.Input type='text' label='Motto' name='motto' value={this.state.motto} onChange={this.formChangeHandler}/>
                <Button primary />

            </Form>
        </div>
    )
       }
}

export default SignUp