import React from 'react'
import '../App.css';
import Feed from './Feed'
import { Header, Container, Divider, Image, Segment, Button} from 'semantic-ui-react'



class MeowContainer extends React.Component{

    //Uses username passed down from app to greet the user
    
    //Provides user with option to logout - Logout button
    render(){
        return (
            <div>
                <Segment inverted>
                <Image src='/logo.png' className='logo' />

                <Header as='h2' floated='left'> Welcome {this.props.username}! </Header>
                <Button floated='right' onClick={this.props.logout}>Logout</Button>
                <Divider inverted />
                </Segment>
              
                <Container className='MeowFeed' >
                    <Feed />    
                </Container>
            </div>
        )
    }
}


export default MeowContainer