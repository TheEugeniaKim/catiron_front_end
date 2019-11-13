import React from 'react'
import '../App.css';
import { Header, Container, Divider, Image, Segment, Button } from 'semantic-ui-react'
import MeowFeed from './MeowFeed'
import NewMeow from '../components/NewMeow'
// import Profile from './Profile'

class MeowContainer extends React.Component{
    state = {
        allMeows: [],
        profileMeows: [],
        profile: false,
    }
    //Uses username passed down from app to greet the user
    
    //Provides user with option to logout - Logout button

    componentDidMount(){
        fetch(`http://localhost:3000/cats/${this.props.catId}/feed`)
        .then(response => response.json())
        .then(meows => this.setState({allMeows: meows}))
        
        fetch(`http://localhost:3000/cats/${this.props.catId}/profile`)
        .then(response => response.json())
        .then(meows => this.setState({profileMeows: meows}))
        console.log(this.state.profileMeows)
    }

    createNewMeow = (newMeowObj) => {
        this.setState({profileMeows: [...this.state.profileMeows, newMeowObj], allMeows: [...this.state.allMeows, newMeowObj]})

    }



    handleProfileClick(event){
        this.setState(prevState => ({
            profile: !prevState.profile
        })
    )}

    render(){
        console.log(this.props.catId)
        return (
            //If the display is profile show profile
            //if the display is new-tweet show new tweet form



            <div>
                <Segment inverted>
                    <Image src='/logo.png' className='logo' />

                    <Button onClick={(event) => {this.handleProfileClick(event, this.props.catId)}} floated='right' >{this.state.profile ? "Feed" : "Profile"}</Button>
                    <Button floated='right' onClick={this.props.logout}>Logout</Button>
                    <Header as='h2' > Welcome {this.props.username}! </Header>
                    <NewMeow catId={this.props.catId} username={this.props.username} createNewMeow={this.createNewMeow}/>
                    <Divider inverted />
                    

                </Segment>
               
            { this.state.allMeows ?
                <Container className='MeowFeed'>
                    {this.state.profile ? <MeowFeed allMeows={this.state.profileMeows}/> : <MeowFeed allMeows={this.state.allMeows} /> }
                </Container>
                : null}
            </div>
        )
    }
}


export default MeowContainer