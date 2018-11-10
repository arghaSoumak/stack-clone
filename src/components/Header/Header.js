import React from 'react'
// logos
import Logo from '../../img/logo.png'
import Avatar from '../../img/avatar.jpg'
// Header css
import './Header.css'
import Dropdown from './Dropdown';
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // check wheather dropdown open or not
            isDropdownOpen: false
        }
    }
    openDropdown = () => {
        this.setState({isDropdownOpen: !this.state.isDropdownOpen})
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container">
                        <div className="main_header">
                            {/* logo */}
                            <img id="logo" src={Logo} alt=""/>
                            <nav>
                                {/* search icon */}
                                <div className="search_icon">
                                    <i className="material-icons">search</i>
                                </div>
                                
                                {/* avatar */}
                                <div className="avatar" 
                                style={{
                                    backgroundImage: `url(${Avatar})`
                                }}
                                onClick={this.openDropdown}>
                                    {/* drop down menu */}
                                    <Dropdown open={this.state.isDropdownOpen}/>
                                    
                                </div>
                                {/* ask button */}
                                <button className="button1">Ask Question</button>
                            </nav>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )

    }
}
export default Header