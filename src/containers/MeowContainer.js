import React from 'react'
import '../App.css';
import { Header, Container, Divider, Image, Segment, Button, Search } from 'semantic-ui-react'
import MeowFeed from './MeowFeed'

class MeowContainer extends React.Component{
    state={
        allMeows: []
    }
    //Uses username passed down from app to greet the user
    
    //Provides user with option to logout - Logout button

    componentDidMount(){
        fetch('http://localhost:3000/meows')
        .then(response => response.json())
        .then(meows => this.setState({allMeows: meows}))
    }
    render(){
        return (
            <div>
                <Segment inverted>
                <Image src='/logo.png' className='logo' />

                <Header as='h2' floated='left'> Welcome {this.props.username}! </Header>
                <Search floated='right' />
                <Button floated='right' onClick={this.props.logout}>Logout</Button>
                <Divider inverted />
                </Segment>
              
                <Container className='MeowFeed' >
                     <MeowFeed allMeows={this.state.allMeows}/>  
                </Container>
            </div>
        )
    }
}


export default MeowContainer