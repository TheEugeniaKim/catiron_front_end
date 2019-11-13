import React from 'react'
import { Button, Form } from 'semantic-ui-react'
class NewMeow extends React.Component{
    state={
        content: null
    }

    submitHandler = (event) => {
        event.preventDefault()
       
        fetch(('http://localhost:3000/meows'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                body: this.state.content,
                cat_id: this.props.catId,
                username: this.props.username

            })
        })
        .then(response => response.json())
        .then(newMeow => this.props.createNewMeow(newMeow))
    }

    formChangeHandler = (event) => {
        this.setState({content: event.target.value})
    }
    render(){
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <h3 className='New-meow'>What is on your mind?</h3>
                    <Form.TextArea name='content' value={this.state.content} onChange={this.formChangeHandler}/>
                    <Button content='Meow!'primary />
                </Form>
            </div>
        )
    }
}


export default NewMeow