import React, { useState, useEffect} from 'react';
import pic from './assets/profile_pic.jpg';
import './styles/App.css';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logos from './components/Logos';

function App() {
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
      <div className="pro_pic_holder"><img className ={scrolled ? "pro_pic": "blurred_pro_pic"} src={pic} alt='professional_pic'/></div>
      <Logos/>
    </div>
  );
}

export default App;
