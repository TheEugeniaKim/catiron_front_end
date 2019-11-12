import React from 'react';
import '../App.css';
import { Button, Divider, Grid, Segment, Header, Image } from 'semantic-ui-react'
import Login from './Login'
import SignUp from './SignUp'

class Welcome extends React.Component{
    state={
        hasAccount: true
    } 



   
    signUp = () => {
        this.setState({hasAccount: false})
    }

    render(){
    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Image src='/logo.png' className='logo' />
                <Header.Content>Welcome to CatIron</Header.Content>
            </Header>

            {this.state.hasAccount ? 
            
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Login login={this.props.login} />
                </Grid.Column>
            
                <Grid.Column verticalAlign='middle'>
                    <Button onClick={this.signUp}content='Sign up' icon='signup' size='big' />
                </Grid.Column>
                </Grid>
            
                <Divider vertical>Or</Divider>
            </Segment> :

            <Segment>
                <Grid columns={1}>
                    <Grid.Column>
                        <SignUp login={this.props.login}/>
                    </Grid.Column>
                </Grid>


            </Segment>}
        </div>
    )
    }
}

export default Welcome