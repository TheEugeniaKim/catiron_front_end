import React from 'react'

const NavBar = (props) => {

    const changeDisplay = (event) => {

       return props.changeDisplay(event.target.dataset.page)
        
    }

    

    return (
        <div>
            <span data-page='home' onClick={changeDisplay}>Home</span>
            <span data-page='profile' onClick={changeDisplay}>Profile</span>
            <span data-page='new-tweet' onClick={changeDisplay}>Create New Tweet</span>
        </div>
    )
}

export default NavBar