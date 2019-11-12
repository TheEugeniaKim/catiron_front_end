import React from 'react'
import '../App.css';
import { Header, Container, Divider, Image, Segment, Button, Search } from 'semantic-ui-react'
import MeowFeed from './MeowFeed'
import Profile from './Profile'

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

    handleProfileClick(event){
        console.log(this.props.catId)
        return (
            <Profile catId={this.props.catId} />  
        )
    }

    render(){
        return (
            <div>
                <Segment inverted>
                    <Image src='/logo.png' className='logo' />

                    <Button onClick={this.handleProfileClick} floated='right' >Profile</Button>
                    <Button floated='right' onClick={this.props.logout}>Logout</Button>
                    <Header as='h2' > Welcome {this.props.username}! </Header>
                    <Divider inverted />
                </Segment>
               
              
                <Container className='MeowFeed'>
                    <MeowFeed allMeows={this.state.allMeows}/>  
                </Container>
            </div>
        )
    }
}


export default MeowContainer