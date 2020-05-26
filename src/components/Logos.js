import React from 'react';
import '../styles/logos.css';
import NULogo from '../assets/NULogo.png'
import IEEELogo from '../assets/IEEELogo.png'

class Logos extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="logo_holder">
        <img src={IEEELogo} alt="IEEE Logo" className="logo"/>
        <img src={NULogo} alt="Northwestern Logo" className="logo"/>
        <p styles={{fontFamily:"Montserrat"}} className="logo">hymn</p>
      </div>
    )
  }
}

export default Logos;