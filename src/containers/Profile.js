import React from 'react';
import '../App.css';
import { Header, Container, Divider, Image, Segment, Button, Search } from 'semantic-ui-react'
import MeowFeed from './MeowFeed'


class Profile extends React.Component{
    state = {
        catMeows: []
    }

    componentDidMount(){
        console.log(this.props.catId)
        fetch('http://localhost:3000/cats/[this.props.catId]/profile')
        .then(response => response.json())
        .then(meows => this.setState({catMeows: meows}))
    }

    
    render(){
        console.log(this.state.allMeows)
        return (
            <div>
                <Segment inverted>
                    <Image src='/logo.png' className='logo' />

                    <Button floated='right' onClick={null}>Feed</Button>
                    <Search floated='right' />
                    <Button floated='right' onClick={this.props.logout}>Logout</Button>
                    <Header as='h2' floated='center'> Welcome {this.props.username}! </Header>
                    <Divider inverted />
                </Segment>
               
              
                <Container className='MeowFeed'>
                    <MeowFeed  />  
                </Container>
            </div>
        )
    }

}

export default Profile 