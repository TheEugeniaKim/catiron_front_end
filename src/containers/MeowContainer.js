import React from 'react'
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
                Welcome {this.props.user}!

                <button onClick={this.props.logout}>Logout</button>
                <MeowFeed allMeows={this.state.allMeows}/>
                
            </div>
        )
    }
}


export default MeowContainer