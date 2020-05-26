import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/sidebar.css';
import { RiGithubLine } from 'react-icons/ri';
import { FaLinkedinIn, FaLink } from 'react-icons/fa';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div className={'sidebar'}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home" className={"navitem"}>Home</Nav.Link>
          <Nav.Link eventKey="link-1" className={"navitem"}>Technical Expertise</Nav.Link>
          <Nav.Link eventKey="link-2" className={"navitem"}>Education</Nav.Link>
          <Nav.Link eventKey="link-3" className={"navitem"}>Projects</Nav.Link>
          <Nav.Link eventKey="link-4" className={"navitem"}>Contact Me</Nav.Link>
        </Nav>
        <div className= "logo-holder">
          <div className = "logo-background">
            <a href="https://github.com/ahkaneti"><RiGithubLine size={35} color={"yellow"}/></a>
          </div>
          <div className="logo-background" style={{marginLeft: "25%"}}>
            <a href="https://linkedin.com/in/aaronkaneti"><FaLinkedinIn size={30} color={"yellow"} style={{paddingTop:"4", paddingLeft: "2",}}/></a>
          </div>
        </div>
      </div>
    )
  }
}
export default Sidebar;