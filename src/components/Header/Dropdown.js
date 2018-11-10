import React from 'react'

const Dropdown = (props) => (
    <React.Fragment>
        {props.open && 
        <ul className="dropdown">
            <li>Profile</li>
            <li>Edit Profile</li>
            <li>Log out</li>
        </ul>}
    </React.Fragment>
)

export default Dropdown