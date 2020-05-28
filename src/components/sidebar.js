import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/sidebar.css';
import { RiGithubLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { BrowserRouter as Router} from 'react-router-dom';

function underline(e){
  // console.log(e);
  // e.target.style.textDecoration = "underline";
  return;
}

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <div className={'sidebar'}>
        <Router>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link
           href="/" 
           className={"navitem"}
            style={{ textDecoration: "null",}}>Home</Nav.Link>
          <Nav.Link href="/" className={"navitem"}>Technical Expertise</Nav.Link>
          <Nav.Link href="/resume" className={"navitem"}>Resumé</Nav.Link>
          <Nav.Link href="/" className={"navitem"}>Education</Nav.Link>
          <Nav.Link href="/" className={"navitem"}>Projects</Nav.Link>
          <Nav.Link href="/" className={"navitem"}>Contact Me</Nav.Link>
        </Nav>
        </Router>
        <div className= "logo-holder">
          <div className = "logo-background">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ahkaneti"><RiGithubLine size={35} color={"yellow"}/></a>
          </div>
          <div className="logo-background" style={{marginLeft: "25%"}}>
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/aaronkaneti"><FaLinkedinIn size={30} color={"yellow"} style={{paddingTop:"4", paddingLeft: "2",}}/></a>
          </div>
        </div>
      </div>
    )
  }
}
export default Sidebar;