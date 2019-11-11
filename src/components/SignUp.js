import React from 'react'

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
            <form onSubmit={this.submitHandler}>
                <input type='text' name='name' value={this.state.name} onChange={this.formChangeHandler}/>
                <input type='number' name='age' value={this.state.age} onChange={this.formChangeHandler}/>
                <input type='text' name='motto' value={this.state.motto} onChange={this.formChangeHandler}/>
            </form>
        </div>
    )
       }
}

export default SignUp