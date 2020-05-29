import React from 'react';
import Sidebar from '../components/sidebar';
import Logos from '../components/Logos';
import '../styles/App.css';
import '../styles/AboutMe.css';


function AboutMe(){
  return(
    <div className='App'>
      <Sidebar/>
      <div className="midpart">
        <h1>About <strong>Me</strong></h1>
        <h3>Bachelor of Science in Psychology & Computer Science • Front-End Engineer • Data Analyst</h3>
        <p><strong>I am a software engineer that strives to create the most ergonomically induced code as possible. 
          My aim, when coding, is to create code that anyone can use.</strong></p>
        <h1>Confidence in <strong>my Technical Expertise</strong></h1>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>HTML 5</strong></p>
            <p className='percentage'>90%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>JavaScript</strong></p>
            <p className='percentage'>90%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>Unity</strong></p>
            <p className='percentage'>80%</p>
            <div className="total"><div className="achieved" style={{ width: "80%" }}></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>java</strong></p>
            <p className='percentage'>75%</p>
            <div className="total"><div className="achieved" style={{ width: "75%" }}></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>React Native</strong></p>
            <p className='percentage'>70%</p>
            <div className="total"><div className="achieved" style={{ width: "70%" }}></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>C++</strong></p>
            <p className='percentage'>80%</p>
            <div className="total"><div className="achieved" style={{ width: "80%" }}></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>Python</strong></p>
            <p className='percentage'>85%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>C#</strong></p>
            <p className='percentage'>70%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>CSS3</strong></p>
            <p className='percentage'>80%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>Racket</strong></p>
            <p className='percentage'>90%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
        </div>
      </div>
      <Logos/>
    </div>
  )
}
export default AboutMe;