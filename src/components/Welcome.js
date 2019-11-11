import React from 'react';
import { Button, Divider, Grid, Segment, Header, Icon } from 'semantic-ui-react'
import Login from './Login'

function Welcome(props){

    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>Welcome to CatIron</Header.Content>
            </Header>

            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Login login={props.login} />
                </Grid.Column>
            
                <Grid.Column verticalAlign='middle'>
                    <Button content='Sign up' icon='signup' size='big' />
                </Grid.Column>
                </Grid>
            
                <Divider vertical>Or</Divider>
            </Segment>
        </div>
    )
}

export default Welcome