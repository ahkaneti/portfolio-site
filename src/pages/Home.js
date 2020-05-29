import React, { useState, useEffect } from 'react';
import pic from '../assets/profile_pic.jpg';
import '../styles/App.css';
import Sidebar from '../components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logos from '../components/Logos';


import Typist from 'react-typist';
//https://www.npmjs.com/package/react-typist ^^^^ 



function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(true);
    window.addEventListener("scroll", onScroll);

    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrolled]);
  return (
    <div className="App" activeKey='/home'>
      <Sidebar />
      <div className="midpart">
        <div className="pro_pic_holder">
          <img className={scrolled ? "blurred_pro_pic" : "pro_pic"} src={pic} alt='professional_pic' />
          {scrolled ? 
          <div className="welcome_text">
            <p styles={{ fontFamily: "Montserrat" }}>
              Hi, I'm Aaron! I'm a 
              <Typist>
                <span>developer</span>
                <Typist.Backspace count={9} delay={1200} />
                <span>student</span>
                <Typist.Backspace count={7} delay={1200} />
                <span>Front-End Engineer</span>
                </Typist>
            </p>
          </div> : <div></div>
          }
        </div>
        <div className="expertise">
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
          </ul>
          </div>
      </div>
      <Logos />
    </div>
  );
}

export default Home;