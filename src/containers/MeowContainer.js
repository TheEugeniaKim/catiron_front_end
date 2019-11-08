import React from 'react'

class MeowContainer extends React.Component{

    //Uses username passed down from app to greet the user
    
    //Provides user with option to logout - Logout button
    render(){
        return (
            <div>
                Welcome {this.props.user}!
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}


export default MeowContainer